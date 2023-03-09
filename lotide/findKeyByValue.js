const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log("✅ assertion Passed");
    } else if (actual !== expected) {
      console.log("🛑 assertion failed");
    }
  };

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };  

const findKeyByValue = function(object,objectValue)
{
 for(const key in object)
 {
    if(objectValue === object[key])
    {
        return key;
    }
}
return undefined;
    
 }

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), undefined);
