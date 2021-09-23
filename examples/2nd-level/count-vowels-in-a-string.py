# function:
# =========
# name: countVowels
# parameters:
#   - inputString: string
# return type: number

def count_vowels(input_string):
    count = 0

    for character in input_string:
        if is_a_vowel(character):
            count += 1 # or count = count + 1

    return count

# function:
# =========
# name: isAVowel
# parameters:
#   - character: string
# return type: boolean

def is_a_vowel(character):
    if character in ['a', 'e', 'i', 'o', 'u']:
        return True
    else:
        return False

# test cases
print('count_vowels("hello"):', count_vowels("hello"), "should be 2")
print('count_vowels("telephone"):', count_vowels("telephone"), "should be 4")
print('count_vowels("rhythm"):', count_vowels("rhythm"), "should be 0")
print('count_vowels("aeiou"):', count_vowels("aeiou"), "should be 5")
print('count_vowels("aeiouu"):', count_vowels("aeiouu"), "should be 6")
print('count_vowels("qaeiouxyz"):', count_vowels("qaeiouxyz"), "should be 6")

print('is_a_vowel("a"):', is_a_vowel("a"), "should be true")
print('is_a_vowel("b"):', is_a_vowel("b"), "should be false")
print('is_a_vowel("c"):', is_a_vowel("c"), "should be false")
print('is_a_vowel("d"):', is_a_vowel("d"), "should be false")
print('is_a_vowel("e"):', is_a_vowel("e"), "should be true")
print('is_a_vowel("A"):', is_a_vowel("A"), "should be false [as a known anddeliberate limitation of this solution]");
