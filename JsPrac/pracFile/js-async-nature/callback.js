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


function callback(){
  console.log("execute")
}