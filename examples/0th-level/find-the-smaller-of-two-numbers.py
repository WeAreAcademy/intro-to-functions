# function:
# =========
# name: min
# parameter a: number
# parameter b: number
# return: number

def min(a, b):
    # if a is smaller than b
    if a < b:
        # return a
        return a
    # else
    else:
        # return b
        return b
        
# test cases
print(min(3, 5), "should be 3")
print(min(5, 3), "should be 3")
print(min(-5, 3), "should be -5")
print(min(-5, -55), "should be -55")
