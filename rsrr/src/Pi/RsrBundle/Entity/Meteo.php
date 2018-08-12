<?php

namespace Pi\RsrBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Meteo
 *
 * @ORM\Table(name="meteo")
 * @ORM\Entity
 */
class Meteo
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id_actu", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idActu;



    /**
     * Get idActu
     *
     * @return integer
     */
    public function getIdActu()
    {
        return $this->idActu;
    }
}
