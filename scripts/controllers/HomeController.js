/**
 * HOME Controller
 * @desc controls the Home view
 * @param UserService and UserAuthService
 * @return shows all of the completed runs
 */

myApp.controller('HomeController', ['RunService', 'DatabaseService',
  function(RunService, DatabaseService) {
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

    /**
     * @function getRun
     * @desc gets runs by a particular user from the DB
     * @param user_ID
     * @return all runs by that user
     */
    home.getRun = DatabaseService.getRun;

    home.getRun(WPsettings.user_ID);
  }
]);
