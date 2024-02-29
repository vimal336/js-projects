// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("jonas");

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}

const todos = getTodos();
console.log(todos);

console.log("jonas");

const a = [
  { id: 1, name: "Object 1", place: "Location A" },
  { id: 2, name: "Object 2", place: "Location B" },
  { id: 3, name: "Object 3", place: "Location C" },
  { id: 4, name: "Object 4", place: "Location D" },
  { id: 5, name: "Object 5", place: "Location E" },
];

const b = { id: 6, name: "Object 6", place: "Location E" };

const Addab = [...a, b];
Addab;

const afterAddab = Addab.filter((hello) => hello.id !== 3);
afterAddab;

// 3) Update book object in the array
const afterupdateab = afterAddab.map((nw) =>
  nw.id === 1 ? { ...nw, pages: 1210 } : nw
);
afterupdateab;

const person = {
  Pname: "vimal",
  age: 20,
  place: {
    country: 'india',
    city: 'bangalore',
  },
};

const updated = {
  ...person, address : {
    ...person.address, city : 'chennai'
  }, Pname : 'alex',
}

console.log(person);
console.log(updated);


function press(){
  return function() {
    console.log('liked')
  }
}

let fn = press()
let message = fn()

let arra = [1,2,3]

let doub = arra.map((double)=>{
  return double*2
})

console.log(arra);
console.log(doub);

let str = " hello javascript";