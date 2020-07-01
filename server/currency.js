const dollarConverter = require('./dollar-converter');
const randomNumber = require('./random-number');

let dollarValue = () => {
  let dollar = dollarConverter(randomNumber(10, 10000));
  return dollar;
};

module.exports = dollarValue;
