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
    constructor(name1,name2,name3,breed) {
      super(name1, name2, name3);
      this.breed = breed;
    }
  
    speak() {
      console.log(`${this.name1} barks ${this.age2} contact id : ${this.email3}`);
    }
  }
  
  const dog1 = new Tiger("alabai",22, "dubai breed");
  console.log(dog1.email3);
  dog1.speak();

