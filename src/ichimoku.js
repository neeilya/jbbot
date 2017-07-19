/**
 * Calculate base line position for the last candle based on previous candles
 * @param candles
 */
module.exports.calculateLine = function(candles) {
  const highestHigh = Math.max.apply(Math, candles.map(candle => candle.high));
  const lowestLow = Math.min.apply(Math, candles.map(candle => candle.low));

  return (highestHigh + lowestLow) / 2;
};