console.log('js concepts practice')

function outer() 
{
  var a = 'hello';
  {
    function calling(){
       console.log(a);
    }
  }
}

outer();

console.log(outer);

