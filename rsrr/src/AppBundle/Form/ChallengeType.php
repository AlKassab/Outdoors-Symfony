<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ChallengeType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('dateDebut',DateType::class,array('attr'=>array('class'=>'input__field input__field--hoshi')))
                 ->add('dateFin',DateType::class)
                 ->add('nbrPart',NumberType::class)
                 ->add('nom',TextType::class,array('attr'=>array('class'=>'input__field input__field--hoshi')))
                 ->add('image', FileType::class, array(
                'label' => 'Votre photo : ','data_class' => null))

            ->add('lieuArrivee' ,TextType::class)
//                 ->add('lieuDepart', 'choice', array('multiple' => array(
//                     '1' => 'Casual',
//                     '2' => 'Fun',
//                     '3' => 'RolePlay',
//                     '4' => 'Hardcore',
//                 )))
            ->add('lieuDepart' ,TextType::class)
            ->add('AJOUTER', SubmitType::class)
            ;
    }
    
    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Pi\RsrBundle\Entity\Challenge'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'pi_rsrbundle_challenge';
    }


}
