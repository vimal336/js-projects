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

let clg2 = new collegestudents("vimal", 'rkvm');
let clg3 = new college("vasanth", 'rkvm');
let clg4 = new college("vasanth", 'rkvm');

console.log(clg2.getname);

console.log(clg2);

console.log(clg3.clg());
console.log(collegestudents.staticvar); //static variables
college.staticvariable();
college.staticvariable();
college.staticvariable();



function add(...args){
  let total = 0;
  for (let i = 0; i < args.length; i++) {
      total *= args[i];
  }
  return total
}
console.log(add(1,2,3,4,5))

let a = [1,2,3,4,5,5];

let reducemethod =  a.reduce((acc,prev)=>{
       return sum = acc+prev
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

let mapdata = arraymeth.find(()=>{
  console.log()
})

