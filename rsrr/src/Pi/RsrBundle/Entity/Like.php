<?php
namespace Pi\RsrBundle\Entity;
 use Doctrine\ORM\Mapping as ORM;

/**
 * Like
 *
 * @ORM\Table(name="like")
 * @ORM\Entity
 */
 /**
  * Like
  *
  * @ORM\Table("`like`")
  * @ORM\Entity
  */
 class Like
 {
     /**
      * @var integer
      *
      * @ORM\Column(name="id", type="integer", nullable=false)
      * @ORM\Id
      * @ORM\GeneratedValue(strategy="IDENTITY")
      */
     private $id;


     /**
  * @var \User
  *
  * @ORM\ManyToOne(targetEntity="Utilisateur")
  * @ORM\JoinColumns({
  *   @ORM\JoinColumn(name="id_User", referencedColumnName="id",nullable=true, onDelete="SET NULL")
  * })
  */
     private $user;

     /**
      * @var \Publication
      *
      * @ORM\ManyToOne(targetEntity="Publication")
      * @ORM\JoinColumns({
      *   @ORM\JoinColumn(name="id_pub", referencedColumnName="id",nullable=true, onDelete="SET NULL")
      * })
      */
     private $publication;

     /**
      * @return int
      */
     public function getId()
     {
         return $this->id;
     }

     /**
      * @param int $id
      */
     public function setId($id)
     {
         $this->id = $id;
     }

     /**
      * @return \User
      */
     public function getUser()
     {
         return $this->user;
     }

     /**
      * @param \User $user
      */
     public function setUser($user)
     {
         $this->user = $user;
     }

     /**
      * @return \Publication
      */
     public function getPublication()
     {
         return $this->publication;
     }

     /**
      * @param \Publication $publication
      */
     public function setPublication($publication)
     {
         $this->publication = $publication;
     }

 }
