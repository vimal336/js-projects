// JavaScript Code

var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", activeClass);

function activeClass() {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
}
