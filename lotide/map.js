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
const assertArraysEqual = function(arr1, arr2)
{
    const result = eqArrays(arr1,arr2);
    if(!result)
    {
        console.log(`🛑 Arrays are not equal`);
    }
    else{
        console.log(`✅ Arrays are equal`);
    }
}
const takeUntil = function(array, callback) {
    const results = [];
    for (let item of array) {
      if (callback(item)) {
        break;
      }
      results.push(item);
    }
    return results;
  };
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);