<?php
/**
 * Created by PhpStorm.
 * User: ASUS I7
 * Date: 08/04/2017
 * Time: 18:19
 */

namespace Pi\RsrBundle\Entity;
use Doctrine\ORM\Mapping as ORM;


/**
 * Favannonce
 *
 * @ORM\Table(name="favannonce")
 * @ORM\Entity(repositoryClass="Pi\RsrBundle\Entity\AnnonceRepository")
 *
 */
class Favannonce
{

    /**
     * @var integer
     *
     * @ORM\Column(name="id_fav", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idfav;



    /**
     * @var integer
     *
     * @ORM\Column(name="id_favuser", type="integer", nullable=false)
     */
    private $idfavuser;

    /**
     *
     * @ORM\ManyToOne(targetEntity="Pi\RsrBundle\Entity\Utilisateurs")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_user_part", referencedColumnName="id_utilisateur")
     * })
     */
    private $User;

    /**
     * @return int
     */
    public function getIdfav()
    {
        return $this->idfav;
    }

    /**
     * @param int $idfav
     */
    public function setIdfav($idfav)
    {
        $this->idfav = $idfav;
    }

    /**
     * @return int
     */
    public function getIdfavuser()
    {
        return $this->idfavuser;
    }

    /**
     * @param int $idfavuser
     */
    public function setIdfavuser($idfavuser)
    {
        $this->idfavuser = $idfavuser;
    }

    /**
     * @return mixed
     */
    public function getUser()
    {
        return $this->User;
    }

    /**
     * @param mixed $User
     */
    public function setUser($User)
    {
        $this->User = $User;
    }



    /**
     * @var integer
     */
    private $idFav;

    /**
     * @var integer
     */
    private $idFavuser;

    /**
     * @var \Pi\RsrBundle\Entity\Utilisateurs
     */
    private $idUserPart;


    /**
     * Set idUserPart
     *
     * @param \Pi\RsrBundle\Entity\Utilisateurs $idUserPart
     *
     * @return Favannonce
     */
    public function setIdUserPart(\Pi\RsrBundle\Entity\Utilisateurs $idUserPart = null)
    {
        $this->idUserPart = $idUserPart;

        return $this;
    }

    /**
     * Get idUserPart
     *
     * @return \Pi\RsrBundle\Entity\Utilisateurs
     */
    public function getIdUserPart()
    {
        return $this->idUserPart;
    }
}
