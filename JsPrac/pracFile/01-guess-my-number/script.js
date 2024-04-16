'use strict';

const button = document.querySelector('.check');





button.addEventListener('click', function() {
  console.log('Button clicked!');

  const guessInputs = document.querySelector('guess').value;
  console.log(guessInputs);

let GenerateRandom = Math.floor(Math.random()*20);

console.log(GenerateRandom);

if(GenerateRandom == guessInputs){
    console.log("your guessed is right")
} else{
    console.log("your guessed is wrong")
}


});
