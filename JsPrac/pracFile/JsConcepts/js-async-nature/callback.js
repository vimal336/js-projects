function one(to){
  console.log("call one");
  to();
 
}

one(two);

function two(){
    console.log("call two");
}



function execute(a,b,cb){
    var add = a+b;
    cb(add);
}

execute(10,20,function(add){
   console.log(add/2);
})



//callback hell

setTimeout(()=>{
  console.log("1");
  setTimeout(()=>{
    console.log("2");
    setTimeout(()=>{
      console.log("3");
      setTimeout(()=>{
        console.log("4");
        setTimeout(()=>{
          console.log("5");
        },5000);
      },4000);
    },3000);
  },2000);
},1000);


