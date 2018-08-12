<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class RegisterType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, array(
                'label' => false,
                'required' => 'required',
                'attr' => array(
                    'class' => 'form-name form-control form-white',
                    'placeholder' => "First Name",
                    'autofocus' => true
                )
            ))
            ->add('surname', TextType::class, array(
                'label' => false,
                'required' => 'required',
                'attr' => array(
                    'class' => 'form-surname form-control form-white',
                    'placeholder' => "Last name"
                )
            ))
            ->add('username', TextType::class, array(
                'label' => false,
                'required' => 'required',
                'attr' => array(
                    'class' => 'form-nick form-control nick-input form-white',
                    'placeholder' => "Username"
                )
            ))
            ->add('email', EmailType::class, array(
                'label' => false,
                'required' => 'required',
                'attr' => array(
                    'class' => 'form-email form-control form-white',
                    'placeholder' => "E-mail"
                )
            ))
            ->add('password', PasswordType::class, array(
                'label' => false,
                'required' => 'required',
                'attr' => array(
                    'class' => 'form-pass form-control form-white',
                    'placeholder' => "Password"
                )
            ))
            ->add('Sign-up', SubmitType::class, array(
                "attr" => array(
                    "class" => "form-submit btn btn-success"
                )
            ))
        ;
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Pi\RsrBundle\Entity\Utilisateur'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'pi_rsrbundle_utilisateur';
    }


}
