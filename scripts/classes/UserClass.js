/**
* @class USER
* @desc Has the information for the user.  Created on login
* @param user {object} that has a user_ID (and maybe the username later)
* @return userId, runArray, summary object, currentDateRange
*/

class User {
  constructor(user) {
    this.userId = 'user.user_ID';
    this.runArray = [];
    this.summary = {weeks : [], months : [], years : []};
    this.currentDateRange = moment().weekday(0).format('MM/DD/YYYY') + ' to ' + moment().weekday(6).format('MM/DD/YYYY');
  }

  /**
  * @method PopulateRuns
  * @desc method called after the user logs in to GET all of the runs
  * @param parameters that are sent in the GET include information from the user session.
  * @return an array of Run objects is created when the items come back from the DB
  */
  populateRuns (object) {
    this.runArray.length = 0;
    for (let item of object){
      let run = new Run (item);
      this.runArray.push(run);
    }
  }

  /**
  * @method populateSummary
  * @desc takes in the current date and only shows the information for that week
  * @param today's date
  * @return the runs for the week of that date.
  * function needs to get the information from the beginning of the week (the week number)
  * from the date.
  */
  populateSummary (array) {
    let weekArray = [];
    let yearArray = [];
    let monthArray = [];
    for (let run of array){
      if (run.date.year === moment().format('YYYY')){
        yearArray.push(run.distance);
        if (run.date.month === moment().format('MM')){
          monthArray.push(run.distance);
        }
      }
      if (run.date.dateRange === this.currentDateRange){
        weekArray.push(run.distance);
      }
    }
    this.summery.weekSum = this.arraySum(weekArray);
    this.summery.monthSum = this.arraySum(monthArray);
    this.summery.yearSum = this.arraySum(yearArray);
  }


  /**
  * @method array sum
  * @desc adds up the numbers of an array
  * @param an array of numbers
  * @return the sum of the numbers of the array
  */
  arraySum (array) {
    let sum = 0;
    for (let num of array){
      sum += parseFloat (num);
    }
    return sum;
  }

}
