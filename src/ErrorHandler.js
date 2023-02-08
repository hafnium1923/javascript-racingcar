const ErrorHandler = {
  isRightCarName(cars) {
    if (cars.length === 0) throw new Error();
    for (let i = 0; i < cars.length; i++) {
      if (cars[i].length < 0 || cars[i].length > 5) throw new Error();
    }
  },
};

module.exports = ErrorHandler;
