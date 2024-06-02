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
  
  
async function postmethod(){
    
    let response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
    });
}