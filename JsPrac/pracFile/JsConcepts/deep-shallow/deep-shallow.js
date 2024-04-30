// In JavaScript, primitive data types like strings, numbers, 
// and booleans are immutable, meaning their values cannot be changed. 

let originalString = "Hello";
let copiedString = originalString;

console.log(copiedString); // Output: Hello

// Now let's change the value of originalString
originalString = "Hi";

console.log(originalString); // Output: Hi
console.log(copiedString);   // Output: Hello (copiedString remains unchanged)
