<?php




namespace Pi\RsrBundle\Entity;
use Doctrine\ORM\EntityRepository;


class AnnonceRepository extends EntityRepository{

    public function findfAvDQL($user){

       $query=$this->getEntityManager()
          //->createQuery("SELECT f from AppBundle:Favannonce f WHERE f.idfavuser = :ser"  )
          //->createQuery(" SELECT f,a from AppBundle:Favannonce f LEFT JOIN AppBundle:Annonces a  WHERE f.User = :ser AND ")
           //->createQuery("SELECT f from AppBundle:Annonce a , AppBundle:Favannonc f WHERE a.idAnnonce=f.idfavuser AND WHERE f.User = :ser")

        ->createQueryBuilder()
            ->select('f')
            ->from('PiRsrBundle:Annonces','f')
            ->innerJoin('PiRsrBundle:Favannonce','a')
            ->where('f.idAnnonce= a.idfavuser')
            ->andWhere('a.User=:user')
            ->setParameter('user',$user)
            ->getQuery();
        return $query->getResult();

        /*$qb = $this->_em->createQueryBuilder();

        $qb->select('a')
            ->from('AppBundle:Favannonce','f')
            ->from('AppBundle:Annonces','a')
            ->where('f.idfavuser = a.idAnnonce')
            ->setParameter('datecourant', new \Datetime('now'))
            ->orderBy('r.date', 'DESC');

        return $qb->getQuery()
            ->getResult();*/
    }

}