<?php
/**
 * Created by PhpStorm.
 * User: macbookpro
 * Date: 03/04/2017
 * Time: 11:11 AM
 */

namespace Pi\RsrBundle\Entity;


use Doctrine\ORM\EntityRepository;

class MapRepository extends EntityRepository
{
    public function infomap()
    {
        $qb = $this->_em->createQueryBuilder();

        $qb->select('m')
            ->from('Map', 'm');


        return $qb->getQuery()
            ->getResult();
    }
    public function search($key)
    {
        $query = $this->getEntityManager()->createQuery('SELECT m  FROM PiRsrBundle:map  m  WHERE m.lieu=:k')->setParameter('k',"sfax");

        return $result = $query->getResult();
    }
    public function findByLieu($lieuR)
    {
        $query=$this->createQueryBuilder('s');
        $query->where("s.lieu=:l")->setParameter('l',$lieuR);

        return $query->getQuery()->getOneOrNullResult();


    }


}