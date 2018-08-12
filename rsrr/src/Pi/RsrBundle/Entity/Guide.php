<?php

namespace Pi\RsrBundle\Entity;

/**
 * Guide
 */
class Guide
{
    /**
     * @var string
     */
    private $idUtilisateur;

    /**
     * @var integer
     */
    private $cin;

    /**
     * @var string
     */
    private $certification;

    /**
     * @var string
     */
    private $lieux;


    /**
     * Get idUtilisateur
     *
     * @return string
     */
    public function getIdUtilisateur()
    {
        return $this->idUtilisateur;
    }

    /**
     * Set cin
     *
     * @param integer $cin
     *
     * @return Guide
     */
    public function setCin($cin)
    {
        $this->cin = $cin;

        return $this;
    }

    /**
     * Get cin
     *
     * @return integer
     */
    public function getCin()
    {
        return $this->cin;
    }

    /**
     * Set certification
     *
     * @param string $certification
     *
     * @return Guide
     */
    public function setCertification($certification)
    {
        $this->certification = $certification;

        return $this;
    }

    /**
     * Get certification
     *
     * @return string
     */
    public function getCertification()
    {
        return $this->certification;
    }

    /**
     * Set lieux
     *
     * @param string $lieux
     *
     * @return Guide
     */
    public function setLieux($lieux)
    {
        $this->lieux = $lieux;

        return $this;
    }

    /**
     * Get lieux
     *
     * @return string
     */
    public function getLieux()
    {
        return $this->lieux;
    }
}
