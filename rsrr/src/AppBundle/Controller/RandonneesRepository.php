<?php

namespace AppBundle\Controller;

use Doctrine\ORM\EntityRepository;
use AppBundle\Form\RandonneesType;
use Pi\RsrBundle\Entity\Map;

class RandonneesRepository extends EntityRepository
{

    public function randoExpire()
    {
        $qb = $this->_em->createQueryBuilder();

        $qb->select('r')
            ->from('PiRsrBundle:Randonnees', 'r')
            ->where('r.date < :datecourant')
            ->setParameter('datecourant', new \Datetime('now'))
            ->orderBy('r.date', 'DESC');

        return $qb->getQuery()
            ->getResult();
    }
    public function myRando($key)
    {
        $qb = $this->_em->createQueryBuilder();

        $qb->select('r')
            ->from('PiRsrBundle:Randonnees', 'r')
            ->where('r.organisateur like :key')
            ->setParameter('key', $key);

        return $qb->getQuery()
            ->getResult();
    }
    public function mine($key)
    {
        $query=$this->createQueryBuilder('r');
        $query->where("r.organisateur=:key")->setParameter('key',$key)->orderBy("r.date",'DESC');
        return $query->getQuery()->getResult();


    }




}
