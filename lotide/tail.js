const assertEqual =require('./assertEqual');
function tail(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return [];
  } else {
    return arr.slice(1);
  }
}
/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Passed");
  } else {
    console.log("failed");
  }
}; 
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

//const result = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(result, ["Lighthouse", "Labs"]); */
assertEqual(tail([1]), []);
assertEqual(tail([1, 2, 3]), [2, 3]);
/*const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); */
tail([1, 2, 3, 4, 5]);

module.exports = tail;

