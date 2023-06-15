/*
Write a function that, given a list of strings, returns the string which has the greatest character count (including duplicates).

When there are multiple string which are tied for largest character count, return the string that occurs earliest in the list.

You may assume that each string in the list is a single word.
You may assume that there are always at least two strings in the list.

function longestinList

longest = 1st word
for word in list
    if word.length > longest.length
        make word = longest
return longest
*/

function longestInList(list){
    let longest = list[0]
    for(let word in list){
        if(list[word].length > longest.length){
            longest = list[word]
        }
    }
    return longest
}

// test cases:
console.log(longestInList(["England", "Wales", "Scotland", "Northern Ireland"])," should be 'Northern Ireland'")
console.log(longestInList(["the", "quick", "brown", "fox"]), "should be quick")
console.log(longestInList(["hello", "hi", "greetings", "hey"]), "should be greetings")