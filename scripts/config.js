var myApp = angular.module('myApp', ['ngRoute', 'ngSanitize'])
.config(function($routeProvider, $locationProvider) {

    $routeProvider
    .when('/', {
        templateUrl: localized.partials + 'main.html',
        controller: 'Main'
    })
    .when('/:slug', {
        templateUrl: localized.partials + 'content.html',
        controller: 'Content'
    })
    .otherwise({
        redirectTo: '/'
    });
})
