<?php

namespace Pi\RsrBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Campers
 *
 * @ORM\Table(name="campers")
 * @ORM\Entity
 */
class Campers
{
    /**
     * @var integer
     *
     * @ORM\Column(name="nbr", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $nbr;



    /**
     * Get nbr
     *
     * @return integer
     */
    public function getNbr()
    {
        return $this->nbr;
    }
}
