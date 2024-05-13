const jspromise =  new Promise((resolve, reject)=>{
  const rand = Math.floor(Math.random()*2);
  console.log(rand);
  if(rand == 0){
    resolve();
  } else{
    reject();
  }
});

jspromise.then(()=>console.log("Success")).catch(()=>console.log("failure"));

