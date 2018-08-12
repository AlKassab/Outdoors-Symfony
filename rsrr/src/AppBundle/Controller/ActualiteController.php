<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;


use Pi\RsrBundle\Entity\Actualite;
use AppBundle\Form\ActualiteType;

class ActualiteController extends Controller
{
    public function ajoutAction(Request $request)
    {
        $entity = new Actualite();
        $form = $this->createForm(ActualiteType::class, $entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $em = $this->getDoctrine()->getManager();
            $em->persist($entity);
            $em->flush();
            return $this->redirect($this->generateUrl('actualite'));

        }

        $em = $this->getDoctrine()->getManager();
        $actualites = $em->getRepository('PiRsrBundle:Actualite')->findBy(array(),array("idActu"=>"asc"));


        return $this->render('AppBundle:Home:actualite.html.twig', array(
            'form'   => $form->createView(),
            "actualites"=>$actualites
        ));
    }

    public function supprAction($r)
    {
        $em = $this->getDoctrine()->getManager();
        $entity = $em->getRepository('PiRsrBundle:Actualite')->find($r);

        $em->remove($entity);
        $em->flush();

        return $this->redirectToRoute('actualite');
    }




}
