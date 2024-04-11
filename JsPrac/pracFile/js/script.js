console.log("js concepts practice");

function learnToDebug() {
  console.log("Learning to debug");
  return first();
}

function first() {
  console.log("First function");
  second();
  return 100;
}

function second() {
  console.log("Second function");
}

let result = learnToDebug();
console.log(result);


//problem 1

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300


let bills = 275;

let tip = 0;

if (bills >= 50 && bills <= 300) {
  tip = bills * 0.15;
  total = tip + bills;
} else {
  tip = bills * 0.2;
  total = tip + bills;
}

console.log("tip amount: rs" + tip);

console.log("Total amount including tip: rs" + total);
