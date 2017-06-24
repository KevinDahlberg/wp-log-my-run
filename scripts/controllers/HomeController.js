/**
 * HOME Controller
 * @desc controls the Home view
 * @param UserService and UserAuthService
 * @return shows all of the completed runs
 */

myApp.controller('HomeController', ['RunService',
  function(RunService) {
    let home = this;

    home.user = RunService.currentUser;

    /**
     * @function saveRun
     * @desc copys the run to edit to savedRun
     * @param run
     * @return saved run is the run to edit, changes the view to view-run
     */
    home.saveRun = RunService.saveRun;

    /**
     * @function runCreate
     * @desc sets up enter_run view for creating a new run
     * @param savedRun
     * @return transfers view to enter_run, copies default run to savedRun
     */
    home.runCreate = RunService.runCreate;
  }
]);
