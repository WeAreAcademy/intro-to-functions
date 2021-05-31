// function:
// =========
// name: min
// parameter a: number
// parameter b: number
// return: number

function min(a, b) {
  // if a is smaller than b
  if (a < b) {
    // return a
    return a;
    // else
  } else {
    // return b
    return b;
  }
}

// test cases
console.log("min(3, 5):", min(3, 5), "should be 3");
console.log("min(5, 3):", min(5, 3), "should be 3");
console.log("min(-5, 3):", min(-5, 3), "should be -5");
console.log("min(-5, -55):", min(-5, -55), "should be -55");
