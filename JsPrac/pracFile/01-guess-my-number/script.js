'use strict';

const button = document.querySelector('.check');
const message = document.querySelector('.message');
const main = document.querySelector('main');
let highscore = document.querySelector('.highscore');
let score = 20;

button.addEventListener('click', function () {
  let guessInputs = Number(document.querySelector('.guess').value);

  document.querySelector('.number').style.width = '30rem';

  // when guess input is not a number
  if (!guessInputs) {
    message.textContent = 'No number';
    return;
  }

  //Generate random number between 0 to 20
  let GenerateRandom = Math.trunc(Math.random() * 20);

  document.querySelector('.number').textContent = GenerateRandom;

     //When guess is correct
    if (GenerateRandom == guessInputs) {
    message.innerText = 'Correct guess';
    highscore++;
    main.style.backgroundColor = 'green';
  } 

   //When guess is low or high
   if (message.innerText = GenerateRandom > guessInputs ? 'too high' : 'too low') {
    if(score>1){
    main.style.backgroundColor = 'red';
    score--;
    document.querySelector('.score').textContent = score;
    }else{
      message.innerText = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});


// game reset button
document.querySelector('.again').addEventListener('click', function () {
  
  let score = 20;
  message.textContent = 'Start guessing...';
  main.style.backgroundColor ='#530aff';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  
})