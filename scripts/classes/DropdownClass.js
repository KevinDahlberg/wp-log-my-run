/**
* @classdesc DropdownClass
* @summary creates 2 classes that provide the information for the dropdown menus
*/

/**
* @class Time
* @desc creates the time items that are used in the dropdown menus in the Edit and Enter views
* @param a time object that contains information for the number of hours, minutes, and seconds
* @return arrays that have 0 through the number of hours/minutes/seconds
*/
class Time {

  constructor (time) {
    this.hours = [];
    this.minutes = [];
    this.seconds = [];
    this.hoursPopulate(time.hours);
    this.minutesPopulate(time.minutes);
    this.secondsPopulate(time.seconds);
  }

  hoursPopulate (hour) {
    for (let i = 0; i <= hour; i++){
      this.hours.push(i);
    }
  }

  minutesPopulate (minute) {
    for (let i = 0; i <= minute; i++){
      let item = i.toString();
      if  (item.length === 1){
        this.minutes.push("0" + item)
      } else {
        this.minutes.push(item);
      }
    }
  }

  secondsPopulate (second) {
    for (let i=0; i <= second; i++){
      let item = i.toString();
      if  (item.length === 1){
        this.seconds.push("0" + item)
      } else {
        this.seconds.push(item);
      }
    }
  }
}

/**
* @class Distance
* @desc creates the distance items that are used in the dropdown menus in the Edit and Enter views
* @param a distance object that contains information for the number of miles, information for partial miles
* @return arrays that include miles from 0 to distnace.miles and the items for partial miles.
*/

class Distance {

  constructor (distance) {
    this.miles = [];
    this.partialMiles = [];
    this.milesPopulate(distance.miles);
    this.partialMilesPopulate(distance.partialMiles);
  }

  /**
  * @method milesPopulate
  * @desc populates the miles arrays
  * @param a number of miles
  * @return populates an array with 0 through the miles number
  */
  milesPopulate (mi) {
    for (let i = 0; i <= mi; i++){
      this.miles.push(i);
    }
  }

  /**
  * @method partialMilesPopulate
  * @desc populates the partial miles array
  * @param an array that includes the partial miles
  * @return items are pushed into the partialMiles array
  */
  partialMilesPopulate (partial) {
    for (let i = 0; i <= partial.length-1; i++){
      this.partialMiles.push(partial[i]);
    }
  }
}

//for loops to populate number arrays
