'use strict';

let modalButtons = document.querySelectorAll('.show-modal');
let modal = document.querySelectorAll('.modal');

modalButtons.forEach((button) => {
      console.log(button.textContent);
  });


for(let i=0; i<=modalButtons.length; i++){
  modalButtons[i].addEventListener('click', function(){

  console.log('clicked')
})
};
  