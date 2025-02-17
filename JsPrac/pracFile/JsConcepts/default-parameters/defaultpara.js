// Default function parameters allow named parameters to be initialized with default values
 
// if no value or undefined is passed.

function multiply(a, b = 3) {
    return a * b;
  }
  
  console.log(multiply(5, 2));
// Expected output: 10
  
  console.log(multiply(5));
// Expected output: 15


//In JS, default parameters work when an argument is undefined, 
// but they do not apply if the argument is null.


  function one(a = 5, b = 5) {
    return a + b;
  }
  
  console.log(one(undefined, 10)); // Output: 15

//a = 5 (default): If a is undefined, it takes the default value 5.
//b = 10: Since 10 is explicitly passed, it overrides the default 5.

function two(a = 5, b = 7) {
    return a + b;
}
  
console.log(two(null, 10)); // Output: 10

//How It Works:
//a = null: Since null is explicitly passed, it does not 
//take the default value 5. Instead, a remains null.
//b = 10: Overrides the default value 7.