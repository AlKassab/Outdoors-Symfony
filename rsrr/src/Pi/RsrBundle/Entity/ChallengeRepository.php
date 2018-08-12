<?php

namespace Pi\RsrBundle\Entity;

use Doctrine\ORM\EntityRepository;

/**
 * Created by PhpStorm.
 * User: Amna
 * Date: 07/04/2017
 * Time: 21:25
 */
class ChallengeRepository  extends EntityRepository
{

    public function findCatDQL($nom){

        $query=$this->getEntityManager()
            ->createQuery("Select e from PiRsrBundle:Challenge e WHERE
            e.NAME =:nom ORDER BY e.datedebut DESC " )
            ->setParameter('nom',$nom);
        return $query->getResult();
    }
    public function findByNbrlimite($id){
        $query=$this->getEntityManager()->createQuery("update PiRsrBundle:Challenge e set e.nbrPart = e.nbrPart -1 , e.nbrparticipantsChall = e.nbrparticipantsChall + 1 WHERE e.idChal=:id ")
            ->setParameter('id',$id);
        return $query->getResult();
    }
}