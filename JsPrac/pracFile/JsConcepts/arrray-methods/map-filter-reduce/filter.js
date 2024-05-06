// The filter method in JavaScript is designed as a higher-order function that iterates over each element of an array, 
// allowing developers to apply a specific condition to filter out elements.

// The filter method doesn't modify the original array, but instead creates and returns 
// a new array containing only the elements that meet the specified condition.



const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
// evenNumbers: [2, 4]


const filternum = numbers.filter((fil)=>{
    return fil >=2;
})

console.log(filternum);



function sum(a,b,cb){
 var result = a + b;
 cb(result);
}

function cb(r){
  console.log("result:" + r)
}

sum(10,20,cb);


const obj = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  
const unboundGetX = obj.getX; // Unbound function
  console.log(unboundGetX());
  
const boundGetX = unboundGetX.bind(null); // Binding with null
  
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(200));
console.log(addVAT(23));
