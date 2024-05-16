//This imports the Node.js built-in fs module, which provides file system-related functionality.
const fs = require('fs');

// imports axios
const axios = require('axios');


// file read using promise method
fs.promises.readFile('./text.txt',{encoding: 'utf-8'}).then( (data)=> console.log(data) ).catch( (error)=>  console.log(error));


// file read using callback method
fs.readFile('./text.txt', 'utf8', (error, data) => {
  if (error) {
    console.error('Error reading file:', error);
    return;
  }
  console.log('File content:', data);
});

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



//Axios Promise

const url = 'https://jsonplaceholder.typicode.com/users/'

fs.promises.readFile('./text.txt', {encoding:'utf-8'}).then((data) => console.log(data)).catch((error) => console.log(error));

axios.get(url+1).then( (data)=>console.log(data.data.name) )

