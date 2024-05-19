function one(to) {
  console.log("call one");
  to();
}

one(two);

function two() {
  console.log("call two");
}

//callback function

function add(a, b) {
  return a + b;
}

function div(a, b) {
  return a / b;
}

function cb(a, b, operation) {
  return operation(a, b);
}

console.log(cb(2, 2, add));
console.log(cb(2, 2, div));



//callback example 2

function greet(name, callback) {
  console.log("Hello, " + name + "!");
  callback(); // Call the callback function
}

function sayGoodbye() {
  console.log("Goodbye!");
}

// Call the greet function with a callback function
greet("John", sayGoodbye);

function fun1(fun2){
  console.log("fun1")
  fun2();
}

function fun2(){
  console.log("fun2")
}

fun2();

//callback example 3

function execute(a, b, cb) {
  var add = a + b;
  cb(add);
}

execute(10, 20, function (add) {
  console.log(add / 2);
});

//callback hell

setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
      setTimeout(() => {
        console.log("4");
        setTimeout(() => {
          console.log("5");
        }, 5000);
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);
