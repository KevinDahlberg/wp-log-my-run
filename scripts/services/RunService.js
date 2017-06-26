myApp.factory('RunService', ['$http', '$location',
  function($http, $location) {
    let RunService = this;

    console.log('The REST root is ', WPsettings.root);

    console.log('The REST nonce is ', WPsettings.nonce);

    console.log('The REST ID is ', WPsettings.current_ID);

    console.log('Session Token is ', WPsettings.session_token);

    console.log('User ID is ', WPsettings.user_ID);

    /**
     * @desc creates objects that are used to populate the dropdowns in the add
     * and edit run views
     */
    let dropdownTime = new Time(TIME);
    let dropdownMiles = new Distance(DISTANCE);

    let currentUser = new User(WPsettings);
    let savedRun = {};

    let editingRun = false

    /**
    * @function runAddOrEdit
    * @desc evaluates whether a run is being edited or not
    * @param run {object} and calls on editingRun
    * @return calls editRun or addRun with run
    */
    let runAddOrEdit = (run) => {
      if (editingRun) {
        editRun(run);
      } else {
        addRun(run);
      }
    };

    /**
     * @function saveRun
     * @desc copys the run to edit to savedRun
     * @param run
     * @return saved run is the run to edit, changes the view to view-run
     */
    let saveRun = (run) => {
      angular.copy(run, savedRun);
      $location.path('/view-run');
    }

    /**
     * @function runEdit
     * @desc changes view to edit run screen
     * @param saved run
     * @return change to screen where run is being edited
     */
    let runEdit = () => {
      editingRun = true;
      $location.path('/edit-run');
    };

    /**
     * @function runCreate
     * @desc sets up enter_run view for creating a new run
     * @param savedRun
     * @return transfers view to enter_run, copies default run to savedRun
     */
    let runCreate = () => {
      editingRun = false;
      angular.copy(DEFAULT_RUN, savedRun);
      $location.path('/enter-run');
    };

    /**
     * @function getRun
     * @desc gets runs by a particular user from the DB
     * @param user_ID
     * @return all runs by that user
     */
    let getRun = (user_ID) => {
      $http.get(WPsettings.root + 'wp/v2/posts?filter[author]=' + user_ID).then((response) => {
        currentUser.populateRuns(response.data);
      });
    };

    getRun(WPsettings.user_ID);

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
       let runData = new RunToSend (run);
       let updateRunReq = new PutRequest(runData.objectToSend, runData.id);
       console.log('runData in put request is ', runData);
       $http(updateRunReq).then(response => {
         getRun(WPsettings.user_ID);
         $location.path('/home');
       });
     } ;

    /**
     * @function deleteRun
     * @desc deletes a run from the DB
     * @param
     * @return
     */

    /**
     * @function addUser
     * @desc adds user to the DB
     * @param
     * @return
     */

    /**
     * @function editUser
     * @desc edits user in the DB
     * @param
     * @return
     */

    /**
     * @function deleteUser
     * @desc deletes user from the DB
     * @param
     * @return
     */

    return {
      //functions
      runEdit,
      runCreate,
      runAddOrEdit,

      dropdownTime,
      dropdownMiles,

      addRun,

      currentUser,
      saveRun,
      savedRun
    };


  }
]);
