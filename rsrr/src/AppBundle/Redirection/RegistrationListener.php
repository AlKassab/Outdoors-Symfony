<?php
namespace AppBundle\Redirection;

use FOS\UserBundle\FOSUserBundle;
use FOS\UserBundle\Event\FormEvent;
use FOS\UserBundle\FOSUserEvents;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * Created by PhpStorm.
 * User: Amna
 * Date: 01/04/2017
 * Time: 14:26
 */
class RegistrationListener implements EventSubscriberInterface
{

    public static function getSubscribedEvents()
{
    return array(
        FOSUserEvents::REGISTRATION_SUCCESS  => 'onRegistrationSuccess'
    );


}
    public function onRegistrationSuccess(FormEvent $event)
    {

        $roles = array('ROLE_ADMIN');
        $user = $event ->getForm() ->getData();
        $user ->setRoles($roles);
    }
    public function _constract()
    {

    }


}