/*const assert = require('chai').assert
const tail = require('../tail')
function test(tail) {
describe("#tail", () => {
    it("returns 2 for [1,2,3]", () =>{
       assert.strictEqual(middle([1,2,3]),[2,3] );    
    });
    it("returns 1 for ['5']", () => {
       assert.strictEqual(middle(['5']), ['5']); 
     })
    });
}
*/
const { assert } = require("chai");
const tail = require("../tail");

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it("returns 3 for words.length", () => {
    assert.strictEqual((words.length), 3);
  });
  it("returns 2 for tail(words).length", () => {
    assert.strictEqual(tail(words).length, 2);
  });
  it("returns ['Lighthouse', 'Labs'] for tail(words)", () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
});
