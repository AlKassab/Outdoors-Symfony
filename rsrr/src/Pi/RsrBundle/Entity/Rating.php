<?php


namespace Pi\RsrBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Rating
 *
 * @ORM\Table(name="rating")
 * @ORM\Entity
 */
class Rating
{

    /**
     * @var integer
     *
     * @ORM\Column(name="id_rate", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idRate;

    /**
     * @var integer
     *
     * @ORM\Column(name="nombre_vote", type="integer", nullable=false)
     */
    private $nombreVote;

    /**
     * @ORM\ManyToOne(targetEntity="Pi\RsrBundle\Entity\User")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="user", referencedColumnName="id")
     * })
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="Pi\RsrBundle\Entity\Challenge")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="challenge", referencedColumnName="id_chal")
     * })
     */
    private $challenge;

    /**
     * @return int
     */
    public function getIdRate()
    {
        return $this->idRate;
    }

    /**
     * @param int $idRate
     */
    public function setIdRate($idRate)
    {
        $this->idRate = $idRate;
    }

    /**
     * @return mixed
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param mixed $user
     */
    public function setUser($user)
    {
        $this->user = $user;
    }

    /**
     * @return mixed
     */
    public function getChallenge()
    {
        return $this->challenge;
    }

    /**
     * @param mixed $challenge
     */
    public function setChallenge($challenge)
    {
        $this->challenge = $challenge;
    }

    /**
     * @return int
     */
    public function getNombreVote()
    {
        return $this->nombreVote;
    }

    /**
     * @param int $nombreVote
     */
    public function setNombreVote($nombreVote)
    {
        $this->nombreVote = $nombreVote;
    }


}

