// function:
// =========
// name: sumList
// parameters:
//  - numbers: list of numbers
// return type: number

function sumList(numbers) {
  let runningTotal = 0;

  for (let n of numbers) {
    runningTotal += n; // or runningTotal = runningTotal + n;
  }

  return runningTotal;
}

// test cases
console.log("sumList([3, 10, 1]):", sumList([3, 10, 1]), "should be 14");
console.log("sumList([3, 10, 1, -4]):", sumList([3, 10, 1, -4]), "should be 10");
console.log("sumList([0, 0, 0, 1]):", sumList([0, 0, 0, 1]), "should be 1");
console.log("sumList([0, 0]):", sumList([0, 0]), "should be 0");
