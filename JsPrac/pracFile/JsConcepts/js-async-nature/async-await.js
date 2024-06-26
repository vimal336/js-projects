
//example1

  let reach = new Promise((resolve,reject)=>{
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
        res = await reach
        console.log(res);
        console.log("bye")
    }
    catch(err){
        console.log(err)
    }
  }

  asyncstate();


  //fetch method

  // async function fetchData() {
  //   try {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const data = await response.json(); // Convert the response to JSON
  //     console.log(data); // Log the data
  //   } catch (error) {
  //     console.error('Error:', error); // Log any errors
  //   }
  // }
  
  // fetchData();
  

  async function fetdata() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1
        })
      });
  
      if (!response.ok) {
        throw new Error("Request not successful");
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  fetdata();
  
// let storename = localStorage.setItem("name","saravanan");
// console.log(storename);


// document.cookie="name=vimal; expires="+new Date(2025,11,24);
