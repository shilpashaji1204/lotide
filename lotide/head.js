const assertEqual = require('./assertEqual');

function head(arr) {
  return arr[0];
}
/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Passed");
  } else {
    console.log("failed");
  }
}; */
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 

module.exports = head;


