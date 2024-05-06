//Call Method

// call method: It invokes a function with a specified this value and arguments provided individually.

function sayHi(a, b) {
  console.log("Hi, " + this.name, a + b);
}

var person = {
  name: "Vimal",
};

sayHi.call(person, 5, 6); // Output: Hello, Vimal 11

//Apply Method

//apply method: It is similar to call, but it accepts arguments as an array.

function sayHello(greeting) {
  console.log(greeting + ", " + this.name);
}

var person = {
  name: "Bob",
};

sayHello.apply(person, ["Hola"]); // Output: Hola, Bob

//Bind Method

// bind method: It returns a new function with the this value set to the provided value.
// Unlike call and apply, it doesn't immediately invoke the function;
// instead, it creates a new function with the specified context.

//Example -1

function myfun() {
  console.log(this);
}

let obj = {
  name: "joining",
  concept: "bind method",
};

myfun = myfun.bind(obj);
myfun();

//Example - 2

function saygreet() {
  console.log("Hello, " + this.name);
}

var people = {
  name: "Charlie",
  age: "20",
};

var people2 = {
  name: "Charlie",
  age: "20",
};

var greetPerson = saygreet.bind(people);

var greetPerson2 = saygreet.bind(people2);

greetPerson2();
greetPerson(); // Output: Hello, Charlie





  


