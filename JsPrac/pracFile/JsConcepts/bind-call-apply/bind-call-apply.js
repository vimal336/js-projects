

//Call Method

// call method: It invokes a function with a specified this value and arguments provided individually.

function sayHello() {
    console.log('Hello, ' + this.name);
}

var person = {
    name: 'Vimal'
};

sayHello.call(person); // Output: Hello, Vimal









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
