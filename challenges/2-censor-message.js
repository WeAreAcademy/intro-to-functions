/*
Write a function that, given a full message and a list of words, returns a single string that represents a 'censored' version of the original message: 
all words from the list must be scrubbed out and replaced with five asterisks (*****).

The censor must scrub out matches that are case insensitive.

You may assume that each string in the list is a lowercase single word.
You may assume that there is no punctuation apart from spaces in the full message.

function censorMessage
convert string to list by space
censoredOutput = []
    for word in list
        if word in censored list
            censoredOutput.push('*' * 5)
        censoredOutput.push(list[word])
convert censoredOutput back to string
return censoredOutputStr
*/

function censorMessage(string, censorList){
    let stringasArray = string.split(" ")
    let censoredOutput = []
    for(let word in stringasArray){
        if(stringasArray[word] in censorList){
            censoredOutput.push("*****")
            console.log(word)
        }
        else{censoredOutput.push(stringasArray[word])
            console.log(stringasArray[word])}
    }
    censoredOutputStr = censoredOutput.toString()
    return censoredOutputStr
}


// test cases:
console.log(censorMessage("don't mess with cats", ["mess"]), " should be don't ***** with cats")
console.log(censorMessage("Are you sure that this is safe", ["are", "is"]), "should be ***** you sure that this ***** safe")
console.log(censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"])," should be I CANNOT ***** *****")