const InputView = require("./InputView");
const OutputView = require("./OutputView");
const MESSAGES = require("./Constant");
class App {
  play() {
    this.start();
  }

  async start() {
    try {
      let cars = await InputView.readCarNames(MESSAGES.startText);
      console.log(cars);
      this.repeat();
    } catch (e) {
      OutputView.printErrorMessage(MESSAGES.nameError);
      this.start();
    }
  }

  async repeat() {
    try {
      let repeatNum = await InputView.readRepeatNumber(
        MESSAGES.repeatAnswerText
      );
      console.log(repeatNum);
    } catch (e) {
      OutputView.printErrorMessage(MESSAGES.rangeError);
      this.repeat();
    }
  }
}

const app = new App();
app.play();
module.exports = App;
