// const nav = document.querySelector('.nav');
// const navList = document.querySelector('.nav-list');
// const closeBtn = document.querySelector('.close');

// closeBtn.addEventListener('click', ()=>{
//   nav.classList.toggle('active')
// })


const navbar = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', ()=>{
  navbar.classList.toggle('active')
})

hamburger.addEventListener('click', ()=>{
  navbar.classList.toggle('active')
})






// window.addEventListener("load", () => {
//   const lazyLoad = document.querySelector(".lazy-load");
//   lazyLoad.src = lazyLoad.dataset.src;
//   lazyLoad.addEventListener("load", () =>
//     lazyLoad.classList.remove("lazy-load")
//   );
// });


