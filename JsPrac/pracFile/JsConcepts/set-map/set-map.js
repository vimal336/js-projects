// In JavaScript, a Set is a built-in object that allows you to store unique values of any type, 
// whether primitive values or object references. 
// A Set object can only contain unique elements; duplicates are ignored.


const mySet = new Set([1, 2, 3, 3]);
console.log(mySet); // Output: Set { 1, 2, 3 }


mySet.add(4);
console.log(mySet); // Output: Set { 1, 2, 3, 4 }

mySet.delete(2);
console.log(mySet); // Output: Set { 1, 3, 4 }


let setobj = {a:1, b:2};

mySet.add(setobj);

console.log(mySet);


// Set unique value ony for primitive data types only 

let setobj2 = {a:1, b:2};

mySet.add(setobj2);

console.log(mySet);

//Map//

// Map is a built-in object that allows you to store key-value pairs, 
// where both the keys and the values can be of any data type. 
// This makes Map a more flexible alternative to plain objects 
// when you need to associate arbitrary values with keys.

const myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);

// Or using an iterable of key-value pairs
// const myMap = new Map([["name", "John"], ["age", 30]]);


console.log(myMap.get("name")); // Output: "John"
myMap.set("age", 31);
console.log(myMap.get("age")); // Output: 31


console.log(myMap.has("name")); // Output: true
console.log(myMap.has("gender")); // Output: false


//Iterating Over a Map:


//You can iterate over the entries of a Map using a for...of loop or using the forEach() method.


for (const [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}

myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});



function names(){
    console.log("hello")
}

names();

