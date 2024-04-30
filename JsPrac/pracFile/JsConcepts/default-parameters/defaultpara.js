// Default function parameters allow named parameters to be initialized with default values
 
// if no value or undefined is passed.


function multiply(a, b = 3) {
    return a * b;
  }
  
  console.log(multiply(5, 2));
  // Expected output: 10
  
  console.log(multiply(5));
  // Expected output: 5
  