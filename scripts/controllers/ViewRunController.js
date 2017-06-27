myApp.controller('ViewRunController', ['RunService',
  function(RunService) {
    let viewRun = this;

    viewRun.savedRun = RunService.savedRun;

    /**
     * @function runEdit
     * @desc changes view to edit run screen
     * @param saved run
     * @return change to screen where run is being edited
     */
    viewRun.runEdit = RunService.runEdit;

    /**
     * @function deleteRun
     * @desc deletes a run from the DB
     * @param run object
     * @return deletes post from DB
     */
    viewRun.deleteRun = RunService.deleteRun;
  }
]);
