// function:
// =========
// name: maxInList
// parameters:
//    - numbers: list of numbers
// return type: number

function maxInList(numbers) {
  let biggest = numbers[0];
  for (let n of numbers) {
    if (n > biggest) {
      biggest = n;
    }
  }
  return biggest;
}

// test cases
console.log("maxInList([2, 9, 1]):", maxInList([2, 9, 1]), "should be 9");
console.log("maxInList([2, 9, 10]):", maxInList([2, 9, 10]), "should be 10");
console.log("maxInList([-2, -9, -10]):", maxInList([-2, -9, -10]), "should be -2");
console.log("maxInList([50, 50]):", maxInList([50, 50]), "should be 50");
console.log("maxInList([51, 50]):", maxInList([51, 50]), "should be 51");
console.log("maxInList([51, 50, 50, 50, 50, 50000]):", maxInList([51, 50, 50, 50, 50, 50000]), "should be 50000");
