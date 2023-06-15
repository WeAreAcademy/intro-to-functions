/*
Write a function that, given two numbers, returns a boolean representing whether or not the two numbers are equal.

You may assume that the numbers are always integers (i.e. whole numbers).

fucntion isEqual(a, b)
if a == b return TRUE
else return FALSE

*/

function isEqual(a, b){
    if( a == b){
        return true
    }
    else{return false}

}
// test cases
console.log(isEqual(2,2), "TRUE");
console.log(isEqual(5,2), "FALSE");