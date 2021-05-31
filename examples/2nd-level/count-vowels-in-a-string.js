// function:
// =========
// name: countVowels
// parameter: inputString: string
// return type: number

function countVowels(inputString) {
  // set count to 0
  let count = 0;

  // for each character in the string inputString
  for (let character of inputString) {
    // if isAVowel(character)
    if (isAVowel(character)) {
      // increment count by 1
      count += 1; // or count = count + 1, or count++ (in JS, not in Python)
    }
  }

  // return count
  return count;
}

// function:
// =========
// name: isAVowel
// parameter: character: string
// return type: boolean

function isAVowel(character) {
  // if character is 'a' or 'e' or 'i' or 'o' or 'u'
  if (["a", "e", "i", "o", "u"].includes(character)) {
    // return true
    return true;
    // else
  } else {
    // return false
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
