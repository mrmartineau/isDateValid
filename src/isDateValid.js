/**
 * @name isDateValid
 * @param {number | string} year
 * @param {number | string} month
 * @param {number | string} day
 * @returns {boolean}
 */

export const isDateValid = function(year, month, day) {
  const reducedDay = Number(day)
  const date = new Date(Date.parse(`${year}-${month}-${reducedDay}`)).getDate()
  return !Number.isNaN(date) && date === reducedDay
}
