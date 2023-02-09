const rl = require("./readline");
const ErrorHandler = require("./ErrorHandler");
const InputView = {
  readCarNames(MESSAGES) {
    return new Promise(function (resolve, reject) {
      rl.question(MESSAGES.startText, (carNames) => {
        const cars = carNames.split(",");
        for (let i = 0; i < cars.length; i++) {
          if (cars[i].length < 1 || cars[i].length > 5) reject(new Error());
        }
        resolve(cars);
      });
    });
  },
  readRepeatNumber(MESSAGES) {
    rl.question(MESSAGES.repeatAnswerText, (repeatNum) => {
      try {
        ErrorHandler.isRightRepeatNum(repeatNum, MESSAGES.rangeError); //오류
        return Number(repeatNum);
      } catch (e) {
        console.log(e);
        this.readRepeatNumber(MESSAGES);
      }
    });
  },
};

module.exports = InputView;
