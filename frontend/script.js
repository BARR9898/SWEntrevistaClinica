
// include ngRoute for all our routing needs
var app = angular.module('app', ['ngRoute','ngMaterial','ngMessages']);

app.controller('homeController', function($scope,$mdSidenav) {

    //SIDENAV
    //Comportamiento del sidenav
    $scope.toggleSidenav = buildToggler('closeEventsDisabled');

    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
        }
    }

    $scope.opciones = [
        inicio = {description: "Inicio" , icon: "home" , link:"#!/inicio"} ,
        expedientes = {description: "Expediente" , icon: "description", link:"#!/expedientes" } ,
        pacientes = {description: "Pacientes" , icon: "person", link:"#!/pacientes" },
        
    ]


});

// configure our routes
  app.config(function($routeProvider) {
  $routeProvider

            // route for the home page
            .when('/inicio', {
                templateUrl : 'controllers/home/home.view.html',
                controller  : 'homeController'
            })

            // route for the pacients page
            .when('/pacientes', {
                templateUrl : 'controllers/pacientes/pacientes.view.html',
                controller  : 'pacientesController'
            })

            // route for the expedients page
            .when('/expedientes', {
                templateUrl : 'controllers/expedientes/expedientes.view.html',
                controller  : 'expedientesController'
            })


            // route to create an expedient
            .when('/crear-expediente', {
                templateUrl : 'controllers/expedientes/expediente.creacion.view.html',
                controller  : 'expedienteCreacionController'
            })

            .otherwise({
                redirectTo: '/'
            })

    });