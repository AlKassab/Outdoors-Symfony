<?php

namespace Pi\RsrBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Profil
 *
 * @ORM\Table(name="profil")
 * @ORM\Entity
 */
class Profil
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id_profil", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idProfil;

    /**
     * @var string
     *
     * @ORM\Column(name="localisation", type="string", length=255, nullable=true)
     */
    private $localisation;

    /**
     * @var string
     *
     * @ORM\Column(name="photo_profil", type="string", length=255, nullable=true)
     */
    private $photoProfil;

    /**
     * @var string
     *
     * @ORM\Column(name="cover_photo", type="string", length=255, nullable=true)
     */
    private $coverPhoto;

    /**
     * @var string
     *
     * @ORM\Column(name="detail", type="string", length=200, nullable=true)
     */
    private $detail;

    /**
     * @var string
     *
     * @ORM\Column(name="sexe", type="string", length=200, nullable=true)
     */
    private $sexe;

    /**
     * @var integer
     *
     * @ORM\Column(name="tel", type="integer", nullable=true)
     */
    private $tel;

    /**
     * @var \User
     *
     * @ORM\OneToOne(targetEntity="Utilisateur")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_user", referencedColumnName="id_utilisateur")
     * })
     */
    protected $user;

    /**
     * @return \User
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param \User User
     */
    public function setUser($user)
    {
        $this->user = $user;
    }

    /**
     * @return int
     */
    public function getIdProfil()
    {
        return $this->idProfil;
    }

    /**
     * @param int $idProfil
     */
    public function setIdProfil($idProfil)
    {
        $this->idProfil = $idProfil;
    }

    
    /**
     * @return string
     */
    public function getLocalisation()
    {
        return $this->localisation;
    }

    /**
     * @param string $localisation
     */
    public function setLocalisation($localisation)
    {
        $this->localisation = $localisation;
    }

    /**
     * @return string
     */
    public function getPhotoProfil()
    {
        return $this->photoProfil;
    }

    /**
     * @param string $photoProfil
     */
    public function setPhotoProfil($photoProfil)
    {
        $this->photoProfil = $photoProfil;
    }

    /**
     * @return string
     */
    public function getCoverPhoto()
    {
        return $this->coverPhoto;
    }

    /**
     * @param string $coverPhoto
     */
    public function setCoverPhoto($coverPhoto)
    {
        $this->coverPhoto = $coverPhoto;
    }

    /**
     * @return string
     */
    public function getDetail()
    {
        return $this->detail;
    }

    /**
     * @param string $detail
     */
    public function setDetail($detail)
    {
        $this->detail = $detail;
    }

    /**
     * @return string
     */
    public function getSexe()
    {
        return $this->sexe;
    }

    /**
     * @param string $sexe
     */
    public function setSexe($sexe)
    {
        $this->sexe = $sexe;
    }

    /**
     * @return int
     */
    public function getTel()
    {
        return $this->tel;
    }

    /**
     * @param int $tel
     */
    public function setTel($tel)
    {
        $this->tel = $tel;
    }




}

