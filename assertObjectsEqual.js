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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // array values
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      // primitive values
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  // all good, objects are identical
  return true;
};

// ASSERT FUNCTION
const assertObjectsEqual = function(obj1, obj2, expected) {
  // import util.inspect
  const inspect = require('util').inspect;
  // compare objects
  const actual = eqObjects(obj1, obj2);
  // test
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba, true);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc, false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc, true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2, false);


