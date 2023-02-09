const RacingDistanceMaker = {
  /**
   * @param {number} carNumber 자동차 개수
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   */
  makeRaceDistance(carNumber, generateRandomNumber) {
    let distance = [];
    for (let i = 0; i < carNumber; i++) {
      const RANDOM = generateRandomNumber();
      distance[i] = RANDOM < 4 ? 0 : 1;
    }
    return distance;
  },
};

module.exports = RacingDistanceMaker;
