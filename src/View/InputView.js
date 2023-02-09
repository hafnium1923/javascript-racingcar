const rl = require("../readline");
const InputView = {
  readCarNames(messages) {
    return new Promise(function (resolve, reject) {
      rl.question(messages, (carNames) => {
        const cars = carNames.split(",");
        for (let i = 0; i < cars.length; i++) {
          if (cars[i].length < 1 || cars[i].length > 5) reject(new Error());
        }
        resolve(cars);
      });
    });
  },
  readRepeatNumber(messages) {
    return new Promise(function (resolve, reject) {
      rl.question(messages, (repeatNumber) => {
        let num = Number(repeatNumber);
        if (repeatNumber.includes(".") || !Number.isInteger(num) || num < 1)
          reject(new Error());
        resolve(repeatNumber);
      });
    });
  },
};

module.exports = InputView;
