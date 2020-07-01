const randomNumber = (min, max) => {
  let randomNumber = Math.floor(Math.random() * (1 + max - min) + min);
  return randomNumber;
};

module.exports = randomNumber;
