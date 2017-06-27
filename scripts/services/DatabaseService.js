myApp.factory('DatabaseService', ['$http', '$location', 'RunService',
  function($http, $location, RunService) {

    const DB = this;

    /**
     * @desc tells the app if you are adding or editing runs
     */
    DB.editingRun = RunService.editingRun

    /**
     * @desc objects for the application
     */
    DB.currentUser = RunService.currentUser

    /**
     * @function runAddOrEdit
     * @desc evaluates whether a run is being edited or not
     * @param run {object} and calls on editingRun
     * @return calls editRun or addRun with run
     */
    let runAddOrEdit = (run) => {
      if (DB.editingRun) {
        editRun(run);
      } else {
        addRun(run);
      }
    };

    /**
     * @function getRun
     * @desc gets runs by a particular user from the DB
     * @param user_ID
     * @return all runs by that user
     */
    let getRun = (user_ID) => {
      $http.get(WPsettings.root + 'wp/v2/posts?filter[author]=' + user_ID).then((response) => {
        DB.currentUser.populateRuns(response.data);
      });
    };

    /**
     * @function addRun
     * @desc adds a run to the Database
     * @param run from enter view
     * @return response is the object that was sent.
     */
    let addRun = (run) => {
      let runData = new RunToSend(run);
      let newRunReq = new PostRequest(runData.objectToSend);
      $http(newRunReq).then((response) => {
        getRun(WPsettings.user_ID);
        $location.path('/home');
      });
    };

    /**
     * @function editRun
     * @desc edits a run in the DB
     * @param
     * @return
     */
    let editRun = (run) => {
      let runData = new RunToSend(run);
      let updateRunReq = new PutRequest(runData.objectToSend, runData.id);
      $http(updateRunReq).then(response => {
        getRun(WPsettings.user_ID);
        $location.path('/home');
      });
    };

    /**
     * @function deleteRun
     * @desc deletes a run from the DB
     * @param run object
     * @return deletes post from DB
     */
    let deleteRun = (run) => {
      let deleteRunReq = new DeleteRequest(run.id);
      $http(deleteRunReq).then(response => {
        getRun(WPsettings.user_ID);
        $location.path('/home');
      });
    };

    return {

      //DB Calls
      getRun,
      deleteRun,

      //function
      runAddOrEdit

    };

  }
]);
