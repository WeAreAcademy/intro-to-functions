// function:
// =========
// name: countVowels
// parameters:
//  - inputString: string
// return type: number

function countVowels(inputString) {
  let count = 0;

  for (let character of inputString) {
    if (isAVowel(character)) {
      count += 1; // or count = count + 1, or count++ (in JS, not in Python)
    }
  }

  return count;
}

// function:
// =========
// name: isAVowel
// parameters:
//  - character: string
// return type: boolean

function isAVowel(character) {
  if (["a", "e", "i", "o", "u"].includes(character)) {
    return true;
  } else {
    return false;
  }
}

// test cases
console.log('countVowels("hello"):', countVowels("hello"), "should be 2");
console.log('countVowels("telephone"):', countVowels("telephone"), "should be 4");
console.log('countVowels("rhythm"):', countVowels("rhythm"), "should be 0");
console.log('countVowels("aeiou"):', countVowels("aeiou"), "should be 5");
console.log('countVowels("aeiouu"):', countVowels("aeiouu"), "should be 6");
console.log('countVowels("qaeiouxyz"):', countVowels("qaeiouxyz"), "should be 6");

console.log('isAVowel("a"):', isAVowel("a"), "should be true");
console.log('isAVowel("b"):', isAVowel("b"), "should be false");
console.log('isAVowel("c"):', isAVowel("c"), "should be false");
console.log('isAVowel("d"):', isAVowel("d"), "should be false");
console.log('isAVowel("e"):', isAVowel("e"), "should be true");
console.log(
  'isAVowel("A"):',
  isAVowel("A"),
  "should be false [as a known and deliberate limitation of this solution]"
);
