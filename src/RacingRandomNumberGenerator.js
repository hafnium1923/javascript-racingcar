const RacingRandomNumberGenerator = {
  START_NUMBER: 0,
  END_NUMBER: 9,
  generate() {
    return (
      Math.floor(
        Math.random() *
          (RacingRandomNumberGenerator.END_NUMBER +
            1 -
            RacingRandomNumberGenerator.START_NUMBER)
      ) + RacingRandomNumberGenerator.START_NUMBER
    );
  },
};

module.exports = RacingRandomNumberGenerator;
