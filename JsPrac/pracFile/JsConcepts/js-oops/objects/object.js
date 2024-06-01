//Object

//constructor

//constructor is a special method for defining the properties and objects

// class car{
//     constructor(model,price,color){
//         this.model = model;
//         this.price = price;
//         this.color = color;
//     }

//     getname = function(){
//         console.log(this.model);
//     }
// }

// let car1 = new car("bmw","2c","white");

// console.log(car1.price);
// car1.getname();


//super keyword

// class Schoolstudents{
//     constructor(student){
//         this.student = student;
//         // this.age = age;
//         // this.std = std;
//     }
//     dd(){
//         console.log(`${this.student} gfgfdfgdg`)
//     }
// }

// class School extends Schoolstudents(){
//     constructor(student,schoolname){
//         super(student);
//         this.schoolname = schoolname;
//     }
//     dd(){
//         return this.student;
//     }
    
// }

// let stu1 = new School("vim", 'gfyhgfhg');



// console.log(stu1.dd());



// console.log("h");

// class Schoolstudents {
//     constructor(student) {
//         this.student = student;
//         // this.age = age;
//         // this.std = std;
//     }
//     dd() {
//         console.log(`${this.student} is studying in class.`);
//     }
// }
// class School extends Schoolstudents {
//     constructor(student,schoolname) {
//         super(student);
//         this.schoolname = schoolname;
//     }
// }
// let stu1 = new School("Vimal", "ABC High School");
// stu1.dd();




class schoolstudents{
    static staticvar = 0;
    constructor(student){
        schoolstudents.staticvar++;
        this.student = student;
        // this.age = age;
        // this.std = std;
    }
    dd(){
        console.log(`${this.student} `)
    }

    staticmethod(){
        console.log(` static method:${schoolstudents.staticvar} `)
    }
}

class School extends schoolstudents{
    constructor(student,schoolname){
        super(student);
        this.schoolname = schoolname;
    }
    dd(){
        return this.student;
    }
    
}

let stu2 = new School("vimal", 'school name:rkvm');
let stu3 = new School("vasanth", 'school name:rkvm');


console.log(stu2.dd());
console.log(schoolstudents.staticvar) //static variables
// console.log(schoolstudents.staticmethod());


//creating wrapper class using primitive data types

let wrap = new String("wrapper class")

console.log(wrap);



class Animal {
    constructor(name, age, email) {
      this.name1 = name;
      this.age2 = age;
      this.email3 = email;
    }
  
    speak() {
      console.log(`${this.name1} makes a noise`);
    }
  }
  
  // Derived class (Child)
  
  class Tiger extends Animal {
    static animalCount = 0;
    constructor(name1,name2,name3,breed) {
      super(name1, name2, name3);
      this.breed = breed;
    }
    speak() {
      console.log(`${this.name1} barks ${this.age2} contact id : ${this.email3}`);
    }
    static animalnumber() {
        console.log(Tiger.animalCount++); //static method
      }
  }
  
  const dog1 = new Tiger("alabai",22, "dubai breed");
  const dog2 = new Animal("tiger",4,"ROAR");
  console.log(dog2);
  console.log(dog1.email3);
  dog1.speak();
  Tiger.animalnumber();

const dog4 = new Tiger("dog",2,"hello","b");

console.log(dog4);

Tiger.animalnumber();
Tiger.animalnumber();
Tiger.animalnumber();



//------------------------------------------getter setter---------------------------------------//

class collegestudents{
  static staticvar = 0;
  constructor(student){
      collegestudents.staticvar++;
      this.student = student;
  }

  name = "vimal";

  set clg(name){
      this.name = name;
  }

  get getname(){
    return this.name;
  }

  staticmethod(){
      console.log(` static method:${collegestudents.staticvar} `)
  }
}

class college extends collegestudents{
  constructor(student,collegename){
      super(student);
      this.collegename = collegename;
  }
  clg(){
      return (`student:${this.student} college name:${this.collegename}`);
  }

  static staticvariable(){ //static method
    console.log(collegestudents.staticvar++)
  }
  
}

let clg2 = new collegestudents("vimal");
let clg3 = new college("vasanth", 'rkvm');
let clg4 = new college("vasanth", 'rkvm');

console.log(clg2.getname);

console.log(clg2);

console.log(clg3.clg());
console.log(collegestudents.staticvar); //static variables
college.staticvariable();





function add(...args){
  let total = 0;
  for (let i = 0; i < args.length; i++) {
      total += args[i];
  }
  return total
}
console.log(add(1,2,3,4,5))

let a = [1,2,19,4,5,5];

let reducemethod =  a.reduce((acc,prev)=>{
       return acc+prev
});

console.log(reducemethod);

function sums(...rest){
 return rest.reduce((acc,prev)=>{
      return acc * prev;
  })
}

console.log(sums(1,2,3,4,5));



let arr = {
  value0:"1",
  value1:"2",
}

let ar = JSON.stringify(arr);

let mt = JSON.parse(ar);

console.log(typeof mt);


// Date Object having date and time
const currentDate = new Date()

// date object's string value
const currentDate_String = currentDate.toString()

console.log(currentDate_String);


//2d array

let twodarray = [[1,2,3],
                [4,5,6],
                [7,8,9]]

console.log(twodarray[1][2]);

let sumarr  = 0; 

twodarray.forEach((row)=>{
    row.forEach((col)=>{
      sumarr += col;
    })
})

console.log(sumarr);

let numberArr = [
  [10, 20, 60],
  [8, 10, 52],
  [15, 5, 24],
  [26, 28, 43],
  [12, 16, 51]
];

//sum of 2d array

var sum = 0;
numberArr.forEach((row) => {
  row.forEach((element) => {
    sum += element;
  });
});
console.log(sum); 


let proms = new Promise((resolve,reject)=>{
  if([]){
    resolve("resolved1");
  }else{
    reject("rejected");
  }
});

let proms1 = new Promise((resolve,reject)=>{
  if([]){
    resolve("resolved2");
  }else{
    reject("rejected");
  }
});


let proms2 = new Promise((resolve,reject)=>{
  if([]){
    resolve("resolved3");
  }else{
    reject("rejected");
  }
});

Promise.allSettled([proms],[proms1],[proms2]).then((message)=>{
 console.log(message);
}).catch((error)=>{
 console.log(error);
}).finally(console.log("finshed"))


async function fetchData() {
  try {
      let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      let data = await response.json();
      console.log(data);
  } catch (error) {
      console.error('Error:', error);
  }
}

console.log(fetchData()) ;


async function fetchDatas(){
  try{
  let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let data = await response.json();
  console.log(data);
  }
  catch(error){
   console.log(error);
  }
  finally{
    console.log("solved")
  }
} 

fetchDatas();

let arraymeth = [1,2,3,6,5,6];

let arraymeth2 = [1,9,[3,[6,8,8]],5,6];

let arraymerge = arraymeth2.flat(1)

console.log(arraymerge);

let filterdata = arraymeth.filter((filtering)=>{
      return filtering%2==0;
})

console.log(filterdata);

//switch case

let score = 85;

switch (true) {
  case (score >= 90):
    console.log('Grade: A');
    break;
  case (score >= 80):
    console.log('Grade: B');
    break;
  case (score >= 70):
    console.log('Grade: C');
    break;
  case (score >= 60):
    console.log('Grade: D');
    break;
  default:
    console.log('Grade: F');
}


let maxmeth = [3,4,2,9,34];

let maxnum = Math.max(1,4,53,32,45,66);

console.log(maxnum);


let numbers = [3, 4, 2, 9, 34];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [2, 3, 4, 9, 34]

function flatten2DArray(arr) {
  return arr.reduce((acc, curr) => acc.concat(curr), []);
}

let matrix1 = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];

console.log(flatten2DArray(matrix1)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]


function findMaxIn2DArray(arr) {
  let max = arr[0][0];
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
          if (arr[i][j] > max) {
              max = arr[i][j];
          }
      }
  }
  return max;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(findMaxIn2DArray(matrix)); // Output: 9

