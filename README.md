# JBbot - trading signal bot based on [ichimoku cloud algorithm](https://en.wikipedia.org/wiki/Ichimoku_Kink%C5%8D_Hy%C5%8D).

JBbot is a tool for traders aimed to apply ichimoku cloud algorithm to cryptocurrencies trading and provide trading signals. It uses Poloniex api for retrieving real time data and sends message on signal event.

## Features
- Configurable ichimoku cloud algorithm (see config file)
- Congifurable tickers
- Configurable emails list

## Build instructions
- Clone the repository
- Run `npm install`
- Copy `config.example.js` to `config.js` 
- Configure variables in `config.js`
- Run node server against `index.js`


## License
This project is licensed under the [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.en.html)
