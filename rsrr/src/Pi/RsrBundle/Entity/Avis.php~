<?php

namespace Pi\RsrBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Avis
 *
 * @ORM\Table(name="avis")
 * @ORM\Entity
 */
class Avis
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id_avis", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idAvis;

    /**
     * @var float
     *
     * @ORM\Column(name="grade", type="float", precision=10, scale=0, nullable=false)
     */
    private $grade;

    /**
     * @var integer
     *
     * @ORM\Column(name="id_rando", type="integer", nullable=false)
     */
    private $idRando;

    /**
     * @var string
     *
     * @ORM\Column(name="id_utilisateur", type="string", length=20, nullable=false)
     */
    private $idUtilisateur;



    /**
     * Get idAvis
     *
     * @return integer
     */
    public function getIdAvis()
    {
        return $this->idAvis;
    }

    /**
     * Set grade
     *
     * @param float $grade
     *
     * @return Avis
     */
    public function setGrade($grade)
    {
        $this->grade = $grade;

        return $this;
    }

    /**
     * Get grade
     *
     * @return float
     */
    public function getGrade()
    {
        return $this->grade;
    }

    /**
     * Set idRando
     *
     * @param integer $idRando
     *
     * @return Avis
     */
    public function setIdRando($idRando)
    {
        $this->idRando = $idRando;

        return $this;
    }

    /**
     * Get idRando
     *
     * @return integer
     */
    public function getIdRando()
    {
        return $this->idRando;
    }

    /**
     * Set idUtilisateur
     *
     * @param string $idUtilisateur
     *
     * @return Avis
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
