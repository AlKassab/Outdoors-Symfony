<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;

use Pi\RsrBundle\Entity\PrivateMessage;
use AppBundle\Form\PrivateMessageType;


class PrivateMessageController extends Controller
{

    private $session;

    public function __construct()
    {
        $this->session = new Session();
    }

    public function indexPrivateMessageAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();

        $private_message = new PrivateMessage();
        $form = $this->createForm(PrivateMessageType::class, $private_message, array(
            'empty_data' => $user
        ));

        $form->handleRequest($request);

        if($form->isSubmitted()) {
            if($form->isValid()) {

                $user_media_route = 'uploads/media/'.$user->getIdUtilisateur().'_usermedia';

                // upload image
                $file = $form['image']->getData();
                if (!empty($file) && $file != null) {
                    $ext = $file->guessExtension(); // obtencion de extension

                    if ($ext == 'jpg' || $ext == 'jpeg' || $ext == 'png' || $ext == 'gif') {
                        $file_name = $user->getIdUtilisateur().'_imgpmessage_'.time().'.'.$ext;
                        $file->move($user_media_route.'/pmessages/images', $file_name);

                        $private_message->setImage($file_name);
                    } else {
                        $private_message->setImage(null);
                    }
                } else {
                    $private_message->setImage(null);
                }

                // upload file
                $doc = $form['file']->getData();
                if (!empty($doc) && $doc != null) {
                    $ext = $doc->guessExtension();

                    if ($ext == 'pdf') {
                        $file_name = $user->getIdUtilisateur().'_docpmessage_'.time().'.'.$ext;
                        $doc->move($user_media_route.'/pmessages/documents', $file_name);

                        $private_message->setFile($file_name);
                    } else {
                        $private_message->setFile(null);
                    }
                } else {
                    $private_message->setFile(null);
                }

                $private_message->setEmitter($user);
                $private_message->setCreatedAt(new \DateTime("now"));
                $private_message->setReaded(0);

                $em->persist($private_message);
                $flush = $em->flush();

                if ($flush == null) {
                    $status = 'sent correctly';
                } else {
                    $status = 'Error';
                }

            } else {
                $status = 'not sent';
            }

            $this->session->getFlashBag()->add("status", $status);
            return $this->redirectToRoute('private_message_index');
        }

        $private_messages = $this->getPrivateMessages($request);
        $this->setReadedPrivateMessages($em, $user);

        return $this->render('AppBundle:PrivateMessage:index_private_message.html.twig', array(
            'form' => $form->createView(),
            'private_messages' => $private_messages,
            'type' => 'received'
        ));
    }


    public function sentAction(Request $request)
    {
        $private_messages = $this->getPrivateMessages($request, "sent");

        return $this->render('AppBundle:PrivateMessage:sent.html.twig', array(
            'private_messages' => $private_messages,
            'type' => 'sent'
        ));

    }

    public function getPrivateMessages($request, $type = null)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();
        $user_id = $user->getIdUtilisateur();

        if($type == "sent") {
            $dql = "SELECT p FROM PiRsrBundle:PrivateMessage p WHERE"
                . " p.emitter = $user_id ORDER BY p.id DESC";
        } else {
            $dql = "SELECT p FROM PiRsrBundle:PrivateMessage p WHERE"
                . " p.receiver = $user_id ORDER BY p.id DESC";
        }

        $query = $em->createQuery($dql);

        $paginator = $this->get('knp_paginator');
        $pagination = $paginator->paginate(
            $query,
            $request->query->getInt('page', 1),
            5
        );

        return $pagination;
    }

    public function notReadedAction(Request $request)
    {
        $isAjax = $request->isXmlHttpRequest();

        if (!$isAjax) {
            return $this->redirect("../../private-message");
        }

        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();

        $pm_repo = $em->getRepository('PiRsrBundle:PrivateMessage');
        $num_not_readed_pm = count($pm_repo->findBy(array(
            'receiver' => $user,
            'readed' => 0
        )));

        return new Response($num_not_readed_pm);
    }

    private function setReadedPrivateMessages($em, $user)
    {
        $pm_repo = $em->getRepository('PiRsrBundle:PrivateMessage');
        $private_messages = $pm_repo->findBy(array(
            'receiver' => $user,
            'readed' => 0
        ));

        foreach($private_messages as $msg) {
            $msg->setReaded(1);
            $em->persist($msg);
        }

        $flush = $em->flush();

        if ($flush == null) {
            $result = true;
        } else {
            $result = false;
        }

        return $result;
    }

}
