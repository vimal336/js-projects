// The filter method in JavaScript is designed as a higher-order function that iterates over each element of an array,
// allowing developers to apply a specific condition to filter out elements.

// The filter method doesn't modify the original array, but instead creates and returns
// a new array containing only the elements that meet the specified condition.

const numbers = [1, 0, 2, 3, 4, 10, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
// evenNumbers: [2, 4]

//filter method in object
let filterobj = [
  {name: "raj",age: 15},
  {name: "ram",age: 18},
  {name: "ravi",age: 20},
  {name: "randy",age: 24}
];

let filtering =  filterobj.filter(filters=>filters.age<=20);

console.log(filtering);

//filter method
const filternum = numbers.filter((fil) => {
  return fil >= 2;
});

console.log(filternum);
