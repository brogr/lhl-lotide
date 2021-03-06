// ASSERT FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION
// findKeyByValue: takes in an object and a value. It should scan the object and return the first key which contains the given value.
// If no key with that given value is found, then it should return undefined.
const findKeyByValue = function(obj, val) {
  //for (const item in obj) {
  // if (obj[item] === val) {
  for (const item of Object.keys(obj)) {
    if (obj[item] === val) {
      return item;
    }
  }
  return undefined;
};

// TEST CODE
const bestTVShowsByGenre = {
  'sci_fi': "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
