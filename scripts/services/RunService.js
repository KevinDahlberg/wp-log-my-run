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

    let newRun = new Run(DEFAULT_RUN);

    /**
     * @function getRun
     * @desc gets runs by a particular user from the DB
     * @param user_ID
     * @return all runs by that user
     */
    let getRun = (user_ID) => {
      $http.get(WPsettings.root + 'wp/v2/posts?filter[author]=' + user_ID).then((response) => {
        console.log('in the get route is ', response);
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
        console.log('post was successful, ', response);
      });
    };

    /**
    * @function editRun
    * @desc edits a run in the DB
    * @param
    * @return
    */

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

    /**
     * @function enter view
     * @desc changes the view to the enter_run view
     */
    let enterView = () => {
      $location.path('/enter-run');
    };

    return {
      dropdownTime,
      dropdownMiles,
      newRun,
      addRun,
      enterView,
    };


  }
]);
