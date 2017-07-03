var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngSanitize'])

  .filter('unique', function() {
    return function(obj) {
      let dates = []
      angular.forEach(obj, function(value, key) {
        if (dates.includes(value.date.dateRange)) {} else {
          dates.push(value.date.dateRange);
        }
      });
      return dates;
    };
  })

  .config(['$routeProvider', '$locationProvider', '$mdDateLocaleProvider', '$mdThemingProvider',
    function($routeProvider, $locationProvider, $mdDateLocaleProvider, $mdThemingProvider) {

      $locationProvider.hashPrefix('');
      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('grey')
        .dark();

      $routeProvider
        .when('/home', {
          templateUrl: localized.partials + 'home.html',
          controller: 'HomeController as home'
        })
        .when('/enter-run', {
          templateUrl: localized.partials + 'enter_run.html',
          controller: 'EnterRunController as enterRun'
        })
        .when('/edit-run', {
          templateUrl: localized.partials + 'enter_run.html',
          controller: 'EnterRunController as enterRun'
        })
        .when('/view-run', {
          templateUrl: localized.partials + 'view_run.html',
          controller: 'ViewRunController as viewRun'
        })
        .when('/register', {
          templateUrl: localized.url + 'register.php',
          controller: 'RegisterController as register'
        })
        .otherwise({
          redirectTo: '/home'
        });
    }
  ]);
