// The some() method tests whether at least one element in the array 
// passes the test implemented by the provided function. 
// It returns true if at least one element in the array satisfies the condition, otherwise, it returns false.



const numbers = [1, 2, 3, 4, 5];

const hasEven = numbers.some(element => element % 2 === 0);

console.log(hasEven); // Output: true (because at least one element in the array is even)


