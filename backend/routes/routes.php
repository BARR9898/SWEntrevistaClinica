<?php

$array_rutas = explode("/",$_SERVER['REQUEST_URI']);

//Evalua si hay peticiones a la API
//SI NO HAY PETICIONES, ENTONCES...
if(count(array_filter($array_rutas)) == 0){
    $json = array(
        "detalle" => "No encontrado"
    );
    echo json_encode($json,true);
    return;
}else{

    if(count(array_filter($array_rutas)) == 1){
        if (array_filter($array_rutas)[1] == "terapeutas") {

            if (isset($_SERVER['REQUEST_METHOD'])) {

                switch ($_SERVER['REQUEST_METHOD']) {
                    case 'POST':
                        $terapeutas = new ControladorTerapeuta;
                        $terapeutas -> Create();
                        break;
                    case 'DELETE':
                        $terapeutas = new ControladorTerapeuta;
                        $terapeutas -> Delete();
                        break;
                    case 'GET':
                        $pacientes = new ControladorTerapeuta;
                        $pacientes -> GetAll();
                        break;
                    
                        default:

                        # code...
                        break;
                }
            }

        }
    
        if (array_filter($array_rutas)[1] == "pacientes") {

            if (isset($_SERVER['REQUEST_METHOD'])) {

                switch ($_SERVER['REQUEST_METHOD']) {
                    case 'POST':
                        $pacientes = new ControladorPacientes;
                        $pacientes -> Create();
                        break;

                    case 'GET':
                        $pacientes = new ControladorPacientes;
                        $pacientes -> GetAll();
                        break;
                    
                    default:
                        # code...
                        break;
                }
            }

        }
    }else{

    

        if (array_filter($array_rutas)[1] == "terapeutas" &&  is_numeric(array_filter($array_rutas)[2])) {

            
            $json = array(
                "detalle" => "Estoy en un registro"
            );
            echo json_encode($json,true);
            return;
        }

        if (array_filter($array_rutas)[1] == "pacientes" && is_numeric(array_filter($array_rutas)[2])){

            switch ($_SERVER['REQUEST_METHOD']) {
                case 'DELETE':
                    $pacientes = new ControladorPacientes;
                    $pacientes -> Delete();
                    break;
                case 'PUT':
                    $pacientes = new ControladorPacientes;
                    $pacientes -> Delete();
                    break;
            }


        }
    }

}



/*return;

echo '<pre>'; print_r($_SERVER['REQUEST_URI']);echo '</pre>';
return;
*/