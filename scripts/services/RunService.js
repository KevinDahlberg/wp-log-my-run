myApp.factory('RunService', ['$http', '$location',
  function($http, $location) {
    let RunService = this;

    console.log('The REST root is ', WPsettings.root);

    console.log('The REST nonce is ', WPsettings.nonce);

    console.log('The REST ID is ', WPsettings.current_ID);

    console.log('Session Token is ', WPsettings.session_token);

    /**
     * @function enter view
     * @desc changes the view to the enter_run view
     */
    let enterView = () => {
      $location.path('/enter-run');
    };

    let newRun = {
      title : 'test'
    };
    /**
     * @desc variable that contains the headers for the POST to the WP backend
     * @param url, headers, and data
     */
    let newRunReq = {
      method: 'POST',
      url: WPsettings.root + 'wp/v2/posts/',
      headers: {
        'X-WP-Nonce': WPsettings.nonce
      },
      data: newRun
    };

    let data = {title : 'test'};

    let addRun = () => {
      $http(newRunReq).then((response) => {
        console.log('post was successful');
        });
    };
    return {
      addRun,
      enterView
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
