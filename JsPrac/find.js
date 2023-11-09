const arr = [3, 7, 5, 18, 40, 32, 29];

function checkAge(age, index, array) {
  return age > 18;
}

arr.find(checkAge);
