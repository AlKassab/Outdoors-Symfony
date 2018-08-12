<?php

namespace Pi\RsrBundle\Entity;

/**
 * Annonce
 */
class Annonce
{
    /**
     * @var integer
     */
    private $idAnnonce;

    /**
     * @var string
     */
    private $nom;

    /**
     * @var string
     */
    private $type;

    /**
     * @var string
     */
    private $description;

    /**
     * @var float
     */
    private $prix;

    /**
     * @var \DateTime
     */
    private $datePublication;

    /**
     * @var \DateTime
     */
    private $derniereModification;

    /**
     * @var string
     */
    private $etat;

    /**
     * @var string
     */
    private $image;

    /**
     * @var string
     */
    private $idUtilisateur;


    /**
     * Get idAnnonce
     *
     * @return integer
     */
    public function getIdAnnonce()
    {
        return $this->idAnnonce;
    }

    /**
     * Set nom
     *
     * @param string $nom
     *
     * @return Annonce
     */
    public function setNom($nom)
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * Get nom
     *
     * @return string
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * Set type
     *
     * @param string $type
     *
     * @return Annonce
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * Get type
     *
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Set description
     *
     * @param string $description
     *
     * @return Annonce
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set prix
     *
     * @param float $prix
     *
     * @return Annonce
     */
    public function setPrix($prix)
    {
        $this->prix = $prix;

        return $this;
    }

    /**
     * Get prix
     *
     * @return float
     */
    public function getPrix()
    {
        return $this->prix;
    }

    /**
     * Set datePublication
     *
     * @param \DateTime $datePublication
     *
     * @return Annonce
     */
    public function setDatePublication($datePublication)
    {
        $this->datePublication = $datePublication;

        return $this;
    }

    /**
     * Get datePublication
     *
     * @return \DateTime
     */
    public function getDatePublication()
    {
        return $this->datePublication;
    }

    /**
     * Set derniereModification
     *
     * @param \DateTime $derniereModification
     *
     * @return Annonce
     */
    public function setDerniereModification($derniereModification)
    {
        $this->derniereModification = $derniereModification;

        return $this;
    }

    /**
     * Get derniereModification
     *
     * @return \DateTime
     */
    public function getDerniereModification()
    {
        return $this->derniereModification;
    }

    /**
     * Set etat
     *
     * @param string $etat
     *
     * @return Annonce
     */
    public function setEtat($etat)
    {
        $this->etat = $etat;

        return $this;
    }

    /**
     * Get etat
     *
     * @return string
     */
    public function getEtat()
    {
        return $this->etat;
    }

    /**
     * Set image
     *
     * @param string $image
     *
     * @return Annonce
     */
    public function setImage($image)
    {
        $this->image = $image;

        return $this;
    }

    /**
     * Get image
     *
     * @return string
     */
    public function getImage()
    {
        return $this->image;
    }

    /**
     * Set idUtilisateur
     *
     * @param string $idUtilisateur
     *
     * @return Annonce
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

