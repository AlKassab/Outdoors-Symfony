<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TimeType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UpdateRandoType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->add('lieu',ChoiceType::class,array(
        'choices' => array(
            'El Feija'=>'El Feija',
            'Djerba'=> 'Djerba',
            'Ain Draham'=>'Ain Drahem',
            'Tamerza'=>'Tamerza',
            'Zaghouan'=>'Zaghouan',
            'Tozeur'=>'Tozeur',
            'Douz'=>'Douz',
            'Boukornine'=>'Boukornine',
            'Mides'=>'Mides',
            'Gafsa'=>'Gafsa',
            'Chott el jerid'=>'Chott el jerid',
            'Bouhedma'=>'Bouhedma',
            'Tataouine'=>'Tataouine',
            'El Kala'=>'El Kala',
            'El Haouaria'=>'El Haouaria',
            'Matmata'=>'Matmata',
            'Nafta'=>'Nafta',
            'Chenini'=>'Chenini',
            'Korbous'=>'Kourbous',
            'Tabarka'=>'Tabarka',
            'Kebili'=>'Kebili',
            'Ksar Hadada'=>'Ksar Hadada',
            'Tinija'=>'Tinija',
            'Jbil'=>'Jbil',
        ),
    ))
        ->add('date', DateType::class, array(
            'input'  => 'datetime',
        ))
        ->add('description',TextareaType::class, array('attr' => array('class' => 'tinymce'),))
        ->add('prix',NumberType::class, array(
            "invalid_message" => "veuillez saisir un prix valide!",
            "invalid_message_parameters" => array(
                "{{ type }}" => "float"
            )
        ))
        ->add('heure')
        ->add('kilometrage',NumberType::class, array(
            "invalid_message" => "veuillez saisir un kilometrage valide!",
            "invalid_message_parameters" => array(
                "{{ type }}" => "float"
            )
        ))
        ->add('altitude',NumberType::class, array(
            "invalid_message" => "veuillez saisir une altitude valide!",
            "invalid_message_parameters" => array(
                "{{ type }}" => "float"
            )
        ))
        ->add('nbrRandonneur')
        ->add('type',ChoiceType::class,array(
            'choices'=>array(
                'En vélo'=>'En vélo',
                'A pied'=>'A pied',
            ),
        ))
        ->add('difficulte', ChoiceType::class, array(
            'choices'=>array(
                'Facile'=>'Facile',
                'Moyenne'=>'Moyenne',
                'Difficile'=>'Difficile',
                'Très difficile'=>'Très difficile',
            ),
        ))
        ->add('organisateur')
        ->add('Ajouter',SubmitType::class);

    }

    public function configureOptions(OptionsResolver $resolver)
    {

    }

    public function getName()
    {
        return 'pi_rsrbundle_update_rando_type';
    }
}
