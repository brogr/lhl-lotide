// assertEqual: Compares two arguments 
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// head: return first element of array
const head = function (array) {
  return array[0];
}

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5,6,7]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Lighthouse");
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);