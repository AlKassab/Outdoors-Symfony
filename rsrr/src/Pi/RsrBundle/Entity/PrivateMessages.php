<?php

namespace Pi\RsrBundle\Entity;

/**
 * PrivateMessages
 */
class PrivateMessages
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
     * @var \Pi\RsrBundle\Entity\Utilisateurs
     */
    private $emitter;

    /**
     * @var \Pi\RsrBundle\Entity\Utilisateurs
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
     * @return PrivateMessages
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
     * @return PrivateMessages
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
     * @return PrivateMessages
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
     * @return PrivateMessages
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
     * @return PrivateMessages
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
     * @param \Pi\RsrBundle\Entity\Utilisateurs $emitter
     *
     * @return PrivateMessages
     */
    public function setEmitter(\Pi\RsrBundle\Entity\Utilisateurs $emitter = null)
    {
        $this->emitter = $emitter;

        return $this;
    }

    /**
     * Get emitter
     *
     * @return \Pi\RsrBundle\Entity\Utilisateurs
     */
    public function getEmitter()
    {
        return $this->emitter;
    }

    /**
     * Set receiver
     *
     * @param \Pi\RsrBundle\Entity\Utilisateurs $receiver
     *
     * @return PrivateMessages
     */
    public function setReceiver(\Pi\RsrBundle\Entity\Utilisateurs $receiver = null)
    {
        $this->receiver = $receiver;

        return $this;
    }

    /**
     * Get receiver
     *
     * @return \Pi\RsrBundle\Entity\Utilisateurs
     */
    public function getReceiver()
    {
        return $this->receiver;
    }
}
