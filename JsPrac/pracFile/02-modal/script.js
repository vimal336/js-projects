'use strict';

let modalButtons = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let closeModal = document.querySelector('.close-modal');

modalButtons.forEach((button) => {
    button.addEventListener('click', () => {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
});



    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    });



// for(let i=0; i<=modalButtons.length; i++)
//   modalButtons[i].addEventListener('click', function(){
//   modal.classList.remove('hidden');
// });
  