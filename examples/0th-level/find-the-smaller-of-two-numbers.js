// function:
// =========
// name: min
// parameters
//  - numOne: number
//  - numTwo: number
// return: number

function min(numOne, numTwo) {
  if (numOne < numTwo) {
    return numOne;
  } else {
    return numTwo;
  }
}

// test cases
console.log("min(3, 5):", min(3, 5), "should be 3");
console.log("min(5, 3):", min(5, 3), "should be 3");
console.log("min(-5, 3):", min(-5, 3), "should be -5");
console.log("min(-5, -55):", min(-5, -55), "should be -55");
