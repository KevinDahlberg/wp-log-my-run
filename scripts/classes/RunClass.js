/**
* @class Run Class
* @desc has the properties of the runs, as well as the different formats the app
* needs the properties to be in.
* @param date, time, distance, notes
*/

class Run {

  consctructor (run) {
    //these are the properties that come back from the DB
    this.id = run.id;
    this.date = run.date;
    this.time = run.time;
    this.distance = run.distance;

    //these are the permutaions of the data for consumption by the app.
    this.splitTime = splitTime(run.time);
    this.splitDistance = splitDistance(run.distance);
    this.dateRange = moment(run.date).weekday(0).format('MM/DD/YYYY') + ' to ' + moment(run.date).weekday(6).format('MM/DD/YYYY');
  }

  /**
  * @method splitDistance
  * @desc splits up distance from 0.00 to miles and partial miles
  * @param distance number
  * @return newDistance
  */
  splitDistance (distance) {
    let dividedArray = distance.split('.');
    let newDistance = {
      miles : dividedArray[0],
      partialMiles : dividedArray[1]
    };
    return newDistance;
  }

  /**
  * @method splitTime
  * @desc splits up the time number from 0:00:00 into hours, minutes, seconds
  * @param time number
  * @return {object} with hours, minutes, and seconds
  */
  splitTime (time){
    let dividedArray = time.split(':');
    let newTime = {
      hours : dividedArray[0],
      minutes : dividedArray[1],
      seconds : dividedArray[2]
    };
    return newTime;
  }
} //end class
