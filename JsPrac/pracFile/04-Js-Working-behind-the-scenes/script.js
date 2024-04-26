'use strict';


var foo = 'fo';
console.log(fo);


// let example
let b = 10;
if (true) {
    let b = 20; // This declares a new 'b' in a different block scope
}
console.log(b); // Output: 10