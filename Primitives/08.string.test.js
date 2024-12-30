const assert = require("assert");

// write test case for
describe("String indexOf method", function () {
  it("should return -1 when the value is not present", function () {
    assert.strictEqual("Blue Whale".indexOf("blue"), -1);
  });

  it("should return the index of the first occurrence of the specified value", function () {
    assert.strictEqual("Blue Whale".indexOf("Blue"), 0);
  });
});

describe("Find all occurrences of a substring in a string", function () {
  it('should count all occurrences of "e" in the string', function () {
    const str = "To be, or not to be, that is the question.";
    let count = 0;
    let position = str.indexOf("e");
    while (position !== -1) {
      count++;
      position = str.indexOf("e", position + 1);
    }
    assert.strictEqual(count, 4);
  });
});
