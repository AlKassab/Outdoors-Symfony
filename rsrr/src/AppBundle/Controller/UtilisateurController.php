<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;


use Pi\RsrBundle\Entity\Utilisateur;
use AppBundle\Form\UtilisateurType;
use AppBundle\Form\RegisterType;

class UtilisateurController extends Controller
{
    private $session;

    public function __construct()
    {
        $this->session = new Session();
    }

    public function loginAction(Request $request)
    {
        if (is_object($this->getUser())){
            return $this->redirect('home');
        }

        $authenticationUtils = $this->get('security.authentication_utils');
        $error = $authenticationUtils->getLastAuthenticationError();
        $lastUsername = $authenticationUtils->getLastUsername();


        return $this->render('AppBundle:User:login.html.twig', array(

            'last_username'=> $lastUsername,
            'error' => $error
        ));
    }

    public function registerAction(Request $request)
    {
        if (is_object($this->getUser())){
            return $this->redirect('home');
        }

        $user = new Utilisateur();
        $form = $this->createForm(RegisterType::class, $user);

        $form->handleRequest($request);
        if ($form->isSubmitted()){
            if ($form->isValid()){

                $em=$this->getDoctrine()->getManager();

                $query = $em->createQuery('select u from PiRsrBundle:Utilisateur u where u.email=:email or u.username=:username')
                    ->setParameter('email',$form->get("email")->getData())
                    ->setParameter('username',$form->get("username")->getData());

                $user_isset = $query->getResult();

                if (count($user_isset) == 0) {

                    $factory = $this->get("security.encoder_factory");
                    $encoder = $factory->getEncoder($user);

                    $password = $encoder->encodePassword($form->get("password")->getData(), $user->getSalt());

                    $user->setPassword($password);
                    $user->setRole("ROLE_USER");
                    $user->setImage(null);
                    $user->setCity("Tunisia");

                    $em->persist($user);
                    $flush = $em->flush();

                    if ($flush == null){
                        $status = "You have signed-up correctly";
                        $this->session->getFlashBag()->add("status",$status);
                        return $this->redirect("login");
                    }else{
                        $status = "You haven't signed-up correctly";
                    }


                }else{
                    $status = "This user already exists!";
                }


            } else {
                $status = "You haven't signed-up successfully!";

            }

            $this->session->getFlashBag()->add("status",$status);


        }

        return $this->render('AppBundle:User:register.html.twig', array(
            "form" => $form->createView()
        ));
    }

    public function nickTestAction(Request $request){

        $username= $request->get("username");
        $em = $this->getDoctrine()->getManager();
        $user_repo=$em->getRepository("PiRsrBundle:Utilisateur");
        $user_isset = $user_repo->findOneBy(array("username"=>$username));
        $result = "used";
        if (count($user_isset) >=1 && is_object($user_isset)){
            $result = "used";
        }else{
            $result = "unused";
        }
        return new Response($result);
    }

    public function editUserAction(Request $request){

        $user = $this->getUser();
        $user_image = $user->getImage();
        $form = $this->createForm(UtilisateurType::class, $user);

        $form->handleRequest($request);
        if ($form->isSubmitted()){
            if ($form->isValid()){

                $em=$this->getDoctrine()->getManager();

                $query = $em->createQuery('select u from PiRsrBundle:Utilisateur u where u.email=:email or u.username=:username')
                    ->setParameter('email',$form->get("email")->getData())
                    ->setParameter('username',$form->get("username")->getData());

                $user_isset = $query->getResult();

                if (($user->getEmail() == $user_isset[0]->getEmail() && $user->getUsername() == $user_isset[0]->getUsername()) || count($user_isset) == 0) {

                    //upload file
                    $file = $form["image"]->getData();

                    if(!empty($file) && $file != null){

                        $ext = $file->guessExtension();
                        if($ext == 'jpg' || $ext == 'jpeg' || $ext == 'png' || $ext == 'gif'){
                            $file_name = $user->getIdUtilisateur().time().'.'.$ext;
                            $file->move("uploads/users",$file_name);
                            $user->setImage($file_name);
                        }

                    }else{
                        $user->setImage($user_image);
                    }

                    $em->persist($user);
                    $flush = $em->flush();

                    if ($flush == null){
                        $status = "Modifications saved successfully";
                    }else{
                        $status = "You haven't changed your data correctly";
                    }


                }else{
                    $status = "This user already exists!";
                }


            } else {
                $status = "You haven't updated your data successfully!";

            }

            $this->session->getFlashBag()->add("status",$status);
            return $this->redirect($this->generateUrl('user_profile'));

        }

        return $this->render('AppBundle:User:edit_user.html.twig', array(
            "form" => $form->createView()
        ));
    }

    public function profileAction(Request $request, $nickname = null)
    {
        $em=$this->getDoctrine()->getManager();
        if ($nickname != null){
            $user_repo=$em->getRepository("PiRsrBundle:Utilisateur");
            $user = $user_repo->findOneBy(array("username"=>$nickname));
        }else{
            $user = $this->getUser();
        }
        if(empty($user) || !is_object($user)){
            return $this->redirect($this->generateUrl('home_publications'));
        }
        return $this->render('AppBundle:User:profile.html.twig', array(
            'user'=>$user
        ));
    }

    public function usersAction (Request $request){

        $em = $this->getDoctrine()->getManager();
        $dql = "SELECT u FROM PiRsrBundle:Utilisateur u";

        $query = $em->createQuery($dql);

        $paginator = $this->get('knp_paginator');
        $pagination = $paginator->paginate($query, $request->query->getInt('page',1),5);

        return $this->render('AppBundle:User:users.html.twig', array(
            'pagination' => $pagination
        ));
    }

    public function searchAction (Request $request){

        $em = $this->getDoctrine()->getManager();

        $search = $request->query->get("search", null);

        if ($search == null){
            return $this->redirect($this->generateURL('home_publications'));
        }

        $dql = "SELECT u FROM PiRsrBundle:Utilisateur u "
        . "WHERE u.name LIKE :search OR u.surname LIKE :search "
        . "OR u.username LIKE :search ORDER BY u.idUtilisateur ASC";

        $query = $em->createQuery($dql)->setParameter('search',"%$search%");

        $paginator = $this->get('knp_paginator');
        $pagination = $paginator->paginate($query, $request->query->getInt('page',1),5);

        return $this->render('AppBundle:User:users.html.twig', array(
            'pagination' => $pagination
        ));
    }
}
