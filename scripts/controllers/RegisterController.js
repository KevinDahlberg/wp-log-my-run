myApp.controller('RegisterController', ['RunService', 'DatabaseService',
  function(RunService, DatabaseService) {
    let register = this;

    register.addUser = RunService.addUser;

  }
]);
