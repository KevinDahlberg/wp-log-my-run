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
     * @function prepareRunToEdit
     * @desc prepares a run for editing (also used for adding a new run)
     * @param run object
     * @return a run with split time and distance
     */
    let prepareRunToEdit = (run) => {
      run.splitTime(run.time);
      run.splitDistance(run.distance);
      console.log(run);
    };

    let prepareRunToSend = (run) => {
      console.log('run in prepare run to send ', run);
      run.combineTime(run.time);
      run.combineDistance(run.distance);
      return run;
    };


    /**
     * @function enter view
     * @desc changes the view to the enter_run view
     */
    let enterView = () => {
      $location.path('/enter-run');
    };

    /**
     * @desc variable that contains the headers for the POST to the WP backend
     * @param url, headers, and data
     */
    // let newRunReq = {
    //   method: 'POST',
    //   url: WPsettings.root + 'wp/v2/posts/',
    //   headers: {
    //     'X-WP-Nonce': WPsettings.nonce
    //   },
    //   data: newRun
    // };


    let addRun = (run) => {
      console.log('run that being sent ', run);
      prepareRunToSend(run);
      let sampleRun = {
        content: 'Not Another Hello World',
        meta: {
          time: '0:00:00',
          distance: '0.00',
          date: '07/20/2017',
          notes: ''
        }
      };
      let newRunReq = {
        method: 'POST',
        url: WPsettings.root + 'wp/v2/posts/',
        headers: {
          'X-WP-Nonce': WPsettings.nonce
        },
        data: sampleRun,
      }

      $http(newRunReq).then((response) => {
        console.log('post was successful, ', response);
      });
    };

    return {
      dropdownTime,
      dropdownMiles,
      newRun,
      prepareRunToEdit,
      addRun,
      enterView,
    };


  }
]);




// function runAjax(newTitle) {
//   $.ajax({
//     url: WPsettings.root + 'wp/v2/posts/' + WPsettings.current_ID,
//     method: 'POST',
//     beforeSend: function(xhr) {
//       xhr.setRequestHeader('X-WP-Nonce', WPsettings.nonce);
//     },
//     data: {
//       'title': newTitle
//     }
//   })
