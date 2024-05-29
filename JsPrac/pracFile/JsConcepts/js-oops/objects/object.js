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
        console.log(`${this.student} gfgfdfgdg`)
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
console.log(schoolstudents.staticvar)


//creating wrapper class using primitive data types

let wrap = new String("wrapper class")

console.log(wrap);

