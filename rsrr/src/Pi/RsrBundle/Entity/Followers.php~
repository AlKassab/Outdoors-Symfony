<?php

namespace Pi\RsrBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Followers
 *
 * @ORM\Table(name="followers", indexes={@ORM\Index(name="fk_following_users", columns={"user"}), @ORM\Index(name="fk_followed", columns={"followed"})})
 * @ORM\Entity
 */
class Followers
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
     * @var \Utilisateurs
     *
     * @ORM\ManyToOne(targetEntity="Utilisateurs")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="followed", referencedColumnName="id_utilisateur")
     * })
     */
    private $followed;

    /**
     * @var \Utilisateurs
     *
     * @ORM\ManyToOne(targetEntity="Utilisateurs")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="user", referencedColumnName="id_utilisateur")
     * })
     */
    private $user;

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return \Utilisateurs
     */
    public function getFollowed()
    {
        return $this->followed;
    }

    /**
     * @param \Utilisateurs $followed
     */
    public function setFollowed($followed)
    {
        $this->followed = $followed;
    }

    /**
     * @return \Utilisateurs
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param \Utilisateurs $user
     */
    public function setUser($user)
    {
        $this->user = $user;
    }




}
