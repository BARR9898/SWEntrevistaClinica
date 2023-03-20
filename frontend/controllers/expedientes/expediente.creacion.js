app.controller('expedienteCreacionController', function($scope) {
   $scope.expediente = {
      nombre: "",
      apellido_paterno: "",
      apellido_materno: "",
      edad: "",
      ocupacion: "",
      sexo: "",
      direccion: "",
      motivo_consulta: "",
      circunstancias_aparicion: "",
      sintomas: [],
      descripcion_fisica: "",
      area_laboral: "",
      area_escolar: "",
      demanda_tratamiento: "",
      acontecimientos_significativos:"",
      familiograma: "",
      desarrollo_psicosexual: "",
      mapeo_familiar:"",
      impresion_diagnostica_familia:"",
      hipotesis_familiar:"",
      examen_mental:"",
      indicaciones_diagnosticas:"",
      impresiones_diagnosticas_dcm_cie: []




  }

  $scope.sexos = [
   {
      descripcion: "Masculino",
      value: "M"
   },
   {
      descripcion: "Femenino",
      value: "F"
   },
   {
      descripcion: "Otro",
      value: "O"
   }
  ]

  $scope.guardar = function (){
      console.log($scope.expediente);
      alert("HOLA")
  }

  $scope.auxSintomas = "";

  $scope.guardarSintoma = () => {
   $scope.expediente.sintomas.push($scope.auxSintomas);
   $scope.auxSintomas = '';
   console.log('SINTOMAS' , $scope.expediente.sintomas);
  }


  $scope.mostrarSintomas = false;

  $scope.eliminarSintoma = (index) => {
   if ( (index == 0) && ($scope.expediente.sintomas.length == 1)  ) {
      $scope.expediente.sintomas.pop();
      
   }else if( (index == 0) && ($scope.expediente.sintomas.length > 1)){
      $scope.expediente.sintomas.shift();

   }else{
      $scope.expediente.sintomas.splice(index,index);
   }
  }

  $scope.auxEje = $scope.auxCodigo = $scope.auxDcm = $scope.auxCie = $scope.auxTranstorno = "";

  $scope.guardarImpresionDiagnosticaDcmCie = () => {
      let auxJsonDiagnostico = {
         eje: "",
         codigo: "",
         dcm:"",
         cie:"",
         transtorno:""
      };
     auxJsonDiagnostico.eje = $scope.auxEje;
     auxJsonDiagnostico.codigo = $scope.auxCodigo
     auxJsonDiagnostico.dcm = $scope.auxDcm;
     auxJsonDiagnostico.cie = $scope.auxCie;
     auxJsonDiagnostico.transtorno = $scope.auxTranstorno;

     $scope.expediente.impresiones_diagnosticas_dcm_cie.push(auxJsonDiagnostico);
      
     auxJsonDiagnostico = {
         eje: "",
         codigo: "",
         dcm:"",
         cie:"",
         transtorno:""
      };

     $scope.auxEje = $scope.auxCodigo = $scope.auxDcm = $scope.auxCie = $scope.auxTranstorno = "";

      console.log($scope.expediente.impresiones_diagnosticas_dcm_cie);
   []


  }

  $scope.eliminarImpresionDiagnosticaDcmCie = (index) => {
   if ( (index == 0) && ($scope.expediente.sintomas.length == 1)  ) {
      $scope.expediente.sintomas.pop();
      
   }else if( (index == 0) && ($scope.expediente.sintomas.length > 1)){
      $scope.expediente.sintomas.shift();

   }else{
      $scope.expediente.sintomas.splice(index,index);
   }
  }

  $scope.mostrarDiagnosticoDcmCie = false;




  
});