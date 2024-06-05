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

let unique = new Set(arr);

console.log(unique);