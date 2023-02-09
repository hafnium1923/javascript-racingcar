const OutputView = {
  printErrorMessage(message) {
    console.log(message);
  },
  printMessage(message) {
    console.log(message);
  },
  printFinalWinner(winner) {
    console.log(winner + "가 최종 우승했습니다.\n");
  },
};

module.exports = OutputView;
