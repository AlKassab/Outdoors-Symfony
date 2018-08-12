<?php
/**
 * Created by PhpStorm.
 * User: WILLIAM
 * Date: 17-May-17
 * Time: 2:41 PM
 */

namespace Pi\RsrBundle\Entity;
use Doctrine\ORM\EntityRepository;

class PublicationRepository extends EntityRepository
{

    public function getNom ($idprofil){


        $query=$this->getEntityManager()->createQuery("select e.nom  from PiRsrBundle:Utilisateur e INNER JOIN PiRsrBundle:Profil p ON e.id_utilisateur = p.id_user WHERE p.id_profil =:idprofil ")
            ->SetParameter('idprofil',$idprofil);
        return $query->getResult();

    }


    public function getPrenom ($idprofil){


        $query=$this->getEntityManager()->createQuery("select e.prenom  from PiRsrBundle:Utilisateur e INNER JOIN PiRsrBundle:Profil p ON e.id_utilisateur = p.id_user WHERE p.id_profil =:idprofil ")
            ->SetParameter('idprofil',$idprofil);
        return $query->getResult();

    }
}