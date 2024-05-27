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