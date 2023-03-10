const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log("✅ assertion Passed");
    } else if (actual !== expected) {
      console.log("🛑 assertion failed");
    }
  };
  const findKey = function(object, callback)
  {
    for(const key in object)
    {
        if(callback(object[key]))
        {
            return key;
        }
        
    }
    return undefined;
  }
  
  console.log(assertEqual(findKey ({
        "Blue Hill": { stars : 1 },
       " Akaleri" : { stars : 3 },
        "noma" :    { stars : 2 },
        "elBulli" : { stars : 2 },
        "Akelarre": { stars : 3 }
     }, x => x.stars === 1), "Blue Hill"))
