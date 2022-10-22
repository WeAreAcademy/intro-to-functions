Write a function that, given a list of strings, returns the string which has the greatest character count (including duplicates).

When there are multiple string which are tied for largest character count, return the string that occurs earliest in the list.

You may assume that each string in the list is a single word.
You may assume that there are always at least two strings in the list.

function:
=========
name: longestInList

parameters:
	- WORDS: list of strings

return type: string

pseudo code:
============
set LONGEST to the 0th element in WORDS

for each string, WORD, in WORDS
	if WORD has more characters than LONGEST
		set LONGEST to WORD

return LONGEST

test cases:
===========
longestInList(["England", "Wales", "Scotland", "Northern Ireland"]) should be "Northern Ireland"
longestInList(["the", "quick", "brown", "fox"]) should be "quick"
longestInList(["hello", "hi", "greetings", "hey"]) should be "greetings"