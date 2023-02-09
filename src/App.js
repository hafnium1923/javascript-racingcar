const InputView = require("./InputView");
const OutputView = require("./OutputView");
const MESSAGES = require("./Constant");
class App {
  play() {
    this.start();
  }

  async start() {
    try {
      let carNames = await InputView.readCarNames(MESSAGES);
      console.log(carNames);
    } catch (e) {
      OutputView.printErrorMessage(MESSAGES.nameError);
      this.start();
    }
  }
}

const app = new App();
app.play();
module.exports = App;
