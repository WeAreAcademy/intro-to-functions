# function:
# =========
# name: maxInList
# parameter: numbers: list of numbers
# return type: number

def max_in_list(numbers):
    # set biggest to first number in list
    biggest = numbers[0]
    # for each number n in list
    for n in numbers:
        # if n is greater than biggest
        if n > biggest:
            # set biggest to n
            biggest = n
    # return biggest
    return biggest

# test cases
print("max_in_list([2, 9, 1]):", max_in_list([2, 9, 1]), "should be 9")
print("max_in_list([2, 9, 10]):", max_in_list([2, 9, 10]), "should be 10")
print("max_in_list([-2, -9, -10]):", max_in_list([-2, -9, -10]), "should be -2")
print("max_in_list([50, 50]):", max_in_list([50, 50]), "should be 50")
print("max_in_list([51, 50]):", max_in_list([51, 50]), "should be 51")
print("max_in_list([51, 50, 50, 50, 50, 50000]):", max_in_list([51, 50, 50, 50,50, 50000]), "should be 50000")

