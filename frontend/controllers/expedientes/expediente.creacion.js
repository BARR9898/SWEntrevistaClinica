app.controller('expedienteCreacionController', function($scope) {
   $scope.expediente = {
      nombre: "",
      apellido_paterno: "",
      apellido_materno: ""
  }

  $scope.guardar = function (){
      console.log($scope.expediente);
      alert("HOLA")
  }

});