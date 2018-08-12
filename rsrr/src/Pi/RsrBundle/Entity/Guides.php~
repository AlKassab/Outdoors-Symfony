<?php

namespace Pi\RsrBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Guides
 *
 * @ORM\Table(name="guides")
 * @ORM\Entity
 */
class Guides
{
    /**
     * @var string
     *
     * @ORM\Column(name="id_utilisateur", type="string", length=20, nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idUtilisateur;

    /**
     * @var integer
     *
     * @ORM\Column(name="cin", type="integer", nullable=false)
     */
    private $cin;

    /**
     * @var string
     *
     * @ORM\Column(name="certification", type="string", length=200, nullable=false)
     */
    private $certification;

    /**
     * @var string
     *
     * @ORM\Column(name="lieux", type="string", length=20, nullable=false)
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
     * @return Guides
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
     * @return Guides
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
     * @return Guides
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
