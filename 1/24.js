//call
function introduce(){
    console.log(this.name)
}
let user1=  {name:"Lucky"};
introduce.call(user1);

//apply
function add(a,b){
    return this.value+a+b;
}
let obj= {value:10};
console.log(add.apply(obj, [5,15]))

//bind
function greet (){
    console.log("Hello "+ this.name);
}
let user= {name:"lucky"};
let newGreet= greet.bind(user);
newGreet()
