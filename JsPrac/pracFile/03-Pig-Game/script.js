'use strict';


const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore = document.querySelector('.current-score');


//Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');

//Rolling Dice Functionality
btnRoll.addEventListener('click', function(){

let randomDice = Math.trunc(Math.random()*6) + 1;

diceEl.classList.remove('hidden');

diceEl.src = `dice-${randomDice}.png`;

let p1 = randomDice + 0;

currentScore.textContent = p1;

});

