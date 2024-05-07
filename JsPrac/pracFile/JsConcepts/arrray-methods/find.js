
//find() is used to retrieve the first element in an array Otherwise, it returns undefined.

// find gives a value type but filter gives a array type.

const numbers = [1, 2, 3, 4, 5];
const found = numbers.find(element => element > 3);
console.log(found); // Output: 4
