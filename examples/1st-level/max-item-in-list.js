// function:
// =========
// name: maxInList
// parameter: numbers: list of numbers
// return type: number

function maxInList(numbers) {
  // set biggest to first number in list
  let biggest = numbers[0];
  // for each number n in list
  for (let n of numbers) {
    // if n is greater than biggest
    if (n > biggest) {
      // set biggest to n
      biggest = n;
    }
  }
  // return biggest
  return biggest;
}

// test cases
console.log(maxInList([2, 9, 1]), "should be 9");
console.log(maxInList([2, 9, 10]), "should be 10");
console.log(maxInList([-2, -9, -10]), "should be -2");
console.log(maxInList([50, 50]), "should be 50");
console.log(maxInList([51, 50]), "should be 51");
console.log(maxInList([51, 50, 50, 50, 50, 50000]), "should be 50000");
