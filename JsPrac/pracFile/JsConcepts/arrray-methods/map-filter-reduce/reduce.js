
// The reduce() method in JavaScript is used to reduce an array to a single value. 
// It executes a provided callback function once for each element in the array, 
// resulting in a single output value.


let reducemethod = ['20', '50', '60', '577', '845'];

const reducearray = reducemethod.reduce((prev, curr, i, arr)=>{

    console.log(prev);
    console.log(curr);

    return prev + curr;
 
});



const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // Initial value of accumulator is 0

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)






