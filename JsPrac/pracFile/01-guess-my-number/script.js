'use strict';


const guessInputs = document.querySelector('input[type= "number"]').value;

console.log(guessInputs);

let GenerateRandom = Math.floor(Math.random()*20);

console.log(GenerateRandom);

if(GenerateRandom == guessInputs){
    console.log("your guessed is right")
} else{
    console.log("your guessed is wrong")
}