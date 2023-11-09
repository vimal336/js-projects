console.log('js concepts practice')

function outer() 
{
  var a = 'hello';
  
    function calling(){
       console.log(a);
    }
 calling(); 
}

outer();



function outerscope(){

  var outervalue = 20;

  var innerscope = function(){
    console.log(outervalue + 20);
  }

  return innerscope;


}

console.dir(outerscope());

console.log(outerscope());