<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;


use Pi\RsrBundle\Entity\Followers;
use Pi\RsrBundle\Entity\Utilisateur;

class FollowingController extends Controller
{
    private $session;

    public function __construct()
    {
        $this->session = new Session();
    }

    public function followAction(Request $request){

        $user = $this->getUser();
        $follow_id = $request->get('followed');

        $em = $this->getDoctrine()->getManager();

        $user_repo = $em->getRepository('PiRsrBundle:Utilisateur');
        $followed = $user_repo->find($follow_id);

        $following = new Followers();
        $following->setUser($user);
        $following->setFollowed($followed);

        $em->persist($following);
        $flush = $em->flush();

        if($flush == null){

            $status = "ok";

        }else{
            $status = "okkk";
        }

        return new Response($status);


    }

    public function unfollowAction(Request $request)
    {
        /*$isAjax = $request->isXmlHttpRequest();

        if (!$isAjax) {
            return $this->redirect("people");
        }*/

        $user = $this->getUser();
        $followed_id = $request->get('followed');

        $em = $this->getDoctrine()->getManager();
        $follow_repo = $em->getRepository('PiRsrBundle:Followers');
        $followed = $follow_repo->findOneBy(array(
            'user' => $user,
            'followed' => $followed_id
        ));

        $em->remove($followed);
        $flush = $em->flush();

        if ($flush == null){
            $status = "kk";
        }else{
            $status = "kkkkk";
        }

        return new Response($status);

    }


}
