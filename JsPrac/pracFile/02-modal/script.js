'use strict';

let modalButtons = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.close-modal');

modalButtons.forEach((button) => {
    button.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });
});



// for(let i=0; i<=modalButtons.length; i++)
//   modalButtons[i].addEventListener('click', function(){
//   modal.classList.remove('hidden');
// });
  