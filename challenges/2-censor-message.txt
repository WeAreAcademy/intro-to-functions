Write a function that, given a full message and a list of words, returns a single string that represents a 'censored' version of the original message: all words from the list must be scrubbed out and replaced with five asterisks (*****).

The censor must scrub out matches that are case insensitive.

You may assume that each string in the list is a lowercase single word.
You may assume that there is no punctuation apart from spaces in the full message.

function:
=========
name: censorMessage

parameter: message: string
parameter: banList: list of strings

return type: string

pseudo code:
============
set rawWords to the list of strings created by separating the string message into sub-strings at every space (' ')

set scrubbedWords to an empty list

for each string word in rawWords
	set lowercaseWord to lowercase(word)
  if lowercaseWord is contained in the list banList
    insert the string '*****' at the end of scrubbedWords
  else
    insert word at the end of scrubbedWords

set scrubbedMessage to the string created by joining together every string in scrubbedWords with a space (' ') as a join character

return scrubbedMessage

test cases:
===========
censorMessage("don't mess with cats", ["mess"]) should be "don't ***** with cats"
censorMessage("Are you sure that this is safe", ["are", "is"]) should be "***** you sure that this ***** safe"
censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"]) should be "I CANNOT ***** *****"
