myApp.factory('RunService', ['$http', '$location',
      function($http, $location) {
        let RunService = this;

        let req = {
          method: 'POST',
          url: WPsettings.root + 'wp/v2/posts/' + WPsettings.current_ID,
          headers: {
            'X-WP-Nonce': WPsettings.nonce
          },
          data: {
            test: 'test'
          }
        };

        let addRun = () => {
          $http.post(req).then((response) => {
            console.log('post was successful');
          });
        };
        return {
          req,
          addRun,
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
