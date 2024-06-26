
// The flat() method creates a new array with all sub-array elements 
// concatenated into it recursively up to the specified depth. 
// It flattens nested arrays.

const nestedArray = [1, 2, [8,[3,[2,5], 4]], [5, 6]];
const flattenedArray = nestedArray.flat(3);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]


