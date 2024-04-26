let x; // declaration
let y = 10; // declaration and initialization

//Hoisting is a JavaScript mechanism where variable and function declarations 
//are moved to the top of their containing scope during the compilation phase, before the code is executed. 

console.log(b); // undefined
var b = 5;

// hoisting in function
sayHello(); // Output: "Hello, world!"

function sayHello() {
  console.log("Hello, world!");
}

// hoisting in function expression
sayHi(); // Throws a TypeError

var sayHi = function() {
  console.log("Hi!");
};


//Hoisting in let and const:

//Hoisting with let and const declarations differs from var declarations. 
//While var declarations are hoisted to the top of their scope and initialized with undefined, 
//let and const declarations are also hoisted to the top of their scope but are not initialized.

//This behavior results in the Temporal Dead Zone (TDZ) for let and const variables. 
//During the TDZ, attempting to access the variable before its declaration results in a ReferenceError. 
//The variable is only accessible and usable after its declaration statement.

console.log(myVar); // Throws a ReferenceError
let myVar = 10;



