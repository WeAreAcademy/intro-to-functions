# function:
# =========
# name: min
# parameters
#   - num_one: number
#   - num_two: number
# return: number

def min(num_one, num_two):
    if num_one < num_two:
        return num_one
    else:
        return num_two
        
# test cases
print("min(3, 5):", min(3, 5), "should be 3")
print("min(5, 3):", min(5, 3), "should be 3")
print("min(-5, 3):", min(-5, 3), "should be -5")
print("min(-5, -55):", min(-5, -55), "should be -55")
