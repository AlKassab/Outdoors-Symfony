<?php
/**
 * Created by PhpStorm.
 * User: hassen
 * Date: 08/04/17
 * Time: 13:39
 */

namespace Pi\RsrBundle\Entity;


class PrivateMessage
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var string
     */
    private $message;

    /**
     * @var string
     */
    private $file;

    /**
     * @var string
     */
    private $image;

    /**
     * @var string
     */
    private $readed;

    /**
     * @var \DateTime
     */
    private $createdAt;

    /**
     * @var \Pi\RsrBundle\Entity\Utilisateur
     */
    private $emitter;

    /**
     * @var \Pi\RsrBundle\Entity\Utilisateur
     */
    private $receiver;


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
     * Set message
     *
     * @param string $message
     *
     * @return PrivateMessage
     */
    public function setMessage($message)
    {
        $this->message = $message;

        return $this;
    }

    /**
     * Get message
     *
     * @return string
     */
    public function getMessage()
    {
        return $this->message;
    }

    /**
     * Set file
     *
     * @param string $file
     *
     * @return PrivateMessage
     */
    public function setFile($file)
    {
        $this->file = $file;

        return $this;
    }

    /**
     * Get file
     *
     * @return string
     */
    public function getFile()
    {
        return $this->file;
    }

    /**
     * Set image
     *
     * @param string $image
     *
     * @return PrivateMessage
     */
    public function setImage($image)
    {
        $this->image = $image;

        return $this;
    }

    /**
     * Get image
     *
     * @return string
     */
    public function getImage()
    {
        return $this->image;
    }

    /**
     * Set readed
     *
     * @param string $readed
     *
     * @return PrivateMessage
     */
    public function setReaded($readed)
    {
        $this->readed = $readed;

        return $this;
    }

    /**
     * Get readed
     *
     * @return string
     */
    public function getReaded()
    {
        return $this->readed;
    }

    /**
     * Set createdAt
     *
     * @param \DateTime $createdAt
     *
     * @return PrivateMessage
     */
    public function setCreatedAt($createdAt)
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * Get createdAt
     *
     * @return \DateTime
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * Set emitter
     *
     * @param \Pi\RsrBundle\Entity\Utilisateur $emitter
     *
     * @return PrivateMessage
     */
    public function setEmitter(\Pi\RsrBundle\Entity\Utilisateur $emitter = null)
    {
        $this->emitter = $emitter;

        return $this;
    }

    /**
     * Get emitter
     *
     * @return \Pi\RsrBundle\Entity\Utilisateur
     */
    public function getEmitter()
    {
        return $this->emitter;
    }

    /**
     * Set receiver
     *
     * @param \Pi\RsrBundle\Entity\Utilisateur $receiver
     *
     * @return PrivateMessage
     */
    public function setReceiver(\Pi\RsrBundle\Entity\Utilisateur $receiver = null)
    {
        $this->receiver = $receiver;

        return $this;
    }

    /**
     * Get receiver
     *
     * @return \Pi\RsrBundle\Entity\Utilisateur
     */
    public function getReceiver()
    {
        return $this->receiver;
    }
}
