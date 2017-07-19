const logger = require('winston');

logger.configure({
  transports: [
    new (logger.transports.File)({ filename: 'logs.txt' })
  ]
});

module.exports = logger;