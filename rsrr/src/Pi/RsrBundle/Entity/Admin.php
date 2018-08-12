<?php

namespace Pi\RsrBundle\Entity;

/**
 * Admin
 */
class Admin
{
    /**
     * @var string
     */
    private $idAdmin;

    /**
     * @var string
     */
    private $mdp;


    /**
     * Get idAdmin
     *
     * @return string
     */
    public function getIdAdmin()
    {
        return $this->idAdmin;
    }

    /**
     * Set mdp
     *
     * @param string $mdp
     *
     * @return Admin
     */
    public function setMdp($mdp)
    {
        $this->mdp = $mdp;

        return $this;
    }

    /**
     * Get mdp
     *
     * @return string
     */
    public function getMdp()
    {
        return $this->mdp;
    }
}
