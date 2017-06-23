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

  /**
   * @function saveRun
   * @desc copys the run to edit to savedRun
   * @param run
   * @return saved run is the run to edit
   */
  home.saveRun = RunService.saveRun;
  console.log(home.user);
  //
  // showRun.saveRun = UserService.saveRun;
  // showRun.enterView = UserService.enterView;
  // showRun.user = UserService.user;
  // showRun.logout = UserAuthService.logout;
}]);
