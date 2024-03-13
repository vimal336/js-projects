const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', ()=>{
  nav.classList.toggle('active')
})

