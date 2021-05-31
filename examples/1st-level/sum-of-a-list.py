# function:
# =========
# name: sumList
# parameter: numbers: list of numbers
# return type: number

def sum_list(numbers):
    # set runningTotal to 0
    running_total = 0
    # for each number n in numbers
    for n in numbers:
        # increment runningTotal by n
        running_total += n # or running_total = running_total + n
    
    # return runningTotal
    return running_total

# test cases
print(sum_list([3, 10, 1]), "should be 14")
print(sum_list([3, 10, 1, -4]), "should be 10")
print(sum_list([0, 0, 0, 1]), "should be 1")
print(sum_list([0, 0]), "should be 0")
