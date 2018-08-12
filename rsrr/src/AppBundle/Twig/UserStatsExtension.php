<?php

namespace AppBundle\Twig;

use Symfony\Bridge\Doctrine\RegistryInterface;

class UserStatsExtension extends \Twig_Extension
{
    protected $doctrine;

    public function __construct(RegistryInterface $doctrine)
    {
        $this->doctrine = $doctrine;
    }

    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('user_stats', array($this, 'userStatsFilter'))
        );
    }

    public function getName()
    {
        return 'user_stats_extension';
    }

    public function userStatsFilter($user)
    {
        $follow_repo = $this->doctrine->getRepository('PiRsrBundle:Followers');

        $user_following = $follow_repo->findBy(array('user' => $user));
        $user_followers = $follow_repo->findBy(array('followed' => $user));

        $result = array(
            'following' => count($user_following),
            'followers' => count($user_followers),
        );

        return $result;
    }

}
