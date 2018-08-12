<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;
use Ob\HighchartsBundle\Highcharts\Highchart;



use Pi\RsrBundle\Entity\Utilisateur;
use AppBundle\Form\UtilisateurType;
use AppBundle\Form\RegisterType;

class AdminController extends Controller
{
    private $session;

    public function __construct()
    {
        $this->session = new Session();
    }

    public function loginAdminAction(Request $request)
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

    public function registerAdminAction(Request $request)
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
                    $user->setRole("ROLE_ADMIN");
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

        return $this->render('AppBundle:User:adminRegister.html.twig', array(
            "form" => $form->createView()
        ));
    }

    public function chartLineAction()

    {
        $ob = new Highchart();

        $ob->chart->renderTo('linechart');

        $ob->title->text('Pourcentages des randonneurs par ville');

        $ob->plotOptions->pie(array(

            'allowPointSelect' => true,

            'cursor' => 'pointer',

            'dataLabels' => array('enabled' => false),

            'showInLegend' => true

        ));

        $em = $this->getDoctrine()->getManager();
        $classes = $em->getRepository('PiRsrBundle:Utilisateur')->findAll();

        $data= array();
        $stat=array();
        $hm=array();

        $query = $em->createQuery("SELECT COUNT(u) FROM PiRsrBundle:Utilisateur u WHERE u.city = ?1");

        foreach($classes as $classe) {

            $query->setParameter(1, $classe->getCity());

                if (!in_array($classe->getCity(), $hm)) {

                    unset($stat);
                    $stat = array();
                    array_push($stat, $classe->getCity(), (int)$query->getSingleScalarResult());
                    array_push($hm, $classe->getCity());
                    array_push($data,$stat);

                }

        }

        //print_r($data);

        $ob->series(array(array('type' => 'pie','name' => 'Nombre', 'data' => $data)));

        return $this->render('AppBundle:Home:chart.html.twig',

            array(

                'chart' => $ob

            ));

    }


}
