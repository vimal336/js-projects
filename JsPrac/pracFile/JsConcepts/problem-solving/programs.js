function isplaindrome(str) {
  let palin = str.split("").reverse("").join("");
  console.log(palin)
  if(str===palin){
    console.log("palindrome");
  }else{
    console.log("not")
  }
}

isplaindrome("madam");

//remove duplicates in array

let arr = [2,3,4,4,2,5,6];

let arr1 = [2,8,4,4,2,5,6];

// let unique = new Set(arr);

// console.log(unique);


let foe = arr.forEach((i)=>{
    console.log(i);
})

console.log(foe)

let mapm = arr1.map((inn)=>{
    return inn;
})

console.log(mapm);