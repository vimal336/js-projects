//Object

//constructor

//constructor is a special method for defining the properties and objects

class car{
    constructor(model,price,color){
        this.model = model;
        this.price = price;
        this.color = color;
    }

    getname = function(){
        console.log(this.model);
    }
}

let car1 = new car("bmw","2c","white");

console.log(car1.price);
car1.getname();


//super keyword

class schoolstudents{
    constructor(student,age,std){
        this.student = student;
        this.age = age;
        this.std = std;
    }
}

class school extends schoolstudents(){
    constructor(){
        super()
    }
}


