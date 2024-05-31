//In JavaScript, a class is a blueprint for creating objects with predefined properties and methods. 

//Class Definition:
//A class in JavaScript is defined using the class keyword followed by the class name. Inside the class, 
//you can define a constructor method to initialize the object’s properties and other methods to define its behavior.

//example(class declaration)
class classname{
    a = 10; //fields(no need to specify type)
    add(){
        console.log("addition"); //no need to give function keyword inside class
    }
}

//class is a collection of fields

class Employee{
    employeeName = 'vimal';
}

//creating object for class
let employee = new Employee();

console.log(employee.employeeName);

//changing employee name

employee.employeeName="raj";

console.log(employee.employeeName);

let employee2 = new Employee();

employee2.employeeName = "Raghul";

console.log(employee2.employeeName);

//adding function in class

class Student{
    studentName = 'prabhu';
    print(){
        console.log(this.studentName);
    }
}
console.log(Student.studentName)


//currying

function arithmetic(a){
  return function(b){
    return function(c){
        return a+b+c;
    }
  }

}
 console.log(arithmetic(1)(2)(3));