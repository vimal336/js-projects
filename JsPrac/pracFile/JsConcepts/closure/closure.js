// JavaScript closure is a feature that allows inner functions to access the outer scope of a function. 
// Closure helps in binding a function to its outer boundary and is created automatically 
// whenever a function is created. 


function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();
  