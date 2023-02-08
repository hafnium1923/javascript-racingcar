const rl = require("./readline");
const ErrorHandler = require("./ErrorHandler");
const InputView = {
  readCarNames(MESSAGES) {
    rl.question(MESSAGES, (carNames) => {
      ErrorHandler.isRightCarName(carNames);
      const cars = carNames.split(",");
      return cars;
    });
  },
};

module.exports = InputView;
