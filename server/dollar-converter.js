const dollarConverter = (randomNumber) => {
  let dollarValue = '$' + new Intl.NumberFormat().format(randomNumber);
  return dollarValue;
};

module.exports = dollarConverter;
