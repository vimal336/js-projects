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

//returning functions - higher order function

//lexical scoping - inner scope can access parent scope variables

//A closure is the combination of a function bundled together (enclosed) 
//with references to its surrounding state(the lexical environment). 
//In other words, a closure gives you access to an outer function's scope from an inner function.


a =100;

function outer(name){
    let outerVariable = 'Bread'
    function inner(){
        let innerVariable = 'Butter'
        console.log('inner variable',innerVariable)
        console.log('outer variable',outerVariable)
        console.log('a is',a)
        console.log('hello',name)
    }
    return inner
}   

let call1 = outer('Vimal')
call1()

let call2 = outer('John')
call2()
call1()
  

