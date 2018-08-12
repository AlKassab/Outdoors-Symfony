<?php

namespace AppBundle\Controller;

use Pi\RsrBundle\Entity\Challenge;
use Pi\RsrBundle\Entity\Participant;
use Pi\RsrBundle\Entity\Rating;
use Pi\RsrBundle\Entity\Utilisateur;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class FrontchController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('', array('name' => $name));
    }

    public function listerAction()
    {
        $em = $this->getDoctrine()->getManager();
        $challenges=$em->getRepository("PiRsrBundle:Challenge")->findAll();

        return $this->render("AppBundle:frontch:ListCh.html.twig", array("challenge" => $challenges));

    }

    public  function mapAction()
    {
    }

    public  function detailsAction(Request $request)
    { $id= $request->get('idCall');
        $em = $this->getDoctrine()->getManager();
        $athlete = $em->getRepository("PiRsrBundle:Challenge")->find($id);
        return $this->render('AppBundle:frontch:ChallengeDetails.html.twig');
    }
    public function participerAction(Request $request)
        {
           // $tProduit = new Challenge();
            $Voteproduct = new Rating();
            $id=$request->get('idCall');
            $part= new Participant();
            $iduser = $this->getUser();
            $part->setUser($iduser);
            $em=$this->getDoctrine()->getManager();
            $em->getRepository("PiRsrBundle:Challenge")->findByNbrlimite($id);
            $eve=$em->getRepository("PiRsrBundle:Challenge")->find($id);
        $form = $this->createForm('AppBundle\Form\RatingType', $Voteproduct);
      //  $deleteForm = $this->createDeleteForm($tProduit);
        $em = $this->getDoctrine()->getManager();
        $user = $this-->getUser();
        $votes = $em->getRepository('PiRsrBundle:Rating')->findBy(array('user' => $user, 'challenge' =>  $eve));
        $voted = 0;
        if ($votes)
        {
            $voted = 1;
        }
        $votes = $em->getRepository('PiRsrBundle:Rating')->findBy(array('challenge' =>  $eve));
        $score = count($votes);





        $part->setChallenge( $eve);
        $em->persist($part);
        $em->flush();
        return $this->render('AppBundle:frontch:nbrelimite.html.twig',array(
         'sssss' => $eve,
           // 'tProduit' => $tProduit,
            'VoteProduct' => $Voteproduct,
            'form' => $form->createView(),
            'voted' => $voted,
            'score' => $score));

    }

    public function ShowDetailsAction(Request $request)
    {
        $id=$request->get('idCall');
        $em = $this->getDoctrine()->getManager();
        $challenge=$em->getRepository("PiRsrBundle:Challenge")->find($id);
        return $this->render('AppBundle:frontch:ChallengeDetails.html.twig',array('sssss' =>$challenge));

    }
    public function deniedAction()
    {
        return $this->render('@FOSUser/front/404.html.twig');
    }
    public function newVoteAction($idprod,$nbrevote, Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $user = new Utilisateur();
       // $user = $this->get('security.token_storage')->getToken()->getUser();
        $tpod = $em->getRepository('SprintWebBundle:Challenge')->find($idprod);

        $user = $em->getRepository('PiRsrBundle:Utilisateur')->find($user->getIdUtilisateur());
        $vote = new Rating();
        $vote = $em->getRepository('PiRsrBundle:Rating')->findOneBy(array('challenge'=>$tpod,'user'=>$user));

        if (count($vote) ==0)
        {
            $vote = new Rating();
            $vote->setChallenge($tpod);
            $vote->setNombreVote($nbrevote);
            $vote->setUser($user);
            $em->persist($vote);
            $em->flush();
            $votes = $em->getRepository('PiRsrBundle:Rating')->findBy(array('challenge'=>$tpod));
            $total = 0 ;
            foreach ($votes as $v)
            {
                $total = $total + $v->getNombreVote();
            }
            $score =round($total/count($votes));
            $tpod = $em->getRepository('PiRsrBundle:Challenge')->find($idprod);
            $tpod->setScorechallenge($score);
            $em->flush($tpod);

        }

        return $this->redirect($request->server->get('HTTP_REFERER'));
    }

}
