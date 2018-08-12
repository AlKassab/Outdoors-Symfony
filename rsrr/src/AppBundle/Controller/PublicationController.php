<?php

namespace AppBundle\Controller;

use Pi\RsrBundle\Entity\Publication;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Publication controller.
 *
 */
class PublicationController extends Controller
{
    /**
     * Lists all publication entities.
     *
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $publications = $em->getRepository('PiRsrBundle:Publication')->findAll();

        return $this->render('AppBundle:Publication:index.html.twig', array(
            'publications' => $publications,
        ));
    }

    /**
     * Creates a new publication entity.
     *
     */
    public function newAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();


        $user = $this->getUser();
        $profil = $em->getRepository('PiRsrBundle:Profil')->findOneBy( array('user' => $user));
        $em->persist($profil);
        $publication = new Publication();
        $form = $this->createForm('AppBundle\Form\PublicationType', $publication);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $user_media_route = 'uploads/media/'.$user->getIdUtilisateur().'_usermedia';
            $file = $form['image']->getData();
            if (!empty($file) && $file != null) {
                $ext = $file->guessExtension(); // obtencion de extension

                if ($ext == 'jpg' || $ext == 'jpeg' || $ext == 'png' || $ext == 'gif') {
                    $file_name = 'http://localhost/image/'.$user->getId().'_imgpublication'.time().'.'.$ext;
                    $file->move('file:///C:/wamp/www/image/', $file_name);

                    $publication->setImage($file_name);
                } else {
                    $publication->setImage(null);
                }
            } else {
                $publication->setImage(null);
            }
            $publication->setIdProfil($profil);
            $publication->setDateCreation(new \DateTime("now",(new \DateTimeZone('Africa/Tunis'))));
            $em->persist($publication);
            $em->flush();

            return $this->redirectToRoute('publication_new', array('id' => $publication->getId()));
        }
        $em = $this->getDoctrine()->getManager();

        $publications = $em->getRepository('PiRsrBundle:Publication')->findBy(array(),array("dateCreation"=>"desc"));

        return $this->render('AppBundle:Publication:home.html.twig', array(
            'publication' => $publication,
            'publications' => $publications,
            'profil' => $profil,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a publication entity.
     *
     */
    public function showAction(Publication $publication)
    {
        $deleteForm = $this->createDeleteForm($publication);

        return $this->render('AppBundle:Publication:show.html.twig', array(
            'publication' => $publication,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing publication entity.
     *
     */
    public function editAction(Request $request, Publication $publication)
    {
        $deleteForm = $this->createDeleteForm($publication);
        $editForm = $this->createForm('AppBundle\Form\PublicationType', $publication);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('publication_edit', array('id' => $publication->getId()));
        }

        return $this->render('AppBundle:Publication:edit.html.twig', array(
            'publication' => $publication,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a publication entity.
     *
     */
    public function deleteAction(Request $request, Publication $publication)
    {
        $form = $this->createDeleteForm($publication);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($publication);
            $em->flush();
        }

        return $this->redirectToRoute('publication_index');
    }

    /**
     * Creates a form to delete a publication entity.
     *
     * @param Publication $publication The publication entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Publication $publication)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('publication_delete', array('id' => $publication->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }


    public function HomeAction()
    {

        $em = $this->getDoctrine()->getManager();

        $publications = $em->getRepository('PiRsrBundle:Publication')->findAll();


        return $this->render('AppBundle:Publication:home.html.twig', array(
            'publications' => $publications,

        ));
    }


    public function edit1Action($id, $n)
    {


        $em = $this->getDoctrine()->getManager();
        $pub = $em->getRepository('PiRsrBundle:Publication')->find($id);


            $pub->setTexte($n);

            $em->persist($pub);
            $em->flush();

        return new Response();
    }

    public function delete1Action($id)
    {
        $em = $this->getDoctrine()->getManager();
        $pub = $em->getRepository('PiRsrBundle:Publication')->find($id);

        $em->remove($pub);
        $em->flush();

        return new Response();
    }


    public function newPrAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();


        $user = $this->getUser();
        $profil = $em->getRepository('AppBundle:Profil')->findOneByIdProfil($user->getIdUtilisateur());
        $em->persist($profil);


        $publication = new Publication();
        $form = $this->createForm('AppBundle\Form\PublicationType', $publication);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $user_media_route = 'uploads/media/'.$user->getIdUtilisateur().'_usermedia';
            $file = $form['image']->getData();
            if (!empty($file) && $file != null) {
                $ext = $file->guessExtension(); // obtencion de extension

                if ($ext == 'jpg' || $ext == 'jpeg' || $ext == 'png' || $ext == 'gif') {
                    $file_name = $user->getIdUtilisateur().'_imgpublication'.time().'.'.$ext;
                    $file->move($user_media_route.'/publications/images', $file_name);

                    $publication->setImage($file_name);
                } else {
                    $publication->setImage(null);
                }
            } else {
                $publication->setImage(null);
            }
            $publication->setIdProfil($profil);
            $publication->setDateCreation(new \DateTime("now",(new \DateTimeZone('Africa/Tunis'))));
            $em->persist($publication);
            $em->flush();

            return $this->redirectToRoute('profile', array('id' => $publication->getId()));
        }
        $em = $this->getDoctrine()->getManager();

        $publications = $em->getRepository('PiRsrBundle:Publication');
        $query = $publications->createQueryBuilder('p')
            ->where('p.idProfil = :idProfil')
            ->setParameter('idProfil', $profil->getIdProfil())
            ->orderBy('p.dateCreation', 'DESC')
            ->getQuery();

        $publ = $query->getResult();

        return $this->render('AppBundle:Publication:profile.html.twig', array(
            'publication' => $publication,
            'publications' => $publ,
            'form' => $form->createView(),
        ));
    }

    public function getNameAction($id_profil)
    {
        $em = $this->getDoctrine()->getManager();
        $nom = $em->getRepository('PiRsrBundle:Publication')-> getNom($id_profil);
        $prenom = $em->getRepository('PiRsrBundle:Publication')-> getPrenom($id_profil);

        $em->flush();

        return $this->render('AppBundle:Publication:home.html.twig', array(
            'nom' => $nom,
            'prenom' => $prenom,

        ));
    }










}

