<?php
require_once "controllers/routes.controller.php";
require_once "controllers/terapeutas.controller.php";
require_once "controllers/pacientes.controller.php";


$rutas = new ControladorRutas();
$rutas -> index();
