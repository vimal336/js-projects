'use strict';


const guessInputs = document.querySelector('.left .guess');

console.log(inputNumber.value);


console.log(guessInputs.value);

let GenerateRandom = Math.floor(Math.random()*20);

console.log(GenerateRandom);

if(GenerateRandom == guessInputs){
    console.log("your guessed is right")
} else{
    console.log("your guessed is wrong")
}