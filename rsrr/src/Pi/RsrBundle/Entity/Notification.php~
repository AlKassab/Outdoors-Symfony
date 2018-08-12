<?php

namespace Pi\RsrBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Notification
 *
 * @ORM\Table(name="notification")
 * @ORM\Entity
 */
class Notification
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var integer
     *
     * @ORM\Column(name="cont", type="integer", nullable=false)
     */
    private $cont;



    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set cont
     *
     * @param integer $cont
     *
     * @return Notification
     */
    public function setCont($cont)
    {
        $this->cont = $cont;

        return $this;
    }

    /**
     * Get cont
     *
     * @return integer
     */
    public function getCont()
    {
        return $this->cont;
    }
}
