const nav = document.querySelector('.nav');

const navList = document.querySelector('.nav-list');

nav.addEventListener('click', ()=>{
  navList.classList.toggle('active')
})