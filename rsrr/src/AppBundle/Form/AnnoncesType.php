<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\SubmitButton;
use Symfony\Component\Form\SubmitButtonBuilder;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AnnoncesType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nom')

            ->add('type', ChoiceType::class, array(
                'choices'  => array(
                    'offre' => 'offre',
                    'demande' => 'demande',
                )))
            ->add('description')
            ->add('prix')



            ->add('categorie', ChoiceType::class, array(
                'choices'  => array(
                    'Vetement' => 'Vetement',
                    'materiels' =>  'materiels',
                    'autre' => 'autre',
                )))

        ->add('submit',SubmitType::class);
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Pi\RsrBundle\Entity\Annonces'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'pi_rsrbundle_annonces';
    }


}
