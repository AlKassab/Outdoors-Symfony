<?php

namespace Pi\RsrBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Payement
 *
 * @ORM\Table(name="payement")
 * @ORM\Entity
 */
class Payement
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id_payement", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idPayement;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="date", nullable=false)
     */
    private $date;

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
     * Get idPayement
     *
     * @return integer
     */
    public function getIdPayement()
    {
        return $this->idPayement;
    }

    /**
     * Set date
     *
     * @param \DateTime $date
     *
     * @return Payement
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
     * Set idRando
     *
     * @param integer $idRando
     *
     * @return Payement
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
     * @return Payement
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