function findMinIn2DArray(arr) {
  let min = arr[0][0]; // Initialize min with the value of the first element

  // Iterate through each element in the 2D array
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
          if (arr[i][j] < min) {
              min = arr[i][j]; // Update min if a smaller value is found
          }
      }
  }

  return min;
}

// Example 2D array
let matrixmin = [
  [1, 4, 3],
  [5, 1, 7],
  [2, 8, 6]
];

console.log(findMinIn2DArray(matrixmin)); // Output: 1

let string = "saravanan";

let caps = string.charAt(0).toUpperCase();
let caps1 = caps.slice(1) + caps
console.log(caps);


//first letter case

let caps2 = string.charAt(0).toUpperCase()+string.slice(1);
console.log(caps2);


//palindrome
function palindrome(arr){
  let newarr = arr.split("").reverse().join("")
  if(arr===newarr){
    console.log("palindrome")}
    else{
      console.log("not a palindrome")
    }
  }

palindrome("madam");



let arra = [];
let rows = 4;
let columns = 3;

// creating two-dimensional array
for (let i = 0; i < rows; i++) {
  arra[i] = [];
  for (let j = 0; j < columns; j++) {
    arra[i][j] = j;
  }
}

console.log(arra);



let twoarr = [];

let rowsnum =4;

let colnum = 3;

for(let i=0;i<rowsnum;i++){
  twoarr[i] = [];
  for(let j=0;j<colnum;j++){
    twoarr[i][j]=j;
  }
}
console.log(twoarr);

let findindex = [1, 3, 8, 45, 56, 7];
let finding = findindex.findIndex(element => element === 45);

console.log(finding);



let includesmethod = ["1","3","4"];
let findinclude = includesmethod;

console.log(findinclude);


let sathiyam = new Promise((resolve,reject)=>{
  if(false){
    resolve("resolved");
  }else{
    reject("rejected");
  }
});


let sathiyam1 = new Promise((resolve,reject)=>{
  if(false){
    resolve("resolved");
  }else{
    reject("rejected");
  }
});


let sathiyam2 = new Promise((resolve,reject)=>{
  if(false){
    resolve("resolved");
  }else{
    reject("rejected");
  }
});


let sathiyam3 = new Promise((resolve,reject)=>{
  if(true){
    resolve("resolved");
  }else{
    reject("rejected");
  }
});


Promise.allSettled([sathiyam],[sathiyam1],[sathiyam3]).then((message)=>{
 console.log(message);
}).catch((error)=>{
 console.log(error);
}).finally(console.log("finally finished"));


async function asyncfunc(){
  try{
   let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
   let data = await res.json();
   console.log(data);
  } 

  catch(error) {
    console.log('error',error);
  }
}

asyncfunc();



class fruit{
  constructor(fruitname,fruitcolor){
    this.fruitname = fruitname;
    this.fruitcolor = fruitcolor;
  }
  set getfunc(setfruitname){
    console.log(this.setfruitname = setfruitname);
  }

  print(){
    console.log(`sdbfjhdbfs ${this.setfruitname}`)
  }
}

class guava extends fruit{
  static stativar = 0;
  constructor(fruitname,fruitcolor,fruitweight){
    guava.staticvar++
    super(fruitname,fruitcolor)
    this.fruitweight = fruitweight;
    this.fruitname = fruitname;
    this.fruitcolor = fruitcolor;
  }

  fruits(){
    console.log(`fruit name:${this.fruitname}kg:${this.fruitweight}`)
  }


  get getfun(){
    console.log(this.fruitcolor) 
  }

 

  // fruitsset(){
  //   console.log(`fruit name:${this.setfruitname}`)
  // }
  


}

let fruit1 = new fruit("guava","green");
console.log(fruit1); 

fruit1.getfunc ="grape";
fruit1.print();

let guavafruit = new guava("guava","green","50");

console.log(guavafruit)

guava.stativar();


let fore = [4,45,67,666];

fore.forEach((i)=>{
 console.log(i);
})

// console.log(fore);