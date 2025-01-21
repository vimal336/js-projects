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
    return value >= 5;
  }
  
  const filteredSmall = [1, 35, 8, 10, 34].filter();
