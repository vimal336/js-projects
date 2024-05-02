function myfun(){
    console.log(this);
}

let obj = {
    name:'joining'
};

myfun = myfun.bind