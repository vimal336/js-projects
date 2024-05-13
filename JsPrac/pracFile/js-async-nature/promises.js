const mypromise = new Promise((resolve, reject)=>{
  let random = Math.floor(Math.random*2);
  if(random == 0){
    console.log(resolve);
  } else{
    console.log(reject);
  }
});

console.log(random);