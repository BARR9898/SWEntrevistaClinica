
// include ngRoute for all our routing needs
var app = angular.module('app', ['ngRoute','ngMaterial']);

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

    });