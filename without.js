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

// without: return a subset of a given array, removing unwanted elements.
const without = function (source, itemsToRemove) {
  // clone array
  // shallow copy of ONE - dimensional array only! (see https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/)
  const newArray = [...source];
  // iterate through array to test for itemsToRemove
  newArray.forEach((element, i) => {
    // remove element if it exists in itemsToRemove
    if (itemsToRemove.includes(element)) {
      newArray.splice(i, 1);
      // console.log(`${element} in itemsToRemove`, source);
    }
  });
  return newArray;
};


// TEST CODE

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"], true);

assertArraysEqual(without([1, 2, 3], [1]), [2, 3], true);
assertArraysEqual(without([1, 2, 3], ['1']), [1, 2, 3], true);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"], true);
