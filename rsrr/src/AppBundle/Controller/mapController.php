<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Pi\RsrBundle\Entity\Map;
use AppBundle\Form\MapType;
use Symfony\Component\HttpFoundation\RequestStack;

/**
 * @property  requestStack
 */
class mapController extends Controller
{




    public function indexAction($name)
    {
        return $this->render('', array('name' => $name));
    }
    public function ajoutAction(Request $request) {
        $location = new Map();
        $Form = $this->createForm(MapType::class, $location);
        $Form->handleRequest($request);
        if ($Form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($location);
            var_dump($location);
            $em->flush();
        }

        return $this->render("AppBundle:admin:gestionMaps.html.twig", array('Form' => $Form->createView()));
    }

    public function addAction(Request $request)
    {

       // $request = $this->get('request_stack')->getCurrentRequest();
        $location = new Map();
        //echo "aaa";

        if ($request->isMethod('POST')){
            //var_dump($location);
            $location->setLieu($request->get('lieuu'));
            $location->setLat($request->get('lat'));
            $location->setLng($request->get('lng'));

            $em = $this->getDoctrine()->getManager();
            $em->persist($location);

            $em->flush();
            //return($this->redirectToRoute("affichRando"));
        }


        return $this->render('AppBundle:admin:Maps.html.twig');


    }
    public function adminAction(Request $request)
    {

        $location = new Map();
        //echo "aaa";

        if ($request->isMethod('POST')){
            //var_dump($location);
            $location->setLieu($request->get('lieuu'));
            $location->setLat($request->get('lat'));
            $location->setLng($request->get('lng'));
            $em = $this->getDoctrine()->getManager();
            $em->persist($location);
            $em->flush();
            //return($this->redirectToRoute("affichRando"));
        }


        return $this->render('AppBundle:admin:Test.html.twig');


    }

}
