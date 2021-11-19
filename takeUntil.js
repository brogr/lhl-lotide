// return a "slice of the array with elements taken from the beginning." 
// keep going until the callback / predicate returns a truthy value.
const takeUntil = function (array, callback) {
  const results = []
  for (let item of array) {
    if (callback(item)) break
    results.push(item)
  }
  return results
}

// eqArrays: takes in two arrays and returns true or false, based on a perfect match.
const eqArrays = function(arr1, arr2) {
  // compare length
  if (arr1.length !== arr2.length) {
    return false;
  }
  // compare every element
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  // all elements were equal
  return true;
};

// assertArraysEqual: print whether two arrays are identical
const assertArraysEqual = function (arr1, arr2, expected) {
  const actual = eqArrays(arr1, arr2);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2], true);

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"], true);

