//const assertEqual = require('./assertEqual');
/* const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log("✅ assertion Passed");
    } else if (actual !== expected) {
      console.log("🛑 assertion failed");
    }
  };*/


const eqArrays = function(arr1, arr2)
{
    if(arr1.length !== arr2.length)
    {
        return false;
    }
    for (let i=0; i < arr1.length; i++)
    {
        if(arr1[i] !== arr2[i])
        {
            return false;
        }
    }
    return true;
}
//assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);

module.exports = eqArrays;