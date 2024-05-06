// In JavaScript, values are inherently truthy or falsy when evaluated in a boolean context. 

//Understanding truthy and falsy values is important for writing conditional logic in JavaScript.


// Truthy values: Values that are considered true when evaluated in a boolean context. 
//Any value that is not falsy is truthy.

// Examples of truthy values include:
//-----------------------------------//

// Non-empty strings ("hello")
// Non-zero numbers (except for 0)
// Objects
// Arrays
// Functions
// true
// new Date()
// Falsy values: Values that are considered false when evaluated in a boolean context.


// Examples of falsy values include:
//---------------------------------------//

// Empty strings ("")
// 0 (zero)
// NaN (Not a Number)
// null
// undefined
// false


if ("hello") {
    console.log("Truthy"); // This will be executed because "hello" is truthy
}

if (0) {
    console.log("Truthy"); // This will not be executed because 0 is falsy
} else {
    console.log("Falsy"); // This will be executed because 0 is falsy
}

if ([]) {
    console.log("Truthy"); // This will be executed because an empty array is truthy
}

if (null) {
    console.log("Truthy"); // This will not be executed because null is falsy
} else {
    console.log("Falsy"); // This will be executed because null is falsy
}
if ({}) {
    // Empty object is truthy
}

if (function() {}) {
    // This will be executed because an empty function is truthy
} else {
    // This will not be executed
}


