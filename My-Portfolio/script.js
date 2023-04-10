// JavaScript Code

var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", activeClass);

function activeClass() {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
}

const moveTop = document.querySelector('.top');
 
window.addEventListener('scroll', () => {

var y = window.scrollY;

if(y >= 700){
  moveTop.classList.add('Topactive');
} else{
  moveTop.classList.remove('Topactive');
}


});
