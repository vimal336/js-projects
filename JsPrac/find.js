const arr = [3, 7, 5, 18, 40, 32, 29];

function checkAge(age, index, array) {
console.log(age, index, array)
  return age > 18;
}

const value = arr.find(checkAge);
