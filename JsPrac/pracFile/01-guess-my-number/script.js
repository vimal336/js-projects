'use strict';

const button = document.querySelector('.check');
const main = document.querySelector('main');
let highscore = document.querySelector('.highscore');
let score = 20;

const displayMessage = function(text){
  const message = document.querySelector('.message').textContent = text;
}

button.addEventListener('click', function () {
  let guessInputs = Number(document.querySelector('.guess').value);

  document.querySelector('.number').style.width = '30rem';

  // when guess input is not a number
  if (!guessInputs) {
    // message.textContent = 'No number';
    displayMessage('no number');
    return;
  }

  //Generate random number between 0 to 20
  let GenerateRandom = Math.trunc(Math.random() * 20);

  document.querySelector('.number').textContent = GenerateRandom;

     //When guess is correct
     GenerateRandom === guessInputs ? (
      displayMessage('correct Guess'),
      highscore++,
      main.style.backgroundColor = 'green'
  ) : (
      main.style.backgroundColor = '#530aff';
  );
  

   //When guess is low or high
    GenerateRandom > guessInputs ? displayMessage('too high') : displayMessage('too low');{
    if(score>1){
    main.style.backgroundColor = 'red';
    score--;
    document.querySelector('.score').textContent = score;
    }else{
      displayMessage('You lost the game'); 
      document.querySelector('.score').textContent = 0;
    }
  }
});


// game reset button
document.querySelector('.again').addEventListener('click', function () {
  
  let score = 20;
  displayMessage('Start Guessing...'); 
  main.style.backgroundColor ='#530aff';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  
})