// import
const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

// TEST CODE
// two
console.log(middle([1, 2]));
assertArraysEqual(middle([1, 2]), [], true);
// odd
console.log(middle([1, 2, 3, 4, 5]));
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3], true);
console.log(middle(["1", "2", "3", "4", "5", "6", "7"]));
assertArraysEqual(middle(["1", "2", "3", "4", "5", "6", "7"]), ["4"], true);
// even
console.log(middle([1, 2, 3, 4]));
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3], true);
console.log(middle(["1", "2", "3", "4", "5", "6"]));
assertArraysEqual(middle(["1", "2", "3", "4", "5", "6"]), ["3", "4"], true);
