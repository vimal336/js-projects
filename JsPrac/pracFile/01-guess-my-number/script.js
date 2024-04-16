'use strict';

const button = document.querySelector('.check');
const guessInputs = document.querySelector('.guess').value;
const message = document.querySelector('.message');
const main = document.querySelector('main');
let highscore = document.querySelector('.highscore').textContent;

button.addEventListener('click', function() {
  console.log('Button clicked!');


  let GenerateRandom = Math.floor(Math.random()*20);
  console.log(GenerateRandom);

if(GenerateRandom == guessInputs){
   message.innerText="Correct guess";
   main.style.backgroundColor ="green";
   highscore =`${guessInputs}`;
   
}else if(GenerateRandom < guessInputs){
    message.innerText="too low";
    main.style.backgroundColor ="#c600d5";
    highscore =`${guessInputs}`;
}

else if(GenerateRandom > guessInputs){
    message.innerText="too high";
    main.style.backgroundColor ="blue";
    highscore =`${guessInputs}`;
}

});
