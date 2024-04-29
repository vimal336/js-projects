//Spread Operator

// the spread operator spreads (or expands) an array into individual elements. 
// It was also introduced in ECMAScript 2015 (ES6) and is used in various contexts, 
// such as function calls, array literals, and object literals.


const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo, '7'];
console.log(numbersCombined);


//Rest operator

// The rest parameter syntax in JavaScript allows functions to accept an indefinite number of arguments as an array. 
// It's indicated by three dots (...) preceding the last parameter of a function.
// This feature was introduced in ECMAScript 2015 (ES6).


function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
