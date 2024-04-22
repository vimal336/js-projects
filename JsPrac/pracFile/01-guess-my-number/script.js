'use strict';

const button = document.querySelector('.check');
const message = document.querySelector('.message');
const main = document.querySelector('main');
let highscore = document.querySelector('.highscore');
let score = 20;

button.addEventListener('click', function () {
  let guessInputs = Number(document.querySelector('.guess').value);
  console.log(typeof guessInputs);
  console.log(highscore);

  if (!guessInputs) {
    message.textContent = 'No number';
    return;
  }

  let GenerateRandom = Math.trunc(Math.random() * 20);

  document.querySelector('.number').textContent = GenerateRandom;
    
    if (GenerateRandom == guessInputs) {
    message.innerText = 'Correct guess';
    main.style.backgroundColor = 'green';
    highscore.innerText = `${guessInputs}`;
  } else  
    if (GenerateRandom < guessInputs) {
    if(score>1){
    message.innerText = 'too low';
    main.style.backgroundColor = 'orange';
    highscore.innerText = `${guessInputs}`;
    score--;
    document.querySelector('.score').textContent = score;
    }
    else{
      message.innerText = 'You lost the game';
      document.querySelector('.score').textContent = 0;

    }
  } else if (GenerateRandom > guessInputs) {
    if(score>1){
    message.innerText = 'too high';
    main.style.backgroundColor = 'red';
    highscore.innerText = `${guessInputs}`;
    score--;
    document.querySelector('.score').textContent = score;
    }else{
      message.innerText = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});


again.addEventListener('click', function () {
 alert('again')
});
