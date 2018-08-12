<?php

namespace Pi\RsrBundle\Entity;

/**
 * Actualite
 */
class Actualite
{
    /**
     * @var integer
     */
    private $idActu;

    /**
     * @var string
     */
    private $titre;

    /**
     * @var string
     */
    private $contenu;


    /**
     * Get idActu
     *
     * @return integer
     */
    public function getIdActu()
    {
        return $this->idActu;
    }

    /**
     * Set titre
     *
     * @param string $titre
     *
     * @return Actualite
     */
    public function setTitre($titre)
    {
        $this->titre = $titre;

        return $this;
    }

    /**
     * Get titre
     *
     * @return string
     */
    public function getTitre()
    {
        return $this->titre;
    }

    /**
     * Set contenu
     *
     * @param string $contenu
     *
     * @return Actualite
     */
    public function setContenu($contenu)
    {
        $this->contenu = $contenu;

        return $this;
    }

    /**
     * Get contenu
     *
     * @return string
     */
    public function getContenu()
    {
        return $this->contenu;
    }
}
