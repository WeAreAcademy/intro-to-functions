function longestInList (words) {
    let longest = words[0];
    
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log (`longestInList: ["England", "Wales", "Scotland", "Northern Ireland"]: ${longestInList(["England", "Wales", "Scotland", "Northern Ireland"])} should be "Northern Ireland"`)
console.log (`longestInList: ["the", "quick", "brown", "fox"]): ${longestInList(["the", "quick", "brown", "fox"])} should be "Quick"`)
console.log (`longestInList: ["hello", "hi", "greetings", "hey"]): ${longestInList(["hello", "hi", "greetings", "hey"])} should be "greetings"`)