const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log("✅ assertion Passed");
    } else if (actual !== expected) {
      console.log("🛑 assertion failed");
    }
  };
  const countLetters = function(string)
  {
    const obj = {};
    const letters = string.split('');
    for(const letter of letters)
    {
        if(obj[letter])
        {
            obj[letter] = obj[letter] + 1;
        }
        else{
            obj[letter] = 1;
        }
    }
return obj;
  }
  const result = countLetters("Lighthouse in the house");
  for(const letter in result)
  {
    console.log(`${letter}: ${result[letter]}`);
  }
  