/**
* ENTER RUN CONTROLLER
* @desc controls the view for entering the run.
* @param acceses the newRun that is created on load (which creates default values for the run)
*  and alters it
* @return the altered run gets submitted to the DB, and on submit the view goes back to the
* HOME view.
*/

myApp.controller('EnterRunController', ['RunService',
function(RunService){
  let enterRun = this;

  enterRun.date = moment();
  enterRun.isOpen = false;

  // enterRun.savedRun = UserService.savedRun;
  // enterRun.addRun = DatabaseService.addRun;
  // enterRun.dropdownTime = UserService.dropdownTime;
  // enterRun.dropdownMiles = UserService.dropdownMiles;
  // enterRun.user = UserService.user;

}]);
