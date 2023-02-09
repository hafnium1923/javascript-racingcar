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
  /**
   * @param {String []} cars 자동차 배열
   * @param {Int []} moveDistance 이동거리 배열
   */
  printRoundResult(cars, moveDistance){
    for(let i = 0; cars.length; i++){
      
      console.log(cars[i] + " : " +)
    }
  }
};

module.exports = OutputView;
