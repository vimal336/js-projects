// The join() method in JavaScript is used to concatenate all elements of an array into a single string. 
// It allows you to specify a separator that will be inserted between 
// each pair of adjacent elements in the resulting string. 
// If no separator is provided, a comma (,) is used by default.


// separator: Optional. A string used to separate each element in the resulting string. 
// If omitted, the array elements are separated with a comma.


let array = ['apple', 'banana', 'orange'];
let result = array.join();
console.log(result); // Output: "apple,banana,orange"


let array2 = ['apple', 'banana', 'orange'];
let result2 = array2.join(' - ');
console.log(result2); // Output: "apple - banana - orange"


//join() does not modify the original array;