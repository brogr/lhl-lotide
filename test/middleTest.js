// import
const assert = require("chai").assert;
const middle = require("../middle");

// MOCHA TEST CODE
describe("#middle", () => {
  it("two: [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("odd: [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it('odd: ["4"] for ["1", "2", "3", "4", "5", "6", "7"]', () => {
    assert.deepEqual(middle(["1", "2", "3", "4", "5", "6", "7"]), ["4"]);
  });

  it("even: [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it('even: ["3", "4"] for ["1", "2", "3", "4", "5", "6"]', () => {
    assert.deepEqual(middle(["1", "2", "3", "4", "5", "6"]), ["3", "4"]);
  });
  
});