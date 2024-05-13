const mypromise = new Promise((resolve, reject)=>{
  if(true){
    console.log(resolve + "resolve");
  } else{
    console.log(reject);
  }
})

console.log(mypromise);