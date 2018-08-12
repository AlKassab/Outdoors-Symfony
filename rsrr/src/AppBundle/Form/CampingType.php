<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CampingType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nom',TextType::class,array('attr'=>array('class'=>'form-control')))
            ->add('description',TextareaType::class,array('attr'=>array('class'=>'form-control')))
            ->add('date',DateType::class,array(
                'years' => range(date('y') +10, date('y'))),array('attr'=>array('class'=>'date-picker form-control hasDatepicker')))
            ->add('lieu',TextType::class,array('attr'=>array('class'=>'form-control')))
            ->add('image',FileType::class,array('attr'=>array('class'=>'form-control')))
            ->add('Valider',SubmitType::class,array('attr'=>array('class'=>'btn btn-embossed btn-primary m-r-20','rows'=>10)));
            //->add('id');
    }
    
    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Pi\RsrBundle\Entity\Camping'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'pi_rsrbundle_camping';
    }


}
