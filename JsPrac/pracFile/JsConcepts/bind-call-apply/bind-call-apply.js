//Call Method

// call method: It invokes a function with a specified this value and arguments provided individually.

function sayHi(a, b) {
    console.log('Hi, ' + this.name, a + b);
}

var person = {
    name: 'Vimal'
};

sayHi.call(person, 5, 6); // Output: Hello, Vimal 11


//Apply Method

//apply method: It is similar to call, but it accepts arguments as an array.

function sayHello(greeting) {
    console.log(greeting + ', ' + this.name);
}

var person = {
    name: 'Bob'
};

sayHello.apply(person, ['Hola']); // Output: Hola, Bob

//Bind Method

// bind method: It returns a new function with the this value set to the provided value. 
// Unlike call and apply, it doesn't immediately invoke the function;
// instead, it creates a new function with the specified context.

//Example -1

function myfun(){
    console.log(this);
}

let obj = {
    name:'joining',
    concept:'bind method'
};

myfun = myfun.bind(obj);
myfun();


//Example - 2

function sayHello() {
    console.log('Hello, ' + this.name);
}

var person = {
    name: 'Charlie'
};

var greetPerson = sayHello.bind(person);
greetPerson(); // Output: Hello, Charlie




function fun(){
 console.log("hello" + this.names);
}

// fun();


let objec = {
    names:'vimal',
    age:20,
}

var greet = fun.bind(objec.names);

greet();