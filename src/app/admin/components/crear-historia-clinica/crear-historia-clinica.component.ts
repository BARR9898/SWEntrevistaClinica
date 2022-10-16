import { Component, OnInit } from '@angular/core';
import { HistoriaClinica } from '../../models/historia-clinica';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crear-historia-clinica',
  templateUrl: './crear-historia-clinica.component.html',
  styleUrls: ['./crear-historia-clinica.component.css']
})

export class CrearHistoriaClinicaComponent implements OnInit {

  constructor() { 
  
  }

  historia_clinica:HistoriaClinica  = {
    expediente: '',
    fecha: '',
    apellido_paterno: '',
    apellido_materno: '',
    nombre: '',
    domicilio: '',
    sexo: '',
    edad: '',
    ocupacion: '',
    motivo_consulta: '',
    circunstancias_aparicion: '',
    sintomas_detectados: '',
    descripcion_fisica: '',
    demanda_tratamiento: '',
    area_escolar: '',
    area_laboral: '',
    acontecimientos_significativos: '',
    desarrollo_psicosexual: '',
    familiograma: '',
    area_familiar: '',
    mapeo_familiar: '',
    impresion_diagnostica: [] ,
    hipotesis_familiar: '',
    examen_mental: '',
    indicaciones_dignosticas: ''
  };

  
  nombre = new FormBuilder().control('');
  apellido_paterno = new FormBuilder().control('');
  apellido_materno = new FormBuilder().control('');
  edad = new FormBuilder().control('');
  domicilio = new FormBuilder().control('');
  sexo = new FormBuilder().control('');
  sex_options = ['Masculino','Femenino'];
  ocupacion = new FormBuilder().control('');
  motivo_consulta = new FormBuilder().control('');
  circunstancias_aparicion = new FormBuilder().control('');
  sintomas_detectados = new FormBuilder().control('');
  descripcion_fisica = new FormBuilder().control('');
  impresion_diagnostica = new FormBuilder().control('');

  demanda_tratamiento = new FormBuilder().control('');
  area_escolar = new FormBuilder().control('');
  area_laboral = new FormBuilder().control('');
  acontecimientos_significativos = new FormBuilder().control('');
  desarrollo_psicosexual = new FormBuilder().control('');
  familiograma = new FormBuilder().control('');

  area_familiar = new FormBuilder().control('');
  mapeo_familiar = new FormBuilder().control('');




  hipotesis_familiar = new FormBuilder().control('');
  examen_mental = new FormBuilder().control('');
  indicaciones_dignosticas = new FormBuilder().control('');

  impresiones_diagnosticas_eje = new FormBuilder().control('');
  impresiones_diagnosticas_codigo = new FormBuilder().control('');
  impresiones_diagnosticas_dsm = new FormBuilder().control('');
  impresiones_diagnosticas_cie = new FormBuilder().control('');
  impresiones_diagnosticas_transtorno = new FormBuilder().control('');

  ngOnInit(): void {
  }

  print(){
    console.log(this.historia_clinica)
  }

  agregarNuevoDiagnostico(){
    console.log(this.impresiones_diagnosticas_eje.value);
    console.log(this.impresiones_diagnosticas_codigo.value);
    console.log(this.impresiones_diagnosticas_dsm.value);
    console.log(this.impresiones_diagnosticas_cie.value);
    console.log(this.impresiones_diagnosticas_transtorno.value);
    
    let nuevoTranstorno:any = {
      eje: this.impresiones_diagnosticas_eje.value,
      codigo: this.impresiones_diagnosticas_codigo.value,
      dsm: this.impresiones_diagnosticas_dsm.value,
      cie: this.impresiones_diagnosticas_cie.value,
      transtorno: this.impresiones_diagnosticas_transtorno.value
    }

    this.historia_clinica.impresion_diagnostica.push(nuevoTranstorno);

    console.log( this.historia_clinica.impresion_diagnostica)
    
    this.limpiarCampos();
    


    
  }

  eliminarTranstorno(i:number){
    console.log(i);
    if (this.historia_clinica.impresion_diagnostica.length == 1) {
      this.historia_clinica.impresion_diagnostica.pop()
    }else{
      this.historia_clinica.impresion_diagnostica.splice(i,i)
    }
    
    console.log(this.historia_clinica.impresion_diagnostica);
    
    
  }

  camposLlenos():boolean{
    if ( 
      this.impresiones_diagnosticas_eje.value == '' ||
      this.impresiones_diagnosticas_dsm.value == '' || 
      this.impresiones_diagnosticas_cie.value == '' ||
      this.impresiones_diagnosticas_transtorno.value == '' ){
      return true;
    }
      return false;
    
  }

  limpiarCampos(){
    this.impresiones_diagnosticas_eje.setValue('');
    this.impresiones_diagnosticas_dsm.setValue('');
    this.impresiones_diagnosticas_cie.setValue('');
    this.impresiones_diagnosticas_transtorno.setValue('');
    this.impresiones_diagnosticas_codigo.setValue('');
  }

}
