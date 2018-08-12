<?php

namespace Pi\RsrBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Commentaire
 *
 * @ORM\Table(name="commentaire")
 * @ORM\Entity
 */
class Commentaire
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id_comm", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idComm;

    /**
     * @var string
     *
     * @ORM\Column(name="sujet", type="string", length=200, nullable=false)
     */
    private $sujet;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="date", nullable=false)
     */
    private $date;

    /**
     * @var integer
     *
     * @ORM\Column(name="id_pub", type="integer", nullable=false)
     */
    private $idPub;

    /**
     * @var string
     *
     * @ORM\Column(name="id_utilisateur", type="string", length=20, nullable=false)
     */
    private $idUtilisateur;



    /**
     * Get idComm
     *
     * @return integer
     */
    public function getIdComm()
    {
        return $this->idComm;
    }

    /**
     * Set sujet
     *
     * @param string $sujet
     *
     * @return Commentaire
     */
    public function setSujet($sujet)
    {
        $this->sujet = $sujet;

        return $this;
    }

    /**
     * Get sujet
     *
     * @return string
     */
    public function getSujet()
    {
        return $this->sujet;
    }

    /**
     * Set date
     *
     * @param \DateTime $date
     *
     * @return Commentaire
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date
     *
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set idPub
     *
     * @param integer $idPub
     *
     * @return Commentaire
     */
    public function setIdPub($idPub)
    {
        $this->idPub = $idPub;

        return $this;
    }

    /**
     * Get idPub
     *
     * @return integer
     */
    public function getIdPub()
    {
        return $this->idPub;
    }

    /**
     * Set idUtilisateur
     *
     * @param string $idUtilisateur
     *
     * @return Commentaire
     */
    public function setIdUtilisateur($idUtilisateur)
    {
        $this->idUtilisateur = $idUtilisateur;

        return $this;
    }

    /**
     * Get idUtilisateur
     *
     * @return string
     */
    public function getIdUtilisateur()
    {
        return $this->idUtilisateur;
    }
}
