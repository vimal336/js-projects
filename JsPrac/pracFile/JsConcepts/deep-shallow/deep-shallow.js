// In JavaScript, primitive data types like strings, numbers, 
// and booleans are immutable, meaning their values cannot be changed. 

let originalString = "Hello";
let copiedString = originalString;

console.log(copiedString); // Output: Hello

// Now let's change the value of originalString
originalString = "Hi";

console.log(originalString); // Output: Hi
console.log(copiedString);   // Output: Hello (copiedString remains unchanged)


// In JavaScript, non-primitive data types like arrays and objects are mutable, 
// meaning their values can be changed. When you assign an array or an object to another variable, 
// you're creating a reference to the original array or object, not a copy of it. This means that changes
// made to the original array or object will affect the copy and vice versa. This is known as a shallow copy.

let originalArray = [1, 2, 3];
let copiedArray = originalArray.slice();

// Now let's change the value of an element in originalArray
originalArray[0] = 100;

console.log(originalArray); // Output: [100, 2, 3]
console.log(copiedArray);   // Output: [1, 2, 3] (copiedArray remains unchanged)




const nonprimtive = ["stringone", "stringtwo"];


console.log(nonprimtive);


let conv = JSON.stringify(nonprimtive);

console.log(conv);

nonprimtive.push("stringthree");

let newconv = JSON.parse(conv);

console.log(newconv)

console.log(nonprimtive)


// spread operator only deep copy on primitive datatypes only