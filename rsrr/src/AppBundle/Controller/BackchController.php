<?php

namespace AppBundle\Controller;

use AppBundle\Form\ChallengeType;
use Pi\RsrBundle\Entity\Challenge;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;


class BackchController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('', array('name' => $name));
    }
    public function ajouterAction(Request $request) {


        $eve = new Challenge();
        if ($request->isMethod('POST')) {


                $datedebut = new \DateTime($request->get('dateD'));
                $datefin = new \DateTime($request->get('dateF'));


                if (($datefin < $datedebut) || ($datedebut < new \DateTime()) || ($datefin < new \DateTime())) {
                    return $this->render('AppBundle:backch:alertAjoutTache.html.twig');

                } else {


                $eve->setNom($request->get('nom'));


                $eve->setNbrPart($request->get('nbrparticipants'));
                $eve->setDatedebut($datedebut);
                $eve->setDatefin($datefin);
                $eve->setLieuDepart($request->get('LieuD'));
                $eve->setLieuArrivee($request->get('LieuA'));
               // $eve = $_FILES['image'];
                $eve->setImage($request->get('image'));

                $em = $this->getDoctrine()->getManager();
                $em->persist($eve);
                $em->flush();

            }

            return $this->redirectToRoute("Liste_CH");
        }
        return $this->render("AppBundle:backch:AjouterChallenge.html.twig", array());
//        $Modele = new Challenge();
//        $form =$this->createForm(ChallengeType::class,$Modele);
//        $form->handleRequest($request);
//        if($form->isValid())
//        { $em=$this->getDoctrine()->getManager();
//            $em->persist($Modele);
//            $em->flush();
//            return $this->redirect($this->generateUrl('Liste_CH'));
//        }
//        return $this->render('SprintWebBundle:back:AjouterChallenge.html.twig',array('forme'=>$form->createView()));
    }
    public function homeAction()
    {
        return $this->render('AppBundle:backch:indexB.html.twig');
    }
    public function listerAction()
    {
        $em = $this->getDoctrine()->getManager();
        $challenges=$em->getRepository("PiRsrBundle:Challenge")->findAll();

      return $this->render("AppBundle:backch/ListeChallenge.html.twig", array("challenge" => $challenges));

}
    public function DeleteAction(Request $request)
    {    $id=$request->get('id');
        $em= $this->getDoctrine()->getManager();
        $challenge =$em->getRepository('PiRsrBundle:Challenge')->find($id);
        $em->remove($challenge);
        $em->flush();
        return $this->redirectToRoute('Liste_CH');

    }
    public function ModifierAction(Request $request)
    {
        $id = $request->get('id');
        $em = $this->getDoctrine()->getManager();
        $challenge = $em->getRepository('PiRsrBundle:Challenge')->find($id);
        if ($request->isMethod('POST'))
        {
            $challenge->setNom($request->get('nom'));
            $challenge->setDateDebut($request->get('datedebut'));
            $challenge->setDateFin($request->get('dateFin'));
            $challenge->setNbrPart($request->get('nbMax'));
            $challenge->setLieuArrivee($request->get('LieuA'));
            $challenge->setLieuDepart($request->get('LieuD'));
            $challenge->setImage($request->get('image'));

            $em->persist($challenge);
            $em->flush();

        }
        return $this->render("AppBundle:backch/modification.html.twig",array("challenge"=>$challenge));
    }
}
