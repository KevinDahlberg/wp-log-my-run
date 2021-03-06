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
  id : '',
  date : moment().format('MM/DD/YYYY HH:mm'),
  distance : '0.00',
  time : '0:00:00',
  notes : '',
};
