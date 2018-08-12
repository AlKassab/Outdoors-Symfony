<?php

namespace Pi\RsrBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
/**
 * Created by PhpStorm.
 * User: Amna
 * Date: 08/04/2017
 * Time: 03:02
 */

/**
 * Class Participant
 * @package Pi\RsrBundle\Entity
 * @ORM\Entity
 */
class Participant
{ /**
 * @ORM\Column(name="id_Part", type="integer")
 * @ORM\Id
 * @ORM\GeneratedValue
 *
 */
private $idPart;
    /**
     *
     * @ORM\ManyToOne(targetEntity="Pi\RsrBundle\Entity\Utilisateur")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_user_part", referencedColumnName="id")
     * })
     */
    private $User;

    /**
     *
     * @ORM\ManyToOne(targetEntity="Challenge")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_challenge_part", referencedColumnName="id_chal")
     * })
     */
    private $Challenge;

    /**
     * @return mixed
     */
    public function getIdPart()
    {
        return $this->idPart;
    }

    /**
     * @param mixed $idPart
     */
    public function setIdPart($idPart)
    {
        $this->idPart = $idPart;
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
     * @return mixed
     */
    public function getChallenge()
    {
        return $this->Challenge;
    }

    /**
     * @param mixed $Challenge
     */
    public function setChallenge($Challenge)
    {
        $this->Challenge = $Challenge;
    }


}