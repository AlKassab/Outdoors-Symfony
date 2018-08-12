<?php

namespace AppBundle\Controller;

use AppBundle\Form\AnnoncesType;
use AppBundle\Form\CarteBType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

use Pi\RsrBundle\Entity\Annonces;
use Pi\RsrBundle\Entity\CarteB;
use Pi\RsrBundle\Entity\Favannonce;
use Pi\RsrBundle\Entity\Utilisateurs;

class AnnonceController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('', array('name' => $name));
    }

    public function listAction(Request $request)
    {

        $em = $this->getDoctrine()->getManager();
        $annonces=$em->getRepository("PiRsrBundle:Annonces")->findAll();


        return $this->render("AppBundle:front:listAnnonce.html.twig", array('annonces' => $annonces));
    }

    public function listTAction(Request $request)
    {

        $em = $this->getDoctrine()->getManager();
        $annonces=$em->getRepository("PiRsrBundle:Annonces")->findAll();


        return $this->render("AppBundle:front:listtable.html.twig", array('annonces' => $annonces));
    }


    public function mesAnnonceAction()
    {
        $user=$this->getUser();
        $em = $this->getDoctrine()->getManager();
        $annonces=$em->getRepository("PiRsrBundle:Annonces")->findBy(array("idUtilisateur"=>$user->getIdUtilisateur()));
        return $this->render("AppBundle:front:MesAnnonce.html.twig",array('annonces'=>$annonces,'idUtilisateur' => $user));
    }

    public function add2Action(Request $request)
    {
        $user=$this->getUser();
        $an = new Annonces();
        $em=$this->getDoctrine()->getManager();


        $form = $this->createForm(AnnoncesType::class,$an );
        $form->handleRequest($request);

        if($form->isSubmitted() ) {
            $an->setStatu(0);
            $an->setIdUtilisateur($user->getIdUtilisateur());
            $em->persist($an);
            $em->flush();
            return $this->redirectToRoute('mes_annonce');

        }

        return $this->render('@App/front/AjouterAnnonce.html.twig',array(
            'form'=>$form->createView(),



        ));




    }

    public function DeleteAction(Request $request)
    {    $id=$request->get('id');
        $em= $this->getDoctrine()->getManager();
        $annonces =$em->getRepository("PiRsrBundle:Annonces")->find($id);
        $em->remove($annonces);
        $em->flush();
        return $this->redirectToRoute('mes_annonce');

    }

    public function DeleteAdminAction(Request $request)
    {    $id=$request->get('id');
        $em= $this->getDoctrine()->getManager();
        $annonces =$em->getRepository("PiRsrBundle:Annonces")->find($id);

        $annonces->setStatu(1);
        $em->remove($annonces);
        $em->flush();
        return $this->redirectToRoute('admin');

    }

    public function autoriserAdminAction(Request $request)
    {    $id=$request->get('id');
        $em= $this->getDoctrine()->getManager();
        $annonces =$em->getRepository("PiRsrBundle:Annonces")->find($id);
        $annonces->setStatu(1);
        $em->persist($annonces);
        $em->flush();
        return $this->redirectToRoute('admin');

    }

    public function editAnnonceAction(Request $request)
    {
        $user = $this->getUser();




        $em=$this->getDoctrine()->getManager();
        $id=$request->get('id');
        $annonces = $em->getRepository("PiRsrBundle:Annonces")->find($id);
        $form = $this->createForm(AnnoncesType::class,$annonces );


        $form->handleRequest($request);

        if($form->isSubmitted() ) {

            $em->persist($annonces);
            $em->flush();
            return $this->redirect($this->generateUrl('mes_annonce',array('msg'=>"Edit successful")));
        }
        return $this->render('@App/front/AjouterAnnonce.html.twig',array(
            'form'=>$form->createView(),
            'annonces'=>$annonces,



        ));

    }

    public function getByIdAction(Request $request,$id){
        $em= $this->getDoctrine()->getManager();
        $annonce =$em->getRepository("PiRsrBundle:Annonces")->find($id);
        return $this->render('@App/front/Detail.html.twig',array('annonce'=>$annonce));

    }



    public function favAction(Request $request){
        $user = $this->getUser();
        $id = $request->get('id');
        $em = $this->getDoctrine()->getManager();
        $an = $em->getRepository("PiRsrBundle:Annonces")->find($id);
        $fav= new Favannonce();
        $fav->setIdfavuser($an->getIdAnnonce());
        $fav->setUser($user);


        $em->persist($fav);
        $em->flush();
        return $this->render('@App/front/Detail.html.twig',array('annonce'=>$an));

    }






    public function favAnnonceUserAction(Request $request)
    {$user = $this->getUser();
        $em = $this->getDoctrine()->getManager();
        $an = $em->getRepository("PiRsrBundle:Favannonce")->findfAvDQL($user->getId());
        $a=$this->getDoctrine()->getEntityManager();



        return $this->render("AppBundle:front:favshow.html.twig", array('annonce' => $an));

    }



    public function payerAction(Request $request)
    {
        $user = $this->getUser();

        $id = $request->get('id');
        $em = $this->getDoctrine()->getManager();
        $an = $em->getRepository("PiRsrBundle:Annonces")->find($id);
        if ($user->getSolde()>$an->getPrix())

        {  $user->setSolde($user->getSolde()-$an->getPrix());
            $em->persist($user);
            $solde=$user->getSolde();
            $em->remove($an);
            $em->flush();
            return $this->render('@App/front/recu.html.twig',array('annonce'=>$an,'solde'=>$solde));
        }
        else {
            return $this->render('@App/front/erreur.html.twig',array('annonce'=>$an));
        }






    }

    public function recuAction(Request $request)
    {

        $id = $request->get('id');
        $em = $this->getDoctrine()->getManager();
        $an = $em->getRepository("PiRsrBundle:Annonces")->find($id);

        return $this->render('@App/front/recu.html.twig',array('annonce'=>$an));




    }

    public function listAdminAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $annonces=$em->getRepository("PiRsrBundle:Annonces")->findAll();
        return $this->render("AppBundle:back:admin.html.twig",array('annonces' => $annonces));
    }









}
