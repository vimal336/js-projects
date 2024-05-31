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
