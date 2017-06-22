/**
* HOME Controller
* @desc controls the Home view
* @param UserService and UserAuthService
* @return shows all of the completed runs
*/

myApp.controller('HomeController', ['RunService',
function(RunService){
  let home = this;

  home.enterView = RunService.enterView;
  home.user = RunService.currentUser;

  console.log(home.user);
  //
  // showRun.saveRun = UserService.saveRun;
  // showRun.enterView = UserService.enterView;
  // showRun.user = UserService.user;
  // showRun.logout = UserAuthService.logout;
}]);
