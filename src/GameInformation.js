class GameInformation {
  #cars = [];
  #repeat;

  getCars() {
    return this.#cars;
  }
  getRepeat() {
    return this.repeat;
  }
  setCars(cars) {
    this.cars = cars;
  }
  setRepeat(repeat) {
    this.repeat = repeat;
  }
}

module.exports = GameInformation;
