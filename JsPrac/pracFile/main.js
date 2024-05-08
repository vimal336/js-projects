
// let head = document.querySelector('.head');
// console.log(head);


// let arr = [1,2,3,4,5];

// for(let i=arr.length; i>=0; i--){
//   console.log(arr[i]);
// }

let arr = [1, 2, 3, 4, 5];

for (let i = arr.length; i>=1; i--) {
    console.log(i);
}


let  rev = arr.reverse();

console.log(rev);

setTimeout(function(){
    console.log("set interval");
},5000)