// Function to perform a GET request
async function getMethod() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      let data = await response.json();
      console.log(data);

  }catch(error){
    console.log("fetch error", error)
  }

}

  
  // Function to perform a POST request
//   async function postMethod() {
//     try {
//       let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           title: "foo",
//           body: "bar",
//           userId: 1,
//         }),
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       let data = await response.json();
//       console.log("POST response:", data);
      
//       // Append the result to the HTML
//       document.getElementById('post-result').textContent = JSON.stringify(data, null, 2);
//     } catch (error) {
//       console.log("Fetch error (POST):", error);
//       document.getElementById('post-result').textContent = `Error: ${error.message}`;
//     }
//   }
  
  // Call the GET and POST methods
  getMethod();
  postMethod();
  