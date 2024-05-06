
// The reduce() method in JavaScript is used to reduce an array to a single value. 
// It executes a provided callback function once for each element in the array, 
// resulting in a single output value.


let reducemethod = ['20', '50', '60', '577', '845'];

const reducearray = reducemethod.reduce((prev, curr, i, arr)=>{

    console.log(prev);
    console.log(curr);

    return prev + curr;
 
});


// A callback function: This function is executed for each element in the array. 
// It can take four arguments:
// Accumulator: The accumulated result of previous iterations. 
// It is the value returned by the previous invocation of the callback, or the initial value if provided.

// Current value: The current element being processed in the array.
// Current index: The index of the current element being processed.
// Source array: The array reduce() was called upon.
// Initial value (optional): An optional initial value to use as the first argument to the callback function. 
// If not provided, the first element of the array will be used as the initial accumulator value, 
// and iteration will start from the second element.


const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 1); // Initial value of accumulator is 1

console.log(sum); // Output: 16 (1 + 2 + 3 + 4 + 5)



// the reduce() method to perform various operations like summing, averaging, filtering, 
// or any custom operation that requires reducing an array to a single value.


