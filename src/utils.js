/**
 * Sort candles by date parameter DESC
 * @param a
 * @param b
 * @returns {number}
 */
module.exports.sortCandlesByDate = function(a, b) {
  if (a.date < b.date) {
    return 1;
  }

  if (a.date > b.date) {
    return -1;
  }

  return 0;
};

/**
 * Get timestamp in seconds
 * @returns {number}
 */
module.exports.getTimestampInSeconds = function() {
  return Math.floor(new Date().getTime() / 1000);
};

/**
 * Compare two numbers function
 * @param a
 * @param b
 * @returns {number}
 */
module.exports.compareTwoNumbers = function(a, b) {
  if (a > b) {
    return 1;
  }

  if (a < b) {
    return -1;
  }

  return 0;
};