// import
const assertEqual = require("./assertEqual");

// eqArrays: takes in two arrays and returns true or false, based on a perfect match.
const eqArrays = function (arr1, arr2) {
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

module.exports = eqArrays;