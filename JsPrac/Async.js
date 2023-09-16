fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));




  // function resolveAfter2Seconds(x) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(x);
  //     }, 2000);
  //   });
  // }
  
  // async function f1() {
  //   const x = await resolveAfter2Seconds(10);
  //   console.log(x); // 10
  // }
  
  // f1();
  