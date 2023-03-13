const eqArrays = require("../eqArrays");
const { assert } = require("chai");
function test (eqArrays) {
describe("#eqArrays", () => {
  it("should return true for ([1, 2, 3], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("should return false for ([1, 2, 3], [3, 2, 1])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("should return true for (['1', '2', '3'], ['1', '2', '3'])", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
});

}

