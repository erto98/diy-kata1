const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("should return yes if is true", () => {
    expect(booleanToWord(true)).toBe("Yes");
  });

  it("should return no if its false", () => {
    expect(booleanToWord(false)).toBe("No");
  });
});
