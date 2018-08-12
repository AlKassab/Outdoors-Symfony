<?php

namespace Pi\RsrBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Groupedescusion
 *
 * @ORM\Table(name="groupedescusion")
 * @ORM\Entity
 */
class Groupedescusion
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id_g", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idG;

    /**
     * @var string
     *
     * @ORM\Column(name="nom", type="string", length=20, nullable=false)
     */
    private $nom;



    /**
     * Get idG
     *
     * @return integer
     */
    public function getIdG()
    {
        return $this->idG;
    }

    /**
     * Set nom
     *
     * @param string $nom
     *
     * @return Groupedescusion
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
}
