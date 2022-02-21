"use strict"

function censorMessage(string,banList){
    let rawWords = string.split(" ")
    let scrubbedWords = []

    for(let word of rawWords){
        let lowerCaseWord = word.toLowerCase()
        if(banList.includes(lowerCaseWord) === true){
            scrubbedWords.push("*****")
        }else{
            scrubbedWords.push(lowerCaseWord)
        }
    }
    let scrubbedMessage = scrubbedWords.join(" ")
    return scrubbedMessage
}
//TEST
console.log(censorMessage("don't mess with cats",["mess"]))
console.log(censorMessage("Are you sure that this is safe",["are","is"]))
console.log(censorMessage("I CANNOT HELP YOU",["ARE","YOU"]))