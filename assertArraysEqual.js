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
assertArraysEqual([1, 2, 3], [1, 2, 3], true);
assertArraysEqual([1, 2, 3], [3, 2, 1], false);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true);
assertArraysEqual(["1", "2", "3"], ["1", "2", "4"], false);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3], false);