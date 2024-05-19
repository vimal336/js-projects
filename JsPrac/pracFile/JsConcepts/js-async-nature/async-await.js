async function reachA() {
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


  //example1

  let reachA = new Promise((resolve,reject)=>{
   const reached =  false;
   if(reached){
    setTimeout(resolve,3000,"Reached")
   }else{
    reject("Not Reached")
   }
  });

  async function asyncstate(){
    try{
        console.log("hi...")
        res = await reachA
        console.log(res);
        console.log("bye")
    }
    catch(err){
        console.log(err)
    }
  }



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
  

