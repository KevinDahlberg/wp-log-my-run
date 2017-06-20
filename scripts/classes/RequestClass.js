/**
* @desc contains all of the classes for API requests
*/


/**
* @class PostRequest
* @desc has the information for a post request
*/
class PostRequest {
  constructor (dataToSend){
    this.method = 'POST';
    this.url = WPsettings.root + 'wp/v2/posts/';
    this.headers = {
      'X-WP-Nonce': WPsettings.nonce
    };
    this.data = dataToSend;
  }
}
