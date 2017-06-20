myApp.factory('RunService', ['$http', '$location',
  function($http, $location) {
    let RunService = this;

    console.log('The REST root is ', WPsettings.root);

    console.log('The REST nonce is ', WPsettings.nonce);

    console.log('The REST ID is ', WPsettings.current_ID);

    console.log('Session Token is ', WPsettings.session_token);

    /**
     * @desc creates objects that are used to populate the dropdowns in the add
     * and edit run views
     */
    let dropdownTime = new Time(TIME);
    let dropdownMiles = new Distance(DISTANCE);
    let newRun = new Run(DEFAULT_RUN);
    console.log('newRun ', newRun);

    /**
     * @function enter view
     * @desc changes the view to the enter_run view
     */
    let enterView = () => {
      $location.path('/enter-run');
    };


    let addRun = (run) => {
      let runData = new RunToSend (run);
      let newRunReq = new PostRequest (runData.objectToSend);

      $http(newRunReq).then((response) => {
        console.log('post was successful, ', response);
      });
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
