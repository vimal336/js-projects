async function exampleFunction() {
    try {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => reject("Promise rejected!"), 2000);
      });
  
      const result = await promise; // This will throw an error
      console.log(result); // This line will not be executed
    } catch (error) {
      console.log(error); // Output: "Promise rejected!"
    }
  }
  
  exampleFunction();

  
  async function fn(){
     console.log("hi")
  }

  console.log(fn());

