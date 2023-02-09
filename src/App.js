const InputView = require("./View/InputView");
const OutputView = require("./View/OutputView");
const MESSAGES = require("./Constant");
const GameInformation = require("./GameInformation");
class App {
  play() {
    this.start();
  }
  #gameInf = new GameInformation();
  async start() {
    try {
      this.#gameInf.cars = await InputView.readCarNames(MESSAGES.startText);
      this.repeat();
    } catch (e) {
      OutputView.printErrorMessage(MESSAGES.nameError);
      this.start();
    }
  }

  async repeat() {
    try {
      this.#gameInf.repeat = await InputView.readRepeatNumber(
        MESSAGES.repeatAnswerText
      );
      console.log(this.#gameInf);
    } catch (e) {
      OutputView.printErrorMessage(MESSAGES.rangeError);
      this.repeat();
    }
  }

 async game() {
  
 }
}

const app = new App();
app.play();
module.exports = App;
