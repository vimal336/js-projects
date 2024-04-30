// The splice() method in JavaScript is used to modify an array by removing or
// replacing existing elements and/or adding new elements in place. 

// array.splice(start, deleteCount, item1, item2, ...)

let array = [1, 2, 3, 4, 5];
array.splice(2, 2); // Removes elements starting from index 2: [3, 4]
console.log(array); // Output: [1, 2, 5]


let array2 = [1, 2, 3, 4, 5];
array.splice(2, 2, 6, 7); // Replaces 2 elements starting from index 2 with 6 and 7
console.log(array2); // Output: [1, 2, 6, 7, 5]


