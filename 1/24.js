// //call
// function introduce(){
//     console.log(this.name)
// }
// let user1=  {name:"Lucky"};
// introduce.call(user1);

// //apply
// function add(a,b){
//     return this.value+a+b;
// }
// let obj= {value:10};
// console.log(add.apply(obj, [5,15]))

// //bind
// function greet (){
//     console.log("Hello "+ this.name);
// }
// let user= {name:"lucky"};
// let newGreet= greet.bind(user);
// newGreet()


//activity
function intoduce(city, age){
    console.log("My name is"+ this.name+ ", I am "+ age + "years old and i live in "+ city)
}
let user={name:"Rahul"};
introduce.call(user)