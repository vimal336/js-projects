//Object

//constructor

//constructor is a special method for defining the properties and objects

class car{
    constructor(model,price,color){
        this.model = model;
        this.price = price;
        this.color = color;
    }
}

let car1 = new car("bmw","2c","white");

console.log(car1.price);