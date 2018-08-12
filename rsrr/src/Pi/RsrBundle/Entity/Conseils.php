<?php

namespace Pi\RsrBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Conseils
 *
 * @ORM\Table(name="conseils")
 * @ORM\Entity
 */
class Conseils
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id_conseil", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idConseil;

    /**
     * @var string
     *
     * @ORM\Column(name="contenu", type="string", length=200, nullable=false)
     */
    private $contenu;



    /**
     * Get idConseil
     *
     * @return integer
     */
    public function getIdConseil()
    {
        return $this->idConseil;
    }

    /**
     * Set contenu
     *
     * @param string $contenu
     *
     * @return Conseils
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
