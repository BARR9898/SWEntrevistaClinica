app.controller('expedienteCreacionController', function($scope) {
   $scope.expediente = {
      nombre: "",
      apellido_paterno: "",
      apellido_materno: "",
      edad: "",
      ocupacion: "",
      sexo: "",
      direccion: ""

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

});