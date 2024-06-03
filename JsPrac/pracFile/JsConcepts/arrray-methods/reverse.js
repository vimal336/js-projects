
// In JavaScript, the reverse() method is used to reverse the 
// order of elements in an array. It modifies the array in place and 
// returns a reference to the same array with the reversed elements.


let array = [1, 2, 3, 4, 5];
array.reverse();
console.log(array); // Output: [5, 4, 3, 2, 1]


//This reverses the order of elements in the array array. Now, array contains [5, 4, 3, 2, 1].

//It's important to note that reverse() changes the original array. 
//If you want to reverse an array without modifying the original, you should create a copy of the array first:


let array2 = [1, 2, 3, 4, 5];
let reversedArray = array2.slice().reverse();
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
console.log(array2); // Output: [1, 2, 3, 4, 5] (original array remains unchanged


//reverse method without inbuilt function

function stringreverse(rev){
    let reversed = ""
  for(let i=rev.length-1;i>-1;i--){
    reversed+=rev[i];
  }
  return reversed
}

console.log(stringreverse("reverse method "));