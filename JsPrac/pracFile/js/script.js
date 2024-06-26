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
    return "Dolhins win!";
  } else if (avg2 >= 2 * avg1) {
    return "Koalas win!";
  } else {
    return "It's draw!";
  }
};

let avgDolhins = calcAverage(80, 80, 80);
console.log(avgDolhins);

let avgKoalas = calcAverage2(20, 30, 20);
console.log(avgKoalas);

console.log(checkWinner(avgDolhins, avgKoalas));

const ArrayMethods = ["one", "two", "three", "four", 7];

// newPush = ArrayMethods.push('five');
// console.log(ArrayMethods);
// console.log(newPush);

const unshiftMethod = ArrayMethods.unshift("Zero");
console.log(unshiftMethod);
console.log(ArrayMethods);

// push adds elements to the end of an array, while unshift adds elements to the beginning of an array.

//shift removes the first element from an array, while unshift adds elements to the beginning of an array.

//includes method in JavaScript is used to check whether an array includes a certain value among its elements.
//It returns true if the array contains the specified value, and false otherwise.

let includesMethod = ArrayMethods.includes(7);
console.log(includesMethod);

// Coding Challenge #2

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array)
// GOOD LUCK

let Arraybills = [100, 555, 44];

let Arraytip = 0;

if (Arraybills[0] >= 50 && Arraybills[0] <= 300) {
  Arraytip = Arraybills[0] * 0.15;
  arraytotal = Arraytip + Arraybills[0];
} else {
  Arraytip = Arraybills[0] * 0.2;
  arraytotal = Arraytip + Arraybills[0];
}

console.log("tip amount: rs" + Arraytip);

console.log("Total amount including tip: rs" + arraytotal);

// Coding Challenge #3

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)

// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it from the method

// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

miller = {
  fullname: "Mark Miller",
  mass: "50",
  height: "180",
  calcBmi: function () {
    const bmi = this.mass / (this.height / 100) ** 2;
    return bmi;
  },
};

smith = {
  fullname: "John Smith",
  mass: 60,
  height: 160,
  calcBmi: function () {
    const bmi = this.mass / (this.height / 100) ** 2;
    return bmi;
  },
};

console.log(smith.calcBmi());
console.log(miller.calcBmi());

if (smith.calcBmi() >= miller.calcBmi()) {
  console.log(
    `${smith.fullname} BMI ${smith.calcBmi()} is higher than ${
      miller.fullname
    } ${miller.calcBmi()}!`
  );
} else {
  console.log(
    `${miller.fullname} BMI ${miller.calcBmi()} is higher than ${
      smith.fullname
    } ${smith.calcBmi()}!`
  );
}

const phil = [
  "phil",
  "sam",
  2037 - 1991,
  "teacher",
  ["Michael, Peter, steve, Steven"],
];

for (let i = 0; i < phil.length; i++) {
  console.log(phil[i]);
}

years = [1999, 1889, 2002, 2010, 1999];

const ages = [];

for (let i = 0; i < years.length; i++) {
  console.log(ages.push(2037 - years[i]));
}

// Coding Challenge #1

// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.

// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:

// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)

// 2. Create an array with both Julia's (corrected) and Kate's data

// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// �
// ")

// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// Hints: Use tools from all lectures in this section so far

const julia = [3, 5, 2, 12, 7];

const kate = [4, 1, 15, 8, 3];

console.log(julia);

function checkDogs() {
  const juliaOnlyDogs = julia.slice();

  juliaOnlyDogs.splice(0, 1);

  juliaOnlyDogs.splice(-2);

  console.log(juliaOnlyDogs);

  let allkate = kate.forEach((element, i) => {
    if (element > 3) {
      console.log(`Dog number ${i+1} is an adult dog.`);
    } else {
      console.log(`Dog number ${i+1} is an puppy dog.`);
    }
  });

  let alljulia = juliaOnlyDogs.forEach((element, i) => {
    if (element > 3) {
      console.log(`Dog number ${i+1} is an adult dog.`);
    } else {
      console.log(`Dog number ${i+1} is an puppy dog.`);
    }
  });

}

checkDogs();


// Let's build a simple poll app!

// A poll has a question, an array of options from which people can choose, and an 
// array with the number of replies for each option. This data is stored in the starter 
// 'poll' object below.

// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The 
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the 
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)

// 1.2. Based on the input number, update the 'answers' array property. For 
// example, if the option is 3, increase the value at position 3 of the array by 
// 1. Make sure to check if the input is a number and if the number makes 
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The 
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using 
// console.log(). This should be the default option. If type is 'string', display a 
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each 
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test 
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll 
// object! So what should the this keyword look like in this situation?


// The Complete JavaScript Course 21
// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section 

const poll = {
  question: 'what is ur fav programming lang?',
  options: ['0: JavaScipt', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
}

console.log(poll.answers);

