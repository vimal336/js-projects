'use strict';

let modalButtons = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let closeModal = document.querySelector('.close-modal');


const commonOpenModals = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

modalButtons.forEach(button => {
button.addEventListener('click', commonOpenModals);
});
  
const commonCloseModals = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModal.addEventListener('click', commonCloseModals);
overlay.addEventListener('click', commonCloseModals);


// for(let i=0; i<=modalButtons.length; i++)
//   modalButtons[i].addEventListener('click', function(){
//   modal.classList.remove('hidden');
// });

// for(let i=0; i<=modalButtons.length; i++)
//   modalButtons[i].addEventListener('click', function(){
//   modal.classList.remove('hidden');
// });

document.addEventListener('keydown', function(e){
//  console.log('A key was pressed')
console.log(e.key);
});



