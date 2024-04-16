'use strict';

let guess = document.querySelectorAll('number');
console.log(guess);

let GenerateRandom = Math.floor(Math.random()*20);

console.log(GenerateRandom);

if(GenerateRandom == guess){
    console.log("your guessed is right")
} else{
    console.log("your guessed is wrong")
}