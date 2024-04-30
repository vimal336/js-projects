// In JavaScript, the slice() method is used primarily to extract a section of an array 
// and return it as a new array. 
// It doesn't modify the original array; instead, 
// it returns a shallow copy of a portion of the array specified by its parameters. 

array.slice(startIndex, endIndex)


const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Extract a portion of the array
const slicedFruits = fruits.slice(1, 4); // Returns ['banana', 'cherry', 'date']

// Slice from a negative index
const slicedFruitsFromEnd = fruits.slice(-3); // Returns ['cherry', 'date', 'elderberry']

// Slice without endIndex (extracts till the end)
const slicedFruitsTillEnd = fruits.slice(2); // Returns ['cherry', 'date', 'elderberry']

// Slice with negative endIndex
const slicedFruitsNegativeEndIndex = fruits.slice(1, -1); // Returns ['banana', 'cherry', 'date']
