'use strict';

const guessInputs = document.querySelectorAll('section.left input.guess');

let GenerateRandom = Math.floor(Math.random()*20);

console.log(GenerateRandom);

if(GenerateRandom == guess){
    console.log("your guessed is right")
} else{
    console.log("your guessed is wrong")
}