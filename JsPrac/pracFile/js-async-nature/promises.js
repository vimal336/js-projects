const fs = require('fs');


// fs.promises.readFile('./text.txt',{encoding: 'utf-8'}).then((data)=> console.log(data)).catch((error)=>console.log(error));





//promise method example 1 :
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



