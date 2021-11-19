// ASSERT
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION
// takes in an object and a callback.
// scan the object and return the first key for which the callback returns a truthy value.
// If no key is found, then it should return undefined.
const findKey = function (obj, callback) {
  for (let key in obj) {
    //console.log(key, obj[key]);
    if (callback(obj[key])) return key;
  }
};

console.log(
  findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
)); // => "noma"

// TEST CODE
assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ),
  "noma"
);

assertEqual(
  findKey(
    {
      "Blue Hill": "London",
      Akaleri: "Toronto",
      noma: "Ottawa",
    },
    (x) => x === "Toronto"
  ),
  "Akaleri"
);
