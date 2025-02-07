// 1. map()
// ✔ Returns a new array with modified elements.
// ✔ Useful when you need to transform data.
// ✔ Does not modify the original array.

//Example of map()

const numbers = [1, 2, 3, 4];

const squared = numbers.map(num => num * num); // Creates a new array

console.log(squared); // [1, 4, 9, 16]
console.log(numbers); // [1, 2, 3, 4] (original array remains unchanged)

// When to use map()?
// When you need to return a transformed array.
// Ideal for modifying values (e.g., doubling numbers, formatting data).

// 🔹 2. forEach()
// ✔ Does not return a new array (returns undefined).
// ✔ Used for executing side effects (like logging, updating a database).
// ✔ Modifies the original array if changed inside the callback.

//Example of forEach()

const numbers2 = [1, 2, 3, 4];

numbers2.forEach((num, index, arr) => {
  arr[index] = num * num; // Modifying the original array
});

console.log(numbers2); // [1, 4, 9, 16] (Original array is modified)

// When to use forEach()?
// When you need to perform an action for each element (e.g., logging, updating values).
// Not suitable when you need a new array.
// 🔹 Key Differences Table
// Feature	map()	forEach()
// Return Value	Returns a new array	Returns undefined
// Modifies Original Array?	❌ No	✅ Yes (if modified inside callback)
// Use Case	Transforming an array	Performing actions like logging or updating values
// 🔥 Which One Should You Use?