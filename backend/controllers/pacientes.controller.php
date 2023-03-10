<?php

class ControladorPacientes{

    //Crear un paciente
    public function Create(){
        $json = array(
            "detalle" => "Paciente guardado"
        );
        echo json_encode($json,true);
        return;
    }

    //Eliminar un paciente
    public function Delete(){
        $json = array(
            "detalle" => "Paciente elimnado"
        );
        echo json_encode($json,true);
        return;
    }

    //Actualizar un paciente
    public function Update(){
        $json = array(
            "detalle" => "Paciente actualizado"
        );
        echo json_encode($json,true);
        return;
    }

    //Obtener todos los pacientes
    public function GetAll(){
        $json = array(
            "detalle" => "Pacientes obtenidos"
        );
        echo json_encode($json,true);
        return;

    }
}