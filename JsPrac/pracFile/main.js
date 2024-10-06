
// // Get a reference to the button element
// let button = document.querySelector(".myButton");


// function handleClick() {
//     console.log("Button clicked!");
// }


// button.addEventListener("click", handleClick);




let arr = [1,2,3,4,5];

for(let i=arr.length; i>=0; i--){
  console.log(arr[i]);
}

// let arr = [1, 2, 3, 4, 5];

// for (let i = arr.length; i>=1; i--) {
//     console.log(i);
// }


let  rev = arr.reverse();

console.log(rev);

// setTimeout(function(){
//     console.log("set interval");
// },5000)

i = 0;

while(i<10){
  i++;
  console.log(1);
}

j = 0;

do {
  console.log(j);
  j++;
} while (j < 5);


var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}


// for of

for(let forof of arr){
    console.log(forof);
}



//for in

var person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (var key in person) {
    console.log(key + ": " + person[key]);
}

// for each

let forech = arr.forEach((fe)=>{
    console.log(fe);
});

//callback function

function add(a, b) {
    return a + b;
}

function div(a, b) {
    return a / b;
}

function cb(a, b, operation) {
    return operation(a, b);
}

console.log(cb(2, 2, add));
console.log(cb(2, 2, div));


//callback example 2

function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback(); // Call the callback function
}

function sayGoodbye() {
    console.log("Goodbye!");
}

// Call the greet function with a callback function
greet("John", sayGoodbye);



function callback(name, callb){
  console.log("hello" + " " + name);
  callb();
}

function callb(){
 console.log("how are you?")
}

callback("ram", callb);

// ---------------------------------------------------------------//
function callbac(name, gret){
    console.log("hello" + " " + name);
    gret();
}

function gret(){
    console.log("how are you?")
   }

callbac('vimal', gret);

let spread = [1,2,3,4,5]

let spread2 = [6,7,8,9,10];

let combine = [...spread, ...spread2, 11,12]

console.log(combine);

function add(...rest){
   return rest.reduce((accum,curr)=> accum + curr, 0)
}
console.log(add(6,8,7,7));

console.log(`${spread} "hello" ${spread2}`)


//reduce

var numbers = [1, 2, 3, 4, 5];

var sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)


var people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Doe", age: 35 }
];

people.sort(function(a, b) {
    return a.age - b.age; // Sort by age in ascending order
});

console.log(people);

//closure 

//example 1

function outer(){

    const message = "Hello";

    function inner(){
        console.log(message);
    }

    inner();
}

message = "Goodbye";

console.log(message)

outer();


//example 2

function createCounter() {

    let count = 0;

    function increment() {
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount() {
        return count;
    }

    return {increment, getCount};
}


const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();


let ucase = "uppercase";

// let upper = ucase.toUpperCase() + slice(0,1);
// // let u = upper + ucase.slice(1)
// console.log(upper);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizeFirstLetter("vimal"));



function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizeFirstLetter("vi")); // Output: Vimal


function func(...restpara){
     return restpara.reduce((a,b)=>a+b)  ;
}

console.log(func(15,10,30,10));



function factorial(fact){
  if(fact==0||fact==1){
    return 1;
  }
  else{
    return fact * factorial(fact-1);
  }
}

console.log(factorial(4))

function factorial(fact){
    if(fact==0||fact==1){
      return 1;
    }
    else{
      return fact * factorial(fact-1);
    }
  }
  
  console.log(factorial(5))
  console.log(factorial(5))
  

  
setTimeout(()=>{
    console.log("1");
    setTimeout(()=>{
     console.log("2")
    },1000);
   },3000);




   setTimeout(()=>{
    console.log("1");
    setTimeout(()=>{
     console.log("2")
    },1000);
   },2000);

// Falsy
if (false) console.log("Falsy");
if (0) console.log("Falsy");
if ("") console.log("Falsy");

// Truthy
if (true) console.log("Truthy");
if (1) console.log("Truthy");
if ("helloworld") console.log("Truthy");
