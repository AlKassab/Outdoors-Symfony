<?php

namespace AppBundle\Controller;

use Pi\RsrBundle\Entity\Camping;
use Pi\RsrBundle\Entity\Utilisateurs;
use AppBundle\Form\CampingType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints\Date;

/**
 * Camping controller.
 *
 */
class CampingController extends Controller
{
    /**
     * Lists all camping entities.
     *
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $userconnected = $this->container->get('security.token_storage')->getToken()->getUser();

        $campings = $em->getRepository('PiRsrBundle:Camping')->findBy(array('id'=>$userconnected));

        return $this->render('AppBundle:Camping:index.html.twig', array(
            'campings' => $campings,
        ));
    }

    /**
     * Creates a new camping entity.
     *
     */
    public function newAction(Request $request)
    {
        $camping = new Camping();
        $form = $this->createForm('AppBundle\Form\CampingType', $camping);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $user=$this->getUser();
            $camping->setId($user);
            $em->persist($camping);
            $em->flush();

            return $this->redirectToRoute('camping_show', array('idCamp' => $camping->getIdcamp()));
        }

        return $this->render('AppBundle:Camping:new.html.twig', array(
            'camping' => $camping,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a camping entity.
     *
     */
    public function showAction(Camping $camping)
    {
        $deleteForm = $this->createDeleteForm($camping);

        return $this->render('AppBundle:Camping:show.html.twig', array(
            'camping' => $camping,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing camping entity.
     *
     */

    public function UpdateAction(Request $request)
    {
        $id = $request->get('idCamp');

        $em = $this->getDoctrine()->getManager();
        $camping = $em->getRepository('PiRsrBundle:Camping')->find($id);
        if ($request->isMethod('POST'))
        {
            $camping->setNom($request->get('nom'));
            $camping->setDate(new \DateTime($request->get('date')));

            $camping->setLieu($request->get('lieu'));
            $camping->setDescription($request->get('description'));
            $camping->setImage($request->get('image'));

            $em->persist($camping);
            $em->flush();

        }
        return $this->render(":camping:update.html.twig",array("camping"=>$camping));

    }

    /**
     * Deletes a camping entity.
     *
     */
    public function deleteAction(Request $request, Camping $camping)
    {
        $form = $this->createDeleteForm($camping);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($camping);
            $em->flush();
        }

        return $this->redirectToRoute('camping_index');
    }

    /**
     * Creates a form to delete a camping entity.
     *
     * @param Camping $camping The camping entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Camping $camping)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('camping_delete', array('idCamp' => $camping->getIdcamp())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
    public function CalendrierAction()
    {
        return $this->render('camping/calendrier.html.twig');
    }
}
