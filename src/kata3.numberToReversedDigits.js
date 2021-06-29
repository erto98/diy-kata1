const numberToReversedDigits = (number) => {
  let reverseNumbers = number
    .toString()
    .split("")
    .reverse();
  return reverseNumbers.map((reverse) => Number(reverse));
};

module.exports = numberToReversedDigits;
