// const nav = document.querySelector('.nav');
// const navList = document.querySelector('.nav-list');
// const closeBtn = document.querySelector('.close');

// closeBtn.addEventListener('click', ()=>{
//   nav.classList.toggle('active')
// })

const navbar = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// click to top button script

const moveTop = document.querySelector(".top");

window.addEventListener("scroll", () => {
  var y = window.scrollY;

  if (y >= 700) {
    moveTop.classList.add("Topactive");
  } else {
    moveTop.classList.remove("Topactive");
  }
});

//Slider Section Code

let TotalSlider = 0;

const Sliders = document.querySelectorAll(".SliderImages");

console.log(Sliders);

// window.addEventListener("load", () => {
//   const lazyLoad = document.querySelector(".lazy-load");
//   lazyLoad.src = lazyLoad.dataset.src;
//   lazyLoad.addEventListener("load", () =>
//     lazyLoad.classList.remove("lazy-load")
//   );
// });
