const Poloniex = require('poloniex-api-node');
const moment = require('moment');
const config = require('./config');
const mailer = require('./src/mailer');
const logger = require('./src/logger');
const { sortCandlesByDate, getTimestampInSeconds, compareTwoNumbers } = require('./src/utils');
const { calculateLine } = require('./src/ichimoku');
const poloniex = new Poloniex;

/**
 * Actual code
 */

setInterval(() => {
  config.tickers.forEach(ticker => {
    iterate(ticker.toUpperCase());
  });
}, 5000);

const signals = {};

function iterate(ticker) {
  poloniex
    .returnChartData(ticker, config.candleIntervalInSeconds, getTimestampInSeconds() - (config.warmupTimeInMinutes * 60 * 2), getTimestampInSeconds())
    .then(response => {
      logger.log('info', `Poloniex API request made for ${ ticker.toUpperCase() }`, {
        date: moment().format('MMMM Do YYYY, HH:mm:ss')
      });
      // sort chart data, latest come first
      response.sort(sortCandlesByDate);

      // calculate ichimoku points
      const ichimokus = [];
      for (let i = 0; i < response.length / 2; ++i) {
        const conversionLine = calculateLine(response.slice(i, i + config.conversionLinePeriods));
        const baseLine = calculateLine(response.slice(i, i + config.baseLinePeriods));

        ichimokus.push({ index: i, baseLine, conversionLine });
      }

      // define entry point
      let state = null;
      for (let i = 0; i < 5; ++i) {
        const conversionLine = ichimokus[i].conversionLine;
        const baseLine = ichimokus[i].baseLine;
        const currentState = compareTwoNumbers(conversionLine, baseLine);

        if (state === null) {
          state = compareTwoNumbers(conversionLine, baseLine);
          continue;
        }

        if (currentState !== state && currentState !== 0) {
          if (signals[ticker].last && signals[ticker].last.state === currentState) {
            break;
          }

          // notify
          signals[ticker].last = { state: currentState };

          mailer.sendMail({
            from: 'neeilya@mail.ru',
            to: 'haxisann@gmail.com',
            subject: 'Jbbot cross point notification',
            text: `${ ticker.toUpperCase() }, cross point just happened!`
          });

          logger.log('info', 'Cross point', {
            ticker: ticker.toUpperCase(),
            date: moment().format('MMMM Do YYYY, HH:mm:ss'),
            conversionLine,
            baseLine
          });
          break;
        }
      }
    }).catch(err => {
      console.log(err.message);
    });
}