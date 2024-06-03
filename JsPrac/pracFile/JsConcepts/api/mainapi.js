async function getMethod() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos/");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let data = await response.json();
      console.log(data);
  
      // Select the HTML element to append the results
      let getResults = document.getElementById("get-result");
  
      // Clear previous results
      getResults.innerHTML = "";
  
      // Loop through the fetched data and append each item to the HTML
      data.forEach((todo) => {
        let div = document.createElement("div");
        div.className = "json-container";
        div.textContent = `ID: ${todo.id}, Title: ${todo.title}, Completed: ${todo.completed}`;
        getResults.appendChild(div);
      });
    } catch (error) {
      console.log("Fetch error:", error);
      document.getElementById("get-result").textContent = `Error: ${error.message}`;
    }
  }
  
  // Call the GET method
  getMethod();
  
  
// Function to perform a POST request
async function postMethod() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "foo",
          body: "bar",
          userId: 1,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let data = await response.json();
      console.log(data);
  
      // Select the HTML element to append the results
      let postResults = document.getElementById("post-result");
  
      // Clear previous results
      postResults.innerHTML = "";
  
      // Append the result to the HTML
      let div = document.createElement("div");
      div.className = "json-container";
      div.textContent = `ID: ${data.id}, Title: ${data.title}, Body: ${data.body}, UserID: ${data.userId}`;
      postResults.appendChild(div);
    } catch (error) {
      console.log("Fetch error:", error);
      document.getElementById("post-result").textContent = `Error: ${error.message}`;
    }
  }
  

  postMethod();

  //find max arr

  let arr =[3,5,67,77];

  // let maxarr = arr[0];

  // for(let i=1; i<=arr.length; i++){
  //   if(arr[i]>maxarr){
  //       maxarr = arr[i]
  //   }
  // }

  // console.log(maxarr);

  let maxarr = arr[0];
  for(let i=0;i<=arr.length;i++){
    if(arr[i]>maxarr){
      maxarr = arr[i]
    }
  }
  console.log(maxarr);


