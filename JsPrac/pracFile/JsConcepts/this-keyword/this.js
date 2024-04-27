// this keyword refers to the object that is currently executing the code, or more specifically, 
// the context in which the current code is being executed. 

// It is determined dynamically and can vary depending on how a function is called.


console.log(this);//in normal it refers window object

console.log(this);//in strict mode its undefined

console.log(this);//in arrow function this keyword refers window object

//arrow function does not get its own this, but inside regular func this works


const fun = () =>{
    console.log("function")
}

fun();



