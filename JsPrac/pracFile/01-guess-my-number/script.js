'use strict';

const button = document.querySelector('.check');





button.addEventListener('click', function() {
  console.log('Button clicked!');

  const guessInputs = document.querySelector('.guess').value;
  const message = document.querySelector('.message');

let GenerateRandom = Math.floor(Math.random()*20);

console.log(GenerateRandom);

if(GenerateRandom == guessInputs){
   message.innerText="Correct guess"
} else{
    console.log("your guessed is wrong")
}


});
