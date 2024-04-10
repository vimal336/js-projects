console.log('js concepts practice');



function learnToDebug() 
{
    console.log('Learning to debug');
    return first();
}
    
function first() {
    console.log('First function');
    second();
    return 100;

}
    
function second() {
console.log('Second function');

}



let result = learnToDebug();
console.log(result);


