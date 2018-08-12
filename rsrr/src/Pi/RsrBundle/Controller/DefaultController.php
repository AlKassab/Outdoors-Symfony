<?php

namespace Pi\RsrBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();
        $user_repo=$em->getRepository("PiRsrBundle:Utilisateur");

        $user = $user_repo->find(6);
        var_dump($user);
        die();

        return $this->render('PiRsrBundle:Default:index.html.twig');
    }
}
