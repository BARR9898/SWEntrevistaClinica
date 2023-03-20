app.controller("loginController",function($scope,$http){

   $scope.user = {
    email: "",
    password: "",
    name: ""
   }

   $scope.guardarUsuario = () => {
        let dataIsValid = validarData();
        if (!dataIsValid) return
        guardarDataEnServer()
        

   }

   function validarData(){

    let type_of_email = typeof $scope.user.email
    let type_of_password = typeof $scope.user.password

    if ( (  type_of_email != "string" ) && ( type_of_password != "string" ) ) return false;
    return true;

   }
   
   function guardarDataEnServer(){

    let data = {
        email:  $scope.user.email,
        password: $scope.user.password,
        name: $scope.user.name,
        description: "",
        rol: "Administrador"
    }
  //Test  
    $http.post("http://localhost:3002/api/auth/register",data)
    .then(res => {
        console.log('RESPONSE' , res);
    })
   }
   
   
    $http.get("https://rickandmortyapi.com/api/character/237")
        .then( res => {
            console.log('RESPUESTA DEL SERVER' , res);
        })
})