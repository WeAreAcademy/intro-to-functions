function censorMessage(message, banList) {
    const rawWords = message.split(' ');
    const scrubbedWords = [];

    for (let word of rawWords) {
        let lowercaseWord = word.toLowerCase();
        if (banList.includes(lowercaseWord)) {
            scrubbedWords.push('*****')
        } else {
            scrubbedWords.push(word);
        }
    }

    const scrubbedMessage = scrubbedWords.join(' ')
    return scrubbedMessage
}

console.log(`censorMessage("don't mess with cats", ["mess"]): ${censorMessage("don't mess with cats", ["mess"])} - should be "don't ***** with cats"`)
console.log(`censorMessage("Are you sure that this is safe", ["are", "is"]): ${censorMessage("Are you sure that this is safe", ["are", "is"])} - should be "***** you sure that this ***** safe"'`)
console.log(`censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"]): ${censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"])} - should be "I CANNOT ***** *****"`)
