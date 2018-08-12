<?php

namespace Pi\RsrBundle\Repository;

use Doctrine\ORM\EntityRepository;

class UserRepository extends EntityRepository
{
    /**
     *
     * @param $user
     * @return \Doctrine\ORM\QueryBuilder
     */
    public function getFollowingUsers($user)
    {
        $em = $this->getEntityManager();
        $follow_repo = $em->getRepository('PiRsrBundle:Followers');
        $following = $follow_repo->findBy(array(
            'user' => $user
        ));

        $following_array = array();

        foreach($following as $follow){
            $following_array[] = $follow->getFollowed();
        }

        $user_repo = $em->getRepository('PiRsrBundle:Utilisateur');
        $users = $user_repo->createQueryBuilder('u')
            ->where("u.idUtilisateur != :user AND u.idUtilisateur IN (:following)")
            ->setParameter('user', $user->getIdUtilisateur())
            ->setParameter('following', $following_array)
            ->orderBy('u.idUtilisateur', 'DESC');

        return $users;
    }

}