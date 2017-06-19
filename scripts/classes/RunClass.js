console.log('run class sourced');
/**
 * @class Run Class
 * @desc has the properties of the runs, as well as the different formats the app
 * needs the properties to be in.
 * @param date, time, distance, notes
 */

class Run {
  constructor(run) {
    console.log('this is the run passing through the constructor, ', run);
    //these are the properties that come back from the DB
    this.id = run.id;
    this.date = run.date;
    this.time = run.time;
    this.distance = run.distance;
    this.dateRange = moment(run.date).weekday(0).format('MM/DD/YYYY') + ' to ' + moment(run.date).weekday(6).format('MM/DD/YYYY');
  }

  /**
   * @method splitTime
   * @desc splits up the time number from 0:00:00 into hours, minutes, seconds
   * @param time number
   * @return {object} with hours, minutes, and seconds
   */
  splitTime(time) {
    let dividedArray = time.split(':');
    let newTime = {
      hours: dividedArray[0],
      minutes: dividedArray[1],
      seconds: dividedArray[2]
    };
    this.time = newTime;
  }

  /**
   * @method splitDistance
   * @desc splits up distance from 0.00 to miles and partial miles
   * @param distance number
   * @return newDistance
   */
  splitDistance(distance) {
    let dividedArray = distance.split('.');
    let newDistance = {
      miles: dividedArray[0],
      partialMiles: '.' + dividedArray[1]
    };
    this.distance = newDistance;
  }

  /**
  * @method Combine Time
  * @desc combines time into something that is readable on the DOM
  * @param time object that contains hours, minutes, and seconds
  * @return an item that reads hours:minutes:seconds (0:00:00)
  */
  combineTime (time) {
    time = time.hours + ':' + time.minutes + ':' + time.seconds;
    this.time = time;
  }

  /**
  * @method Combine distance
  * @desc combines the different parts of the distance into something readable on the DOM
  * @param distance object that contains distance.miles and distance.partial miles.
  * @return item that reads miles.partialMiles (0.00)
  */
  combineDistance (distance) {
    distance = distance.miles + distance.partialMiles;
    this.distance = distance;
  }

} //end class
