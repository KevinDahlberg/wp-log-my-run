myApp.factory('RunService', ['$location', '$http',
  function($location, $http) {
    let RunService = this;

    /**
     * @desc creates objects that are used to populate the dropdowns in the add
     * and edit run views
     */
    let dropdownTime = new Time(TIME);
    let dropdownMiles = new Distance(DISTANCE);

    /**
    * @desc objects for the application
    */
    let currentUser = new User(WPsettings);
    let savedRun = {};

    /**
    * @desc tells the app if you are adding or editing runs
    */
    let editingRun = false

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
     * @function addUser
     * @desc adds user to the DB
     * @param
     * @return
     */

    let addUser = (user) => {
      let newUser = new NewUser (user);
      let newUserReq = new CreateUserRequest (newUser);
      $http(newUserReq).then((response) => {
        console.log(response);
        $location.path('/login');
      });
    };

    /**
     * @function editUser
     * @desc edits user in the DB
     * @param
     * @return
     */
    let editUser = (user) => {
      let editedUser = new UpdateUser (user);
      let editUserReq = new UpdateUserRequest (editedUser);
      $http(editUserReq).then(response => {
        $location.path('/login');
      });
    };

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
      saveRun,
      addUser,

      //Variables
      dropdownTime,
      dropdownMiles,
      currentUser,
      savedRun,
      editingRun
    };

  }
]);
