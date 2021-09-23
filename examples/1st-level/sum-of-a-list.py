# function:
# =========
# name: sumList
# parameters:
#   - numbers: list of numbers
# return type: number

def sum_list(numbers):
    running_total = 0
    
    for n in numbers:
        running_total += n # or running_total = running_total + n
    
    return running_total

# test cases
print("sum_list([3, 10, 1]):", sum_list([3, 10, 1]), "should be 14")
print("sum_list([3, 10, 1, -4]):", sum_list([3, 10, 1, -4]), "should be 10")
print("sum_list([0, 0, 0, 1]):", sum_list([0, 0, 0, 1]), "should be 1")
print("sum_list([0, 0]):", sum_list([0, 0]), "should be 0")