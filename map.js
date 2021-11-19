// var
const words = ["ground", "control", "to", "major", "tom"];

// map
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);


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
assertArraysEqual(
  map(["ground", "control", "to", "major", "tom"], (word) => word[0]),
  ["g", "c", "t", "m", "t"],
  true
);
assertArraysEqual(
  map(["123", "234", "345", "456", "567"], (word) => word[0]),
  ["1", "2", "3", "4", "5"],
  true
);

