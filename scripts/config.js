var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngSanitize'])
.config(function($routeProvider, $locationProvider) {

    $routeProvider
    .when('/', {
        templateUrl: localized.partials + 'run_history.html',
        controller: 'LoginController'
    })
    .when('/login', {
        templateUrl: localized.partials + 'login.html',
        controller: 'LoginController'
    })
    .otherwise({
        redirectTo: '/login'
    });
});
