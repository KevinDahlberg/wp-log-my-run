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
  enterRun.addRun = RunService.addRun;
  enterRun.newRun = RunService.newRun;

  /**
  * @function prepareRunToEdit
  * @desc prepares a run for editing (also used for adding a new run)
  * @param run object
  * @return a run with split time and distance
  */
  enterRun.prepareRunToEdit = RunService.prepareRunToEdit;
  enterRun.prepareRunToEdit(enterRun.newRun);


  // enterRun.savedRun = UserService.savedRun;
  // enterRun.addRun = DatabaseService.addRun;
  enterRun.dropdownTime = RunService.dropdownTime;
  enterRun.dropdownMiles = RunService.dropdownMiles;
  // enterRun.user = UserService.user;

}]);
