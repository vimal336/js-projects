'use strict';

const button = document.querySelector('.check');
const message = document.querySelector('.message');
const main = document.querySelector('main');
let highscore = document.querySelector('.highscore');
const guessInputs = document.querySelector('.guess').value;

button.addEventListener('click', function() {
  console.log('Button clicked!');
  console.log(guessInputs);
  console.log(highscore);


let GenerateRandom = Math.floor(Math.random()*20);
console.log(GenerateRandom);

if(GenerateRandom == guessInputs){
   message.innerText="Correct guess";
   main.style.backgroundColor ="green";
   highscore.innerText = `${guessInputs}`; 
   
}else if(GenerateRandom < guessInputs){
    message.innerText="too low";
    main.style.backgroundColor ="orange";
    highscore.innerText = `${guessInputs}`; 
}

else if(GenerateRandom > guessInputs){
    message.innerText="too high";
    main.style.backgroundColor ="red";
    highscore.innerText = `${guessInputs}`; 
}

});
