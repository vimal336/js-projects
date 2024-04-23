'use strict';

let modalButtons = document.querySelectorAll('.show-modal');

modalButtons.forEach((modals) => {
    modals.addEventListener('click', () => {
        modals.classList.remove('hidden');
    });
  });