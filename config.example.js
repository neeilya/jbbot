module.exports = {
  // iteration interval
  intervalInMilliseconds: 5 * 60 /*interval in seconds*/ * 1000,

  /**
   * Ichimoku settings
   */
  candleIntervalInSeconds: 5 * 60, // interval in seconds
  warmupTimeInMinutes: 305, // warm up time in minutes (extra five minutes for making sure we have at least 60 candles)

  conversionLinePeriods: 20, // conversion line in candles
  baseLinePeriods: 60, // base line in candles

  tickers: [
    "btc_ltc",
    "btc_xrp",
    "btc_dash",
    "btc_bts",
    "btc_etc",
    "btc_strat",
    "btc_str",
    "btc_eth"
  ],

  // mail settings
  mail_user: 'username@example.com',
  mail_password: 'password'
};
