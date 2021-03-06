<?php

use Doctrine\Common\Annotations\AnnotationRegistry;
use Composer\Autoload\ClassLoader;

/** @var ClassLoader $loader */
$loader = require __DIR__.'/../vendor/autoload.php';
$loader->add('Acme',   __DIR__ . '/../src');

AnnotationRegistry::registerLoader([$loader, 'loadClass']);

return $loader;
