/**
 * ENTER RUN CONTROLLER
 * @desc controls the view for entering the run.
 * @param acceses the newRun that is created on load (which creates default values for the run)
 *  and alters it
 * @return the altered run gets submitted to the DB, and on submit the view goes back to the
 * HOME view.
 */

myApp.controller('EnterRunController', ['RunService', 'DatabaseService',
  function(RunService, DatabaseService) {
    let enterRun = this;

    enterRun.date = moment();
    enterRun.isOpen = false;

    enterRun.dropdownTime = RunService.dropdownTime;
    enterRun.dropdownMiles = RunService.dropdownMiles;

    enterRun.savedRun = new RunToEdit(RunService.savedRun);

    /**
    * @function runAddOrEdit
    * @desc evaluates whether a run is being edited or not
    * @param run {object} and calls on editingRun
    * @return calls editRun or addRun with run
    */
    enterRun.runAddOrEdit = DatabaseService.runAddOrEdit
  }
]);
