<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;


class UtilisateurType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, array(
                'label' => 'Name',
                'required' => 'required',
                'attr' => array(
                    'class' => 'form-name form-control'
                )
            ))
            ->add('surname', TextType::class, array(
                'label' => 'Last name',
                'required' => 'required',
                'attr' => array(
                    'class' => 'form-surname form-control'
                )
            ))
            ->add('username', TextType::class, array(
                'label' => 'Username',
                'required' => 'required',
                'attr' => array(
                    'class' => 'form-nick form-control'
                )
            ))
            ->add('email', EmailType::class, array(
                'label' => 'E-mail',
                'required' => 'required',
                'attr' => array(
                    'class' => 'form-email form-control'
                )
            ))
            ->add('bio', TextareaType::class, array(
                'label' => 'About me',
                'required' => false,
                'attr' => array(
                    'class' => 'form-bio form-control'
                )
            ))
            ->add('tel', TextareaType::class, array(
                'label' => 'Tel',
                'required' => false,
                'attr' => array(
                    'class' => 'form-bio form-control'
                )
            ))
            ->add('city', ChoiceType::class, array(
                'choices' => array(
                    'Ariana' => 'Ariana',
                    'Beja' => 'Beja',
                    'Ben Arous'   => 'Ben Arous',
                    'Bizerte' => 'Bizerte',
                    'Gabes' => 'Gabes',
                    'Gafsa' => 'Gafsa',
                    'Jendouba' => 'Jendouba',
                    'Kairouan' => 'Kairouan',
                    'Kasserine' => 'Kasserine',
                    'Kebili' => 'Kebili',
                    'Kef' => 'Kef',
                    'Mahdia' => 'Mahdia',
                    'Manouba' => 'Manouba',
                    'Medenine' => 'Medenine',
                    'Monastir' => 'Monastir',
                    'Nabeul' => 'Nabeul',
                    'Sfax' => 'Sfax',
                    'Sidi Bouzid' => 'Sidi Bouzid',
                    'Siliana' => 'Siliana',
                    'Sousse' => 'Sousse',
                    'Tataouine' => 'Tataouine',
                    'Tozeur' => 'Tozeur',
                    'Tunis' => 'Tunis',
                    'Zaghouan' => 'Zaghouan'
                ),
            ))
            ->add('image', FileType::class, array(
                'label' => 'Photo',
                'required' => false,
                'data_class' => null,
                'attr' => array(
                    'class' => 'form-image form-control'
                )
            ))
            ->add('Save', SubmitType::class, array(
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
