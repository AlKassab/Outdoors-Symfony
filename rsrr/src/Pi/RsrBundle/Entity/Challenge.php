<?php

namespace Pi\RsrBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Challenge
 *
 * @ORM\Table(name="challenge")
 * @ORM\Entity(repositoryClass="Pi\RsrBundle\Entity\ChallengeRepository")
 */
class Challenge
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id_chal", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue()
     */
    private $idChal;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_debut", type="date", nullable=false)
     */
    private $dateDebut;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_fin", type="date", nullable=false)
     */
    private $dateFin;

    /**
     * @var integer
     *
     * @ORM\Column(name="nbr_part", type="integer", nullable=true)
     */
    private $nbrPart;
    /**
     * @ORM\Column(name="nbrparticipants_chall",type="integer", nullable=true)
     */
    private $nbrparticipantsChall;
    /**
     *@ORM\Column(type="string",length=255)
     */
    private  $nom;
    /**
     * @var string
     *
     * @ORM\Column(name="image", type="blob", nullable=true)
     */
    private $image;

    /**
     *@ORM\Column(type="string",length=255)
     */
    private $lieuDepart;
    /**
     *@ORM\Column(type="string",length=255)
     */
    private $lieuArrivee;

    /**
     *
     * @ORM\Column(name="score_challenge", type="integer", nullable=true)
     */
    private $scorechallenge=0;
    /**
     * @return string
     */
    public function getImage()
    {
        if ($this->image != null) {
            return base64_encode(@stream_get_contents($this->image));
        }

    }

    /**
     * @param string $image
     */
    public function setImage($image)
    {
        if ($image != null) {
            $this->image = @file_get_contents($image);
        }
    }
    /**
     * @return int
     */
    public function getIdChal()
    {
        return $this->idChal;
    }

    /**
     * @param int $idChal
     */
    public function setIdChal($idChal)
    {
        $this->idChal = $idChal;
    }

    /**
     * @return \DateTime
     */
    public function getDateDebut()
    {
        return $this->dateDebut;
    }

    /**
     * @param \DateTime $dateDebut
     */
    public function setDateDebut($dateDebut)
    {
        $this->dateDebut = $dateDebut;
    }

    /**
     * @return \DateTime
     */
    public function getDateFin()
    {
        return $this->dateFin;
    }

    /**
     * @param \DateTime $dateFin
     */
    public function setDateFin($dateFin)
    {
        $this->dateFin = $dateFin;
    }

    /**
     * @return int
     */
    public function getNbrPart()
    {
        return $this->nbrPart;
    }

    /**
     * @return mixed
     */
    public function getNbrparticipantsChall()
    {
        return $this->nbrparticipantsChall;
    }

    /**
     * @param mixed $nbrparticipantsChall
     */
    public function setNbrparticipantsChall($nbrparticipantsChall)
    {
        $this->nbrparticipantsChall = $nbrparticipantsChall;
    }

    /**
     * @param int $nbrPart
     */
    public function setNbrPart($nbrPart)
    {
        $this->nbrPart = $nbrPart;
    }

    /**
     * @return mixed
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * @param mixed $nom
     */
    public function setNom($nom)
    {
        $this->nom = $nom;
    }





    /**
     * @return mixed
     */
    public function getLieuDepart()
    {
        return $this->lieuDepart;
    }

    /**
     * @param mixed $lieuDepart
     */
    public function setLieuDepart($lieuDepart)
    {
        $this->lieuDepart = $lieuDepart;
    }

    /**
     * @return mixed
     */
    public function getIdCompteProd()
    {
        return $this->idCompteProd;
    }

    /**
     * @param mixed $idCompteProd
     */
    public function setIdCompteProd($idCompteProd)
    {
        $this->idCompteProd = $idCompteProd;
    }

    /**
     * @return mixed
     */
    public function getLieuArrivee()
    {
        return $this->lieuArrivee;
    }

    /**
     * @param mixed $lieuArrivee
     */
    public function setLieuArrivee($lieuArrivee)
    {
        $this->lieuArrivee = $lieuArrivee;
    }

    /**
     * @return mixed
     */
    public function getScorechallenge()
    {
        return $this->scorechallenge;
    }

    /**
     * @param mixed $scorechallenge
     */
    public function setScorechallenge($scorechallenge)
    {
        $this->scorechallenge = $scorechallenge;
    }

    /**
     *
     * @ORM\ManyToOne(targetEntity="Pi\RsrBundle\Entity\User")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_compte_prod", referencedColumnName="id")
     * })
     */
    private $idCompteProd;

}

