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

