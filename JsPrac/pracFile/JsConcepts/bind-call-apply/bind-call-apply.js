function myfun(){
    console.log(this);
}

let obj = {
    name:'joining',
    concept:'bind method'
};

myfun = myfun.bind(obj);
myfun();