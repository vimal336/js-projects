const numbers = [1, 2, 3, 4, 5];

const hasEven = numbers.some(element => element % 2 === 0);

console.log(hasEven); // Output: true (because at least one element in the array is even)
