"use strict";

// FUNCTION IMPLEMENTATION
var assertEqual = function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log("\u2705\u2705\u2705 Assertion Passed: ".concat(actual, " === ").concat(expected));
  } else {
    console.log("\uD83D\uDED1\uD83D\uDED1\uD83D\uDED1 Assertion Failed: ".concat(actual, " !== ").concat(expected));
  }
}; // TEST CODE


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);