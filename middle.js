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
const assertArraysEqual = function(arr1, arr2, expected) {
  const actual = eqArrays(arr1, arr2);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// middle: take in an array and return the middle-most element(s) of the given array.
const middle = function(array) {
  const middleElements = [];
  // For arrays with one or two elements, there is no middle. Return an empty array.
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
      // console.log(array.length / 2);
      middleElements.push(array[array.length / 2 - 1]);
      middleElements.push(array[array.length / 2]);
    } else {
      // For arrays with odd number of elements, an array containing a single middle element should be returned.
      middleElements.push(array[Math.floor(array.length / 2)]);
    }
  }
  return middleElements;
};

// TEST CODE
// two
console.log(middle([1, 2]));
assertArraysEqual(middle([1, 2]), [], true);
// odd
console.log(middle([1, 2, 3, 4, 5]));
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3], true);
console.log(middle(['1', '2', '3', '4', '5', '6', '7']));
assertArraysEqual(middle(['1', '2', '3', '4', '5', '6', '7']), ['4'], true);
// even
console.log(middle([1, 2, 3, 4]));
assertArraysEqual(middle([1, 2, 3, 4]), [2,3], true);
console.log(middle(['1', '2', '3', '4', '5', '6']));
assertArraysEqual(middle(['1', '2', '3', '4', '5', '6']), ['3', '4'], true);