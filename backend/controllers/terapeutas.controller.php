<?php

class ControladorTerapeuta {

    //Agregar un terapeuta
    public function Create(){
        $json = array(
            "detalle" => "Terapeuta guardado"
        );
        echo json_encode($json,true);
        return;

    }
    
    //Eliminar un terapeuta
    public function Delete(){
        $json = array(
            "detalle" => "Terapeuta eliminado"
        );
        echo json_encode($json,true);
        return;

    }


    //Actualizar un terapeuta
    public function Update(){
        $json = array(
            "detalle" => "Terapeuta actualizado"
        );
        echo json_encode($json,true);
        return;
    }



    //Obtener todos los terapeutas
    public function GetAll(){
        $json = array(
            "detalle" => "Terapeutas obtenidos"
        );
        echo json_encode($json,true);
        return;

    }
}