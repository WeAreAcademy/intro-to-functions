function censorMessage(string,banList){
    rawWords = string.split(" ")
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
console.log("don't mess with cats")
console.log("Are you sure that this is safe")
console.log("I CANNOT HELP YOU")