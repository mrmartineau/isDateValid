/**
 * @name isDateValid
 * @param {number | string} year
 * @param {number | string} month
 * @param {number | string} day
 * @returns {boolean}
 */

export var isDateValid = function(year, month, day) {
  var reducedDay = Number(day)
  var date = new Date(
    Date.parse(year + '-' + month + '-' + reducedDay)
  ).getDate()
  return !Number.isNaN(date) && date === reducedDay
}
