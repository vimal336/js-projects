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




  //fetch method

  async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json(); // Convert the response to JSON
      console.log(data); // Log the data
    } catch (error) {
      console.error('Error:', error); // Log any errors
    }
  }
  
  fetchData();
  

