const humanCatDogYears = (number) => {
  let humanYear = number;
  let firstTwoYears = 24;

  let catYear = (humanYear - 2) * 4 + firstTwoYears;

  let dogYear = (humanYear - 2) * 5 + firstTwoYears;

  let yearsForAll = [humanYear, catYear, dogYear];
  return yearsForAll;
};

module.exports = humanCatDogYears;
