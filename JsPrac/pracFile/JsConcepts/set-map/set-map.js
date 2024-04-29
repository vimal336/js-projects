// In JavaScript, a Set is a built-in object that allows you to store unique values of any type, 
// whether primitive values or object references. 
// A Set object can only contain unique elements; duplicates are ignored.


const mySet = new Set([1, 2, 3, 3]);
console.log(mySet); // Output: Set { 1, 2, 3 }


mySet.add(4);
console.log(mySet); // Output: Set { 1, 2, 3, 4 }

mySet.delete(2);
console.log(mySet); // Output: Set { 1, 3, 4 }
