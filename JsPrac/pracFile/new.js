let checkEven = new Promise((resolve, reject) => {
    let number = 4;

    if (number % 2 === 0) resolve("The number is even!");
    else reject("The number is odd!");
});

checkEven
    .then((message) => console.log(message)) // On success
    .catch((error) => console.error(error)); // On failure

    .then((message) => console.log(message)) 


    let checkOdd = new Promise((resolve, reject) => {
        let number = 4;
    
        if (number % 2 === 0) resolve("The number is even!");
        else reject("The number is odd!");
    });
    
    checkEven
        .then((msg) => console.log(msg)) // On success
        checkEven
        .then((message) => console.log(message)) // On success