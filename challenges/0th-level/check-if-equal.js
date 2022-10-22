function isEqual(numOne, numTwo) {
    if (numOne == numTwo) {
        return true
    } else {
        return false
    }
}

console.log (`isEqual(4,4): ${isEqual(4,4)} should be True`)
console.log (`isEqual(0,0): ${isEqual(0,0)} should be True`)
console.log (`isEqual-4,-4): ${isEqual(-4,-4)} should be True`)
console.log (`isEqual(4,-4): ${isEqual(4,-4)} should be False`)
console.log (`isEqual(0,1): ${isEqual(0,1)} should be False`)