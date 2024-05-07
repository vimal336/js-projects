
// The findIndex() method is a built-in JavaScript array method that returns the index of the first element 
// in the array that satisfies the provided testing function. If no such element is found, it returns -1.


array.findIndex(callback(element[, index[, array]])[, thisArg])

const array = [5, 12, 8, 130, 44];

const index = array.findIndex(element => element > 10);

console.log(index); // Output: 1 (the index of the first element > 10, which is 12)


// In this example, findIndex() returns 1 because the first element in the array 
// greater than 10 is at index 1 (which corresponds to the value 12). If no such element existed, 
// findIndex() would return -1.