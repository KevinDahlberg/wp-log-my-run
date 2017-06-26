/**
 * ENTER RUN CONTROLLER
 * @desc controls the view for entering the run.
 * @param acceses the newRun that is created on load (which creates default values for the run)
 *  and alters it
 * @return the altered run gets submitted to the DB, and on submit the view goes back to the
 * HOME view.
 */

myApp.controller('EnterRunController', ['RunService',
  function(RunService) {
    let enterRun = this;

    enterRun.date = moment();
    enterRun.isOpen = false;

    enterRun.dropdownTime = RunService.dropdownTime;
    enterRun.dropdownMiles = RunService.dropdownMiles;

    enterRun.savedRun = new RunToEdit(RunService.savedRun);

    /**
     * @function addRun
     * @desc adds a run to the Database
     * @param run from enter view
     * @return response is the object that was sent.
     */
    enterRun.addRun = RunService.addRun;

    /**
    * @function runAddOrEdit
    * @desc evaluates whether a run is being edited or not
    * @param run {object} and calls on editingRun
    * @return calls editRun or addRun with run
    */
    enterRun.runAddOrEdit = RunService.runAddOrEdit
  }
]);
