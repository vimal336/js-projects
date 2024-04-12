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

var a1 = "A",
  a2 = "a",
  b1 = "B",
  b2 = "b",
  c1 = "C",
  c2 = "c",
  d1 = "D",
  d2 = "d",
  e1 = "E",
  e2 = "e",
  n1 = "N",
  n2 = "n";
function Mad() {
  //select some variable to combine "Dad"
  let dad = b1 + a2 + d2;
  return dad;
}
console.log(Mad());

const students = {
  names: "vasanth",
  age: 20,
  id: 101,
  rollno: 1001,
};

function studentdata(...info) {
  console.log(info);
}

studentdata(students.names, students.id, students.age, students.rollno);

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores

let calcAverage = (s1, s2, s3) => {
  let score = (s3 + s2 + s1) / 3;
  return score;
};

let calcAverage2 = (s1, s2, s3) => {
  let score2 = (s3 + s2 + s1) / 3;
  return score2;
};

let checkWinner = (avg1, avg2) => {
  if (avg1 >= 2 * avg2) {
    return "Dolphins win!";
  } else if (avg2 >= 2 * avg1) {
    return "Koalas win!";
  } else {
    return "It's a draw!";
  }
};

let avgDolhins = calcAverage(80, 20, 50);


let avgKoalas = calcAverage2(80, 30, 60);


console.log(checkWinner(avgDolhins, avgKoalas));