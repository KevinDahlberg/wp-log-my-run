/**
* LOGIN CONTROLLER
* @desc controls both the Login and Register Views
* @param $http, $location, UserService, UserAuthService
* @return handles logging in and registering a new user
*/

myApp.controller('LoginController', ['$http', '$location', 'RunService',
 function($http, $location, RunService) {
  let login = this;

  login.loginUser = RunService.loginUser;

    // login.login = UserAuthService.login;
    // login.registerUser = UserAuthService.registerUser;
}]);
