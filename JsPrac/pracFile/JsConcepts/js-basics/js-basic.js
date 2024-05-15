
// JavaScript has several data types, which can be categorized into two main 

// categories: primitive data types and reference data types.


// JavaScript is a dynamically typed language, meaning variables can hold values of any data type, 
// and data types are automatically converted as needed during operations. 
// Understanding these data types and how they behave is fundamental to writing effective JavaScript code.

//Javascript operators

//Arithmetic Operators

let a = 5;
let b = 2;

let sum = a + b;      // Addition
let difference = a - b; // Subtraction
let product = a * b;  // Multiplication
let quotient = a / b; // Division
let remainder = a % b; // Modulus

console.log(sum);        // Output: 7
console.log(difference); // Output: 3
console.log(product);    // Output: 10
console.log(quotient);   // Output: 2.5
console.log(remainder);  // Output: 1

//Assignment Operators

let x = 10;

x += 5; // Equivalent to: x = x + 5;
console.log(x); // Output: 15

x *= 2; // Equivalent to: x = x * 2;
console.log(x); // Output: 30


x **= 2;

console.log(x);

//comparison operator

let num1 = 10;
let num2 = 5;

console.log(num1 > num2);  // Output: true
console.log(num1 === num2); // Output: false

console.log(num1 != num2);

console.log(num1 !== num2)


//logical operators

let isSunny = 0;
let isWarm = 10;

console.log(isSunny && isWarm); // Output: true
console.log(isSunny || isWarm); // Output: true
console.log(!isSunny);          // Output: false


//ternary operator

let msg = num1>=19 ? "a" : "b"

console.log(msg);


//if else

if(num1>=19){
 console.log('a')
} else{
    console.log('b') 
}


let array = ['1', '2', '4', '5']

let maps  =  array.map((v)=>{
    console.log(v);
});



// let filt = array.filter((fill)=>{
//   let va= fill >=2;
//    console.log(va);
// });
// console.log(filt)



let filt = array.filter((fill) => {
  let va = fill >= 3;
  return va; // Return the result of the condition
});

console.log(filt);




function fun(a, b){
   c = a+b;
   return c
}
fun(5,5);



//iife - immediately invoked function expression

(function iif(){
  console.log("iife")
})();


//nan(not a number) also known as invalid number

console.log(4 * "invalid");

//type casting also known as explicit type conversion.

let num3 = 5;

let num4 = "24";

num = Number(num4);

num5 = num3 + num;

console.log(num5);

//Type coercion, also known as implicit type conversion, is the process of automatically 
//converting values from one data type to another during operations or comparisons.

console.log(5 + true + true); // Output: 6 (true is coerced to 1)
console.log(10 - false); // Output: 10 (false is coerced to 0)



