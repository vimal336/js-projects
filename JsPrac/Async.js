// const fet = fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
 
//   console.log(fet);

async function logMovies() {
    const response = await fetch("http://example.com/movies.json");
    const movies = await response.json();
    console.log(movies);
  }

  console.log('hello')

  function resolveAfter2Seconds(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
