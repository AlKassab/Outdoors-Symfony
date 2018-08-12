<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;


class HomeController extends Controller
{
    public function indexAction(Request $request)
    {

        $em = $this->getDoctrine()->getManager();
        $users = $em->getRepository('PiRsrBundle:Utilisateur')->findBy(array(),array("idUtilisateur"=>"asc"));

        return $this->render("AppBundle:Home:home.html.twig",array("users"=>$users));

    }

    public function supprAction($r)
    {
        $em = $this->getDoctrine()->getManager();
        $entity = $em->getRepository('PiRsrBundle:Utilisateur')->find($r);

        $em->remove($entity);
        $em->flush();

        return $this->redirectToRoute('home_publications');
    }




}
