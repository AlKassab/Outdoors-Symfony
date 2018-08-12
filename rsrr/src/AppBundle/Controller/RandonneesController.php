<?php

namespace AppBundle\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

use Pi\RsrBundle\Entity\Randonnees;

use AppBundle\Form\RandonneesType;
use AppBundle\Form\UpdateRandoType;

class RandonneesController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('', array('name' => $name));
    }
    public function ajoutAction(Request $request) {
        $Rando = new Randonnees();

        $em = $this->getDoctrine()->getManager();
        $Form = $this->createForm(RandonneesType::class, $Rando);
        $Form->handleRequest($request);
        $users=$em->getRepository('PiRsrBundle:Utilisateur')->findAll();
        if ($Form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $Rando->setOrganisateur($this->getUser());
            $em->persist($Rando);
            $em->flush();
            foreach ($users as $member){
                $manager = $this->get('mgilet.notification');
                $notif = $manager->generateNotification(' Wohooow');
                $notif->setMessage('Nouvelle randonnée .')
                    ->setLink($this->get('router')->generate('info', array('id' => $Rando->getIdRan()),UrlGeneratorInterface::ABSOLUTE_URL));
                $manager->addNotification($this->getUser(), $notif);

            }
            return($this->redirectToRoute("mesRando"));
        }

        return $this->render("AppBundle:Randonnees:ajoutRando.html.twig", array('Form' => $Form->createView()));
    }

    public function affichageAction(Request $request) {
        $em = $this->getDoctrine()->getManager();
        $randonnees = $em->getRepository("PiRsrBundle:Randonnees")->findBy(array(),array("date"=>"asc"));

       // $manager = $this->get('mgilet.notification');
       // $count = $manager->getUnseenNotificationCount($this->getUser());
        return $this->render("AppBundle:Randonnees:affich.html.twig", array("randonnees" => $randonnees));

    }
    public function adminlistAction(Request $request) {
        $em = $this->getDoctrine()->getManager();
        $randonnees = $em->getRepository("PiRsrBundle:Randonnees")->findBy(array(),array("date"=>"asc"));
        return $this->render("AppBundle:admin:listRando.html.twig", array("randonnees" => $randonnees));

    }
    public function archiveAction(Request $request) {
        $em = $this->getDoctrine()->getManager();
        $manager = $this->get('mgilet.notification');
        $count = $manager->getUnseenNotificationCount($this->getUser());
        $randonnees = $em->getRepository("PiRsrBundle:Randonnees")->randoExpire();
        return $this->render("AppBundle:Randonnees:archive.html.twig", array("randonnees" => $randonnees,"count" => $count));

    }
    public function infooAction(Request $request) {
        $id = $request->get('id');
        $em = $this->getDoctrine()->getManager();
        $emm = $this->getDoctrine()->getManager();
        $rando = $em->getRepository('PiRsrBundle:Randonnees')->find($id);
        $key=$rando->getLieu();
        $map = $emm->getRepository('PiRsrBundle:Map')->find(1);
        return $this->render("AppBundle:Randonnees:test2.html.twig", array( 'm' => $map));


    }
    public function infoAction(Request $request) {
        $id = $request->get('id');
        $em = $this->getDoctrine()->getManager();
        $emm = $this->getDoctrine()->getManager();
        $rando = $em->getRepository('PiRsrBundle:Randonnees')->find($id);
        $lieuR=$rando->getLieu();


        return $this->render("AppBundle:Randonnees:infoRando.html.twig", array('rando' => $rando  ));


    }
    public function deleteAction(Request $request){
        $id= $request->get('id');
        $em = $this->getDoctrine()->getManager();
        $rando = $em->getRepository("PiRsrBundle:Randonnees")->find($id);
        $em->remove($rando);
        $em->flush();
        return($this->redirectToRoute("mesRando"));
    }
    public function delAction(Request $request){
        $id= $request->get('id');
        $em = $this->getDoctrine()->getManager();
        $rando = $em->getRepository("PiRsrBundle:Randonnees")->find($id);
        $em->remove($rando);
        $em->flush();
        return ($this->redirectToRoute("admin_list"));
    }
    public function updateAction(Request $request){
        $id = $request->get('id');
        $em = $this->getDoctrine()->getManager();
        $rando = $em->getRepository('PiRsrBundle:Randonnees')->find($id);
        $users=$em->getRepository('PiRsrBundle:Utilisateur')->findAll();
        if ($request->isMethod('POST')){

            $rando->setLieu($request->get('lieu'));
           $rando->setDate(new \DateTime($_POST['date']));
           $rando->setType($request->get('type'));
            $rando->setDifficulte($request->get('difficulte'));
            $rando->setKilometrage($request->get('kilometrage'));
            $rando->setAltitude($request->get('altitude'));
            $rando->setHeure($request->get('heure'));
            $rando->setDescription($request->get('description'));
            $rando->setPrix($request->get('prix'));
            $rando->setNbrRandonneur($request->get('nbrRandonneur'));
            $rando->setOrganisateur($rando->getOrganisateur());



            $em->persist($rando);
            $em->flush();
            foreach ($users as $member){
                $manager = $this->get('mgilet.notification');
                $notif = $manager->generateNotification('Randonnée mise à jour');
                $notif->setMessage('Randonnée mise à jour')
                    ->setLink($this->get('router')->generate('info', array('id' => $rando->getIdRan()),UrlGeneratorInterface::ABSOLUTE_URL));
                $manager->addNotification($member, $notif);

            }


            return($this->redirectToRoute("mesRando"));

        }
        return $this->render("AppBundle:Randonnees:modifRando.html.twig",array("rando"=>$rando));
    }

    public function UpdateeAction(Request $request)
    {
        $id = $request->get('id');
        $em = $this->getDoctrine()->getManager();
        $rando = $this->getDoctrine()->getRepository("PiRsrBundle:Randonnees")->find($id);
        $form = $this->createForm(UpdateRandoType::class, $rando);
        $form->handleRequest($request);
        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->merge($rando);
            $em->flush();
            $em = $this->getDoctrine()->getManager();

            return $this->redirectToRoute("affichRando");
        }
        return $this->render('AppBundle:Randonnees:affichRando.html.twig', array('Form' => $form->createView(), 'rando' => $rando));
    }
    public function addLocationAction()
    {
        return $this->render('AppBundle:admin:gestionMaps.html.twig');
    }
    public function MineAction()
    {
        $manager = $this->get('mgilet.notification');
        $count = $manager->getUnseenNotificationCount($this->getUser());
        $em = $this->getDoctrine()->getManager();
        $key=$this->getUser()->getUsername();
        $randonnees = $em->getRepository('PiRsrBundle:Randonnees')->myRando($key);


        return $this->render('AppBundle:Randonnees:Mine.html.twig', array("randonnees" => $randonnees,"count" => $count));

    }
    public function seenAction(){

        $manager = $this->get('mgilet.notification');
        $notif = $manager->getUnseenUserNotifications($this->getUser());
        $manager->markAllAsSeen($notif);
        return $this->redirectToRoute("notif");

    }
    public function participerAction(Request $request){
        $id = $request->get('id');
        $em = $this->getDoctrine()->getManager();
        $rando = $em->getRepository('PiRsrBundle:Randonnees')->find($id);
        $user=$this->getUser();
        if($rando->getNbrRandonneur()>0){

                $rando->setNbrRandonneur($rando->getNbrRandonneur()-1);
                $user->setMoney($user->getMoney()-$rando->getPrix());
                $user->setMoney($user->getMoney()+25);
                $em->persist($rando);
                $em->persist($user);
                $em->flush();


            return $this->render('AppBundle:Randonnees:succes.html.twig');
        }
        else
            return $this->render('AppBundle:Randonnees:fail.html.twig');

    }

    public function adminAction(){
        return $this->render('AppBundle:admin:Test.html.twig');

    }
    public function calAction(){
        return $this->render('AppBundle:Randonnees:test2.html.twig');

    }
    public function notifAction(){


        $em = $this->getDoctrine()->getManager();
        $notifs = $em->getRepository("PiRsrBundle:Notification")->findBy(array(),array("date"=>"asc"));
        $manager = $this->get('mgilet.notification');
        $notif = $manager->getUnseenUserNotifications($this->getUser());
        $count = $manager->getUnseenNotificationCount($this->getUser());
        return $this->render("AppBundle:Randonnees:notif.html.twig", array("notifs" => $notif,"count" => $count));



    }



}



