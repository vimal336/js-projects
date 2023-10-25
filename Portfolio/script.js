// Script File

// Home Section Script Starts
var typingText = document.querySelector('.text2');
var myArray = 
["Web Developer"];
var arrayIndex = 1;

function textReplace(){
	setInterval(timer, 5000);
	function timer(){
		if(arrayIndex < myArray.length){
			typingText.innerHTML = myArray[arrayIndex];
			arrayIndex = arrayIndex + 1;
		}
		else{
			arrayIndex = 0;
			typingText.innerHTML = myArray[arrayIndex];
			arrayIndex = arrayIndex + 1;
		}
	}
}
textReplace();

var menuBtn = document.querySelector('.navbar .menu-btn');
var menuList = document.querySelector('.navbar .nav-list');
var menuListItems = document.querySelectorAll('.nav-list li a');

menuBtn.addEventListener('click', addActiveClass);

function addActiveClass(){
	menuList.classList.toggle('active');
}

for(var i = 0; i < menuListItems.length; i++){
	menuListItems[i].addEventListener('click', menuItemClicked);
}

function menuItemClicked(){
	menuList.classList.remove('active');
}


var homeSection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 80){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}


// scroll to top code

let calcScrollValue = () => {
	let scrollProgress = document.getElementById("progress");
	let progressValue = document.getElementById("progress-value");
	let pos = document.documentElement.scrollTop;
	let calcHeight =
	  document.documentElement.scrollHeight -
	  document.documentElement.clientHeight;
	let scrollValue = Math.round((pos * 100) / calcHeight);
	if (pos > 100) {
	  scrollProgress.style.display = "grid";
	} else {
	  scrollProgress.style.display = "none";
	}
	scrollProgress.addEventListener("click", () => {
	  document.documentElement.scrollTop = 0;
	});
	scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
