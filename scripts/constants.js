/**
* @summary Constants for the app.
*/

const DISTANCE = {
  miles : 20,
  partialMiles : ['.00', '.25', '.50', '.75']
};

const TIME = {
  hours : 10,
  minutes : 59,
  seconds : 59
};

const DEFAULT_RUN = {
  date : moment().format('MM/DD/YYYY'),
  distance : '',
  time : '',
  notes : '',
  parsedDistance : {miles : '0', partialMiles : '.00'},
  parsedTime : {hours : '0', minutes : '00', seconds : '00'}
};
