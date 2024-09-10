let arr;
fetch("https://664d8fdcede9a2b55653e94f.mockapi.io/test/user")
.then(res => res.json())
.then(data => {
    let array = data;
   let rty = array.map((el)=>{
    return {name:el.name,id:el.id} 
    })
    rty.forEach(element => {
        // console.log(element)
        fetch("https://664d8fdcede9a2b55653e94f.mockapi.io/test/name",{
            method: 'POST',
            body:JSON.stringify(element),
            headers: {
                "Content-Type":"application/json"
            }
        })
        .then(res2=>res2.json())
        .then(data2 => console.log(data2))
    });
   
})


for (;;) {
    console.log("This will run forever");
    Add some condition to break out of the loop, if needed
    if (someCondition) break;
  }
  