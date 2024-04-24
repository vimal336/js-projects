'use strict';

//Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--role');
const btnHold = document.querySelector('.btn--hold');


//Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');

//Rolling Dice Functionality
btnRoll.addEventListener('click', function(){

let randomDice = Math.trunc(Math.random()*6) + 1;
console.log(randomDice);

diceEl.classList.remove('hidden');

if (randomDice === 1) {
    document.querySelector(".img1").src = "dice-1.png";
} else if (randomDice === 2) {
    document.querySelector(".img1").src = "dice-2.png";
} else if (randomDice === 3) {
    document.querySelector(".img1").src = "dice-3.png";
} else if (randomDice === 4) {
    document.querySelector(".img1").src = "dice-4.png";
} else if (randomDice === 5) {
    document.querySelector(".img1").src = "dice-5.png";
} else {
    document.querySelector(".img1").src = "dice-6.png";
}


});