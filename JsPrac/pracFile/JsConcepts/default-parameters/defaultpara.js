// Default function parameters allow named parameters to be initialized with default values
 
// if no value or undefined is passed.


function multiply(a, b = 3) {
    return a * b;
  }
  
  console.log(multiply(5, 2));
  // Expected output: 10
  
  console.log(multiply(5));
  // Expected output: 15


  num1 = 10;
  num2 = 20;

  console.log(num2);

  num2 = num1

  console.log(num2);

  console.log(num1);
  console.log(num2);
  

  num1 = 30;

  console.log(num1);

  console.log(num2);