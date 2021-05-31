# function:
# =========
# name: countVowels
# parameter: inputString: string
# return type: number

def count_vowels(input_string):
    # set count to 0
    count = 0

    # for each character in the string inputString
    for character in input_string:
        # if isAVowel(character)
        if is_a_vowel(character):
            # increment count by 1
            count += 1 # or count = count + 1

    # return count
    return count

# function:
# =========
# name: isAVowel
# parameter: character: string
# return type: boolean

def is_a_vowel(character):
    # if character is 'a' or 'e' or 'i' or 'o' or 'u'
    if character in ['a', 'e', 'i', 'o', 'u']:
        # return true
        return True
    # else
    else:
        # return false
        return False

# test cases
print(count_vowels("hello"), "should be 2")
print(count_vowels("telephone"), "should be 4")
print(count_vowels("rhythm"), "should be 0")
print(count_vowels("aeiou"), "should be 5")
print(count_vowels("aeiouu"), "should be 6")
print(count_vowels("qaeiouxyz"), "should be 6")

print(is_a_vowel("a"), "should be true")
print(is_a_vowel("b"), "should be false")
print(is_a_vowel("c"), "should be false")
print(is_a_vowel("d"), "should be false")
print(is_a_vowel("e"), "should be true")
print(is_a_vowel("A"), "should be false [as a known and deliberate limitation of this solution]")
