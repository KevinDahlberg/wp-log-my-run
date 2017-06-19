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
    let newRun = new Run (DEFAULT_RUN);


    /**
     * @function enter view
     * @desc changes the view to the enter_run view
     */
    let enterView = () => {
      $location.path('/enter-run');
    };
    
      // meta : [
      //   {'key' : 'date', 'value' : '06/07/2017'},
      //   {'key' : 'distance', 'value' : '1.00'},
      //   {'key' : 'time', 'value' : '00:07:00'},
      //   {'key' : 'notes', 'value' : ''}
      // ]
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


    let addRun = (runn) => {
      let runToAdd = new Run(runn);
      console.log('run that being sent ', runn);
      console.log('runToAdd ', runToAdd);
      let newRunReq = {
        method: 'POST',
        url: WPsettings.root + 'wp/v2/posts/',
        headers: {
          'X-WP-Nonce': WPsettings.nonce
        },
        data: runToAdd
      }

      $http(newRunReq).then((response) => {
        console.log('post was successful, ', response);
      });
    };

    return {
      dropdownTime,
      dropdownMiles,
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
