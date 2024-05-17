// DOM stands for Document Object Model. It is a programming interface
// that allows us to create, change, or remove elements from the document.

// We can also add events to these elements to make our page more dynamic.

// browser gives DOM API functions like getElemenyById(), createElement() etc..

// and this functions are not from javascript these all are provided by DOM API

// The DOM views an HTML document as a tree of nodes. A node represents an HTML element.

//Dom is not part of the js language but is instead a web api used to build websites.

// dom was designed to be independent of any particular prog lang.

let btnremove = document.querySelectorAll(".Btn-remove");

btnremove.forEach((btn) => {
  btn.addEventListener("click", buttonremove);
});

console.log(btnremove);

function buttonremove() {
  const tr = this.parentNode.parentNode;
  // tr.remove();
  let tabdata = tr.childNodes[5];
  console.log(tabdata);
  tr.removeChild(td);
}

//cloneNode

let h4tag = document.querySelector("h4");
console.log(h4tag);
h4tag.style.backgroundColor = "yellow";
h4tag.style.border = "1px solid black";
h4tag.style.textAlign = "center";

let cloneNodeMEthod = h4tag.cloneNode(true);

//selecting section to clone that h4tag

let selectSection = document.querySelector('section');

console.log(selectSection);

console.log(cloneNodeMEthod);

// create Element

let creatEle = document.createElement("h3");

//innerText is a property that represents the visible text content within an element,
creatEle.innerText = "<i>Create Element Method<i>";

//while innerHTML is a property that represents the HTML content within an element, including its tags.
creatEle.innerHTML = "<i>Create Element Method<i>";

creatEle.style.color = "black";
creatEle.style.textAlign = "center";
console.log(creatEle);

// Append element

let appendEle = document.body.append(creatEle);

// selecting closest section in dom

const closestmethod = document.querySelector("h1");
const closestParent = closestmethod.closest("section");

console.log(closestmethod);
console.log(closestParent);

//Selecting parentnode

let h2tag = document.getElementsByTagName("h2");
console.log(h2tag);

let parent = h2tag[0].parentNode;

console.log(parent);

parent.style.margin = "1rem";

h2tag[0].parentNode.style.backgroundColor = "grey";

//selecting child node  or //selecting first child element

let child = parent.firstChild;

console.log(child);

//when we use firstchild lastchild method If any empty space there, it will select a text node

//So we have to give FirstElementChild not firstChild also LastElementChild not lastchild

//same concept apply for nextsiblings previoussiblings and nextelementsiblings, previouselementsiblings.

//example:

//selecting previous siblings and prev element siblings

let prevElementsiblings = document.getElementsByTagName("p")[4];
console.log(prevElementsiblings);

console.log(prevElementsiblings.previousSibling);

console.log(prevElementsiblings.previousElementSibling);

//selecting next siblings and next element siblings

let nextElementsiblings = document.getElementsByTagName("h2")[0];
console.log(nextElementsiblings);

console.log(nextElementsiblings.nextSibling);

console.log(nextElementsiblings.nextElementSibling);

//selecting firstchildElement
let firstchildElement = parent.firstElementChild;

console.log(firstchildElement);

//selecting lastchildElement
let lastchildElement = parent.lastElementChild;

console.log(lastchildElement);

//selecting body child
let bodytag = document.body.lastElementChild;

console.log(bodytag);

let h1tag = document.getElementsByTagName("h1");
console.log(h1tag);

h1tag[0].style.textAlign = "center";

let h1parent = (h1tag[0].parentNode.style.padding = "1.5rem");
console.log(h1parent);

h1tag[0].parentNode.style.backgroundColor = "palegreen";

//checking Nodetype
let access = document.getElementById("access");
console.log(access.nodeType);

//selecting Elements
let dom = document.getElementsByClassName("dom");
console.log(dom);

let domtag = document.getElementsByTagName("p");
console.log(domtag);

let queryall = document.querySelectorAll(".dom");
console.log(queryall);

domtag[0].style.textAlign = "center";

domtag[0].style.backgroundColor = "grey";
domtag[1].style.backgroundColor = "green";
domtag[1].style.color = "white";

//foreach not works in html collection but for loop only will work because html collection is not a array type

//example

for (let i = 0; i < domtag.length; i++) {
  domtag[i].style.backgroundColor = "green";
  domtag[i].style.textAlign = "center";
}

//example

//foreach only works in node list(queryselectorall and getelementbyname) because node list is a array type

queryall.forEach((element) => {
  element.style.color = "white";
});

document; // select entire html
document.title = "dom practice"; // to change title
console.dir(document); // to get all properties

//Selecting Elements
document.getElementById(); //returns an element object
document.getElementsByClassName(); //returns an HTML collection
document.getElementsByTagName(); //returns an html collection
document.querySelector(); //returns an element object
document.querySelectorAll(); //returns a nodelist
document.getElementsByName(); //returns an nodelist
