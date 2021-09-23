# function:
# =========
# name: maxInList
# parameters:
#   - numbers: list of numbers
# return type: number

def max_in_list(numbers):
    biggest = numbers[0]
    for n in numbers:
        if n > biggest:
            biggest = n
    return biggest

# test cases
print("max_in_list([2, 9, 1]):", max_in_list([2, 9, 1]), "should be 9")
print("max_in_list([2, 9, 10]):", max_in_list([2, 9, 10]), "should be 10")
print("max_in_list([-2, -9, -10]):", max_in_list([-2, -9, -10]), "should be -2")
print("max_in_list([50, 50]):", max_in_list([50, 50]), "should be 50")
print("max_in_list([51, 50]):", max_in_list([51, 50]), "should be 51")
print("max_in_list([51, 50, 50, 50, 50, 50000]):", max_in_list([51, 50, 50, 50,50, 50000]), "should be 50000")

