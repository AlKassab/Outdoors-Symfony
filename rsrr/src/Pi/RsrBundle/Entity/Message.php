<?php

namespace Pi\RsrBundle\Entity;

/**
 * Message
 */
class Message
{
    /**
     * @var integer
     */
    private $idM;

    /**
     * @var string
     */
    private $contenu;

    /**
     * @var string
     */
    private $destinataire;

    /**
     * @var string
     */
    private $expediteur;


    /**
     * Get idM
     *
     * @return integer
     */
    public function getIdM()
    {
        return $this->idM;
    }

    /**
     * Set contenu
     *
     * @param string $contenu
     *
     * @return Message
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

    /**
     * Set destinataire
     *
     * @param string $destinataire
     *
     * @return Message
     */
    public function setDestinataire($destinataire)
    {
        $this->destinataire = $destinataire;

        return $this;
    }

    /**
     * Get destinataire
     *
     * @return string
     */
    public function getDestinataire()
    {
        return $this->destinataire;
    }

    /**
     * Set expediteur
     *
     * @param string $expediteur
     *
     * @return Message
     */
    public function setExpediteur($expediteur)
    {
        $this->expediteur = $expediteur;

        return $this;
    }

    /**
     * Get expediteur
     *
     * @return string
     */
    public function getExpediteur()
    {
        return $this->expediteur;
    }
}
