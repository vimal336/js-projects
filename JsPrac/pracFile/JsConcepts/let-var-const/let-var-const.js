
// var: Has function scope, hoisted to the top of the function or globally, allows redeclaration and updates.
// let: Has block scope, hoisted to the top of the block, allows declaration without initialization, 
// and cannot be re-declared in the same scope.
// const: Has block scope, similar to let but cannot be reassigned after initialization.





// var is a function scope

function example() {
    if (true) {
      var x = "inside if"; // x is scoped to the function example()
    }
    
    console.log(x); // Output: "inside if"
  }
  
  example();
  

// let is block scope not function scope

function example() {
    let x = 10;
    
    if (true) {
      let x = 20; // This 'x' is scoped to the if block
      console.log("Inside if block:", x); // Output: 20
    }
    
    console.log("Outside if block:", x); // Output: 10
  }
  
  example();


  function example() {
    if (true) {
      let x = "inside if"; // x is scoped to the if block
    }
    
    console.log(x); // ReferenceError: x is not defined
  }
  
  example();
  
let ar = ['a', 'b', 'c', 'd']
