'use strict';

const button = document.querySelector('.check');
const message = document.querySelector('.message');
const main = document.querySelector('main');
let highscore = document.querySelector('.highscore');

button.addEventListener('click', function() {

  let guessInputs = Number(document.querySelector('.guess').value);
  console.log(typeof guessInputs);
  console.log(highscore);

if (!guessInputs) {
message.textContent = 'No number';
return;
}


let GenerateRandom = Math.trunc(Math.random()*20);

let score = 20;

document.querySelector('.number').textContent = GenerateRandom;

if(GenerateRandom == guessInputs){
   message.innerText="Correct guess";
   main.style.backgroundColor ="green";
   
}else if(GenerateRandom < guessInputs){
    message.innerText="too low";
    main.style.backgroundColor ="orange";
}

else if(GenerateRandom > guessInputs){
    message.innerText="too high";
    main.style.backgroundColor ="red";
}

});
