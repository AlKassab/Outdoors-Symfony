<?php

namespace Pi\RsrBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Randonnees
 *
 * @ORM\Table(name="randonnees")
 * @ORM\Entity
 */
class Randonnees
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id_ran", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idRan;

    /**
     * @var string
     *
     * @ORM\Column(name="lieu", type="string", length=20, nullable=false)
     */
    private $lieu;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="date", nullable=false)
     */
    private $date;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text", length=65535, nullable=false)
     */
    private $description;

    /**
     * @var float
     *
     * @ORM\Column(name="prix", type="float", precision=10, scale=0, nullable=false)
     */
    private $prix;

    /**
     * @var float
     *
     * @ORM\Column(name="kilometrage", type="float", precision=10, scale=0, nullable=false)
     */
    private $kilometrage;

    /**
     * @var float
     *
     * @ORM\Column(name="altitude", type="float", precision=10, scale=0, nullable=false)
     */
    private $altitude;

    /**
     * @var string
     *
     * @ORM\Column(name="heure", type="string", length=100, nullable=false)
     */
    private $heure;

    /**
     * @var integer
     *
     * @ORM\Column(name="nbr_randonneur", type="integer", nullable=false)
     */
    private $nbrRandonneur;

    /**
     * @var string
     *
     * @ORM\Column(name="type", type="string", length=200, nullable=true)
     */
    private $type;

    /**
     * @var string
     *
     * @ORM\Column(name="difficulte", type="string", length=200, nullable=true)
     */
    private $difficulte;

    /**
     * @var string
     *
     * @ORM\Column(name="organisateur", type="string", length=200, nullable=false)
     */
    private $organisateur;
    /**
     * Randonnees constructor.
     * @param $date
     */
    public function __construct()
    {
        $this->date = new \DateTime();
    }

    /**
     * @return int
     */
    public function getIdRan()
    {
        return $this->idRan;
    }

    /**
     * @param int $idRan
     */
    public function setIdRan($idRan)
    {
        $this->idRan = $idRan;
    }

    /**
     * @return string
     */
    public function getLieu()
    {
        return $this->lieu;
    }

    /**
     * @param string $lieu
     */
    public function setLieu($lieu)
    {
        $this->lieu = $lieu;
    }

    /**
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * @param \DateTime $date
     */
    public function setDate($date)
    {
        $this->date = $date;
    }

    /**
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param string $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * @return float
     */
    public function getPrix()
    {
        return $this->prix;
    }

    /**
     * @param float $prix
     */
    public function setPrix($prix)
    {
        $this->prix = $prix;
    }

    /**
     * @return float
     */
    public function getKilometrage()
    {
        return $this->kilometrage;
    }

    /**
     * @param float $kilometrage
     */
    public function setKilometrage($kilometrage)
    {
        $this->kilometrage = $kilometrage;
    }

    /**
     * @return float
     */
    public function getAltitude()
    {
        return $this->altitude;
    }

    /**
     * @param float $altitude
     */
    public function setAltitude($altitude)
    {
        $this->altitude = $altitude;
    }

    /**
     * @return string
     */
    public function getHeure()
    {
        return $this->heure;
    }

    /**
     * @param string $heure
     */
    public function setHeure($heure)
    {
        $this->heure = $heure;
    }

    /**
     * @return int
     */
    public function getNbrRandonneur()
    {
        return $this->nbrRandonneur;
    }

    /**
     * @param int $nbrRandonneur
     */
    public function setNbrRandonneur($nbrRandonneur)
    {
        $this->nbrRandonneur = $nbrRandonneur;
    }

    /**
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param string $type
     */
    public function setType($type)
    {
        $this->type = $type;
    }

    /**
     * @return string
     */
    public function getDifficulte()
    {
        return $this->difficulte;
    }

    /**
     * @param string $difficulte
     */
    public function setDifficulte($difficulte)
    {
        $this->difficulte = $difficulte;
    }

    /**
     * @return string
     */
    public function getOrganisateur()
    {
        return $this->organisateur;
    }

    /**
     * @param string $organisateur
     */
    public function setOrganisateur($organisateur)
    {
        $this->organisateur = $organisateur;
    }



}
