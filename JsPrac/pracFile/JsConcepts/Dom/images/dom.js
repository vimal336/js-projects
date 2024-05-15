// DOM stands for Document Object Model. It is a programming interface 
// that allows us to create, change, or remove elements from the document. 

// We can also add events to these elements to make our page more dynamic.

// browser gives DOM API functions like getElemenyById(), createElement() etc..

// and this functions are not from javascript these all are provided by DOM API

// The DOM views an HTML document as a tree of nodes. A node represents an HTML element.

//Dom is not part of the js language but is instead a web api used to build websites.

// dom was designed to be independent of any particular prog lang.


let access = document.getElementById('access');
console.log(access.nodeType);

let dom = document.getElementsByClassName('dom');
console.log(dom);

let domtag = document.getElementsByTagName('p');
console.log(domtag);

let queryall = document.querySelectorAll('.dom');
console.log(queryall);

domtag[0].style.textAlign = 'center';

domtag[0].style.backgroundColor = "grey";
domtag[1].style.backgroundColor = "green";
domtag[1].style.color = "white";

//foreach not works in html collection but for loop only will work because html collection is not a array type

//example

for(let i=0; i< domtag.length; i++ ){
    domtag[i].style.backgroundColor = "green";
}

//example

//foreach only works in node list(queryselectorall and getelementbyname) because node list is a array type

queryall.forEach(element => {
    element.style.color = "white";
});

document // select entire html 
document.title = "dom practice"; // to change title
console.dir(document); // to get all properties

//Selecting Elements
document.getElementById() //returns an element object
document.getElementsByClassName() //returns an HTML collection
document.getElementsByTagName() //returns an html collection
document.querySelector() //returns an element object
document.querySelectorAll() //returns a nodelist
document.getElementsByName() //returns an nodelist


let parent = domtag.parentNode.style.backgroundColor = "blue";
