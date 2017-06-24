/**
 * @class USER
 * @desc Has the information for the user.  Created on login
 * @param user {object} that has a user_ID (and maybe the username later)
 * @return userId, runArray, summary object, currentDateRange
 */

class User {
  constructor(user) {
    this.userId = user.user_ID;
    this.runArray = [];
    this.summary = {
      week: '',
      month: '',
      year: ''
    };
    this.currentDateRange = {
      beginning: moment().weekday(0).format('MM/DD/YYYY'),
      end: moment().weekday(6).format('MM/DD/YYYY')
    };
  }

  /**
   * @method PopulateRuns
   * @desc method called after the user logs in to GET all of the runs
   * @param parameters that are sent in the GET include information from the user session.
   * @return an array of Run objects is created when the items come back from the DB
   */
  populateRuns(array) {
    this.runArray.length = 0;
    for (let item of array) {
      item.meta.id = item.id
      let run = new Run(item.meta);
      this.runArray.push(run);
    }
    console.log(this.runArray);
  }

  /**
   * @method populateSummary
   * @desc populates the summary object by calling the SUM methods
   * @param runArray
   * @return summary object is populated
   */
  populateSummary(runArray) {
    yearSum(runArray);
    monthSum(runArray);
    weekSum(runArray);
  }
  /**
   * @method yearSum
   * @desc adds up the mileage for the year
   * @param all of the runs, compared against the beginning of the week of the current date range
   * @return sum for the year
   */
  yearSum(runArray) {
    let yearDistance = []
    runArray.forEach(run => {
      if (moment(run.currentDateRange.beginning).format('YYYY') === moment(this.currentDateRange.beginning).format('YYYY')) {
        yearDistance.push(run.distance);
      }
    });
    this.summary.year = arraySum(yearDistance);
  }

  /**
   * @method monthSum
   * @desc adds up the mileage of the current month
   * @param array of runs
   * @return array with {object} - {key} month/year - MM/YYYY {value} number
   * connected to year
   */
  monthSum(runArray) {
    let monthDistance = []
    runArray.forEach(run => {
      if (moment(run.currentDateRange.beginning).format('MM/YYYY') === moment(this.currentDateRange.beginning).format('MM/YYYY')) {
        monthDistance.push(run.distance);
      }
    });
    this.summary.month = arraySum(monthDistance);
  }

  /**
   * @method weekSum
   * @desc adds up the mileage of the current week
   * @param array of runs
   * @return sum of the current week
   */
  weekSum(runArray) {
    let monthDistance = []
    runArray.forEach(run => {
      if (moment(run.currentDateRange.beginning).format('MM/DD/YYYY') === moment(this.currentDateRange.beginning).format('MM/DD/YYYY')) {
        monthDistance.push(run.distance);
      }
    });
    this.summary.week = arraySum(weekDistance);
  }

  /**
   * @method array sum
   * @desc adds up the numbers of an array
   * @param an array of numbers
   * @return the sum of the numbers of the array
   */
  arraySum(array) {
    let sum = 0;
    for (let num of array) {
      sum += parseFloat(num);
    }
    return sum;
  }

}
