let checkEven = new Promise((resolve, reject) => {
    let number = 4;

    if (number % 2 === 0) resolve("The number is even!");
    else reject("The number is odd!");
});

checkEven
    .then((message) => console.log(message)) // On success
    .catch((error) => console.error(error)); // On failure


    let positive = new Promise((resolve, reject) => {
        let number = 4;
    
        if (number >= 0) resolve("The number is positive!");
        else reject("The number is negative!");
    });
    
    checkEven
        .then((msg) => console.log(message)) // On success
        .catch((error) => console.error(error)); // On failure

 

        checkEven
        .then((msg) => console.log(message))
        .catch((error) => console.error(error)); 

        
CheckOdd
        .then((msg) => console.log(message))
 
 

        const func = () =>{
            console.log("function")
        }



function isBigEnough(value) {
  return value >= 5;
}

const filtered = [12, 5, 8, 130, 34].filter(isBigEnough);
// filtered is [12, 5, 130, 34]

function isSmall(value) {
    return value >= 6;
  }

  function isPalindrome(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev == str) {
        return true
    } else {
        return false;
    }
}

let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";
let str4 = "Rama";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
console.log(isPalindrome(str4));


// Define the API URL
const apiUrl = "https://jsonplaceholder.typicode.com";

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });