const { humanCatDogYears } = require("../src");

// Look Ma, no handlebars!!!
describe("humanCatDogYears", () => {
  it("should return human years to cat and dog years in an array", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    expect(humanCatDogYears(20)).toEqual([20, 96, 114]);
  });
});
