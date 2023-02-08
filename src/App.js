const InputView = require("./InputView");
const OutputView = require("./OutputView");
const MESSAGES = require("./Constant");
class App {
  play() {
    try {
      InputView.readCarNames(MESSAGES.startText);
    } catch (e) {
      OutputView.printErrorMessage(MESSAGES.nameError);
      InputView.readCarNames(MESSAGES.startText);
    }
  }
}

const app = new App();
app.play();
module.exports = App;
