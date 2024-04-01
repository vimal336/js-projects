// Nav bar active bacgroundcolor
const activePage = window.location.pathname;
console.log(activePage)
const navLinks = document.querySelectorAll('.nav-list a');
console.log(navLinks)
navLinks.forEach(link => {
    if(link.href.includes(activePage)) {
        link.classList.add('activebg');
    }
});


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

//--------------------------------Slider Section Code------------------------------------------//

let slidePosition = 0;
const sliders = document.querySelectorAll('.slider-images');
const totalSlider = sliders.length;
const btnPrev = document.querySelector('.slider-right');
const btnNext = document.querySelector('.slider-left');

// Update slide position and show two images at a time
function updatePosition() {
  sliders.forEach((slide, index) => {
    if (index >= slidePosition && index < slidePosition + 2) {
      slide.classList.add('show');
      slide.classList.remove('hidden');
    } else {
      slide.classList.remove('show');
      slide.classList.add('hidden');
    }
  });
}

// Move to the previous slide
function PrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlider - 1;
  } else {
    slidePosition--;
  }
  updatePosition();
}

// Move to the next slide
function NextSlide() {
  if (slidePosition === totalSlider - 2) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updatePosition();
}

btnPrev.addEventListener('click', PrevSlide);
btnNext.addEventListener('click', NextSlide);

// Initial position setup
updatePosition();


//--------------------------------Slider Section Code ends------------------------------------------//


//Tab-Section

const navtab = document.querySelector("#nav-tab");

navtab.addEventListener('click', tabclick);

function tabclick(event) {

const openingTabs = document.querySelectorAll('.opening');

openingTabs.forEach((tab)=>{
  tab.classList.remove('opening');
});

const pages = document.querySelectorAll('.tab-page');

pages.forEach((page)=>{
  page.classList.remove('page-opening');
});

event.target.parentElement.classList.add('opening');

let id = event.target.href.split("#")[1];
const page=document.getElementById(id);
page.classList.add('page-opening');
}



