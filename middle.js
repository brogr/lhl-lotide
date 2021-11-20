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

module.exports = middle;