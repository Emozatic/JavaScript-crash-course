// function greet(name){
//     console.log("HEllo"+name);
// }
// function processUser(callback){
//     callback("Lucky")
// }
// processUser(greet);

// function add(a,b){
//     console.log(a+b);
// }
// function multiply(a,b){
//     console.log(a*b);
// }
// function calculate(a,b,operation){
//     operation(a,b)
// }
// calculate(2,1,multiply)

//activity 2
function greet(name){
    console.log("Good Morning" +name);
}
function bye(name){
    console.log("Bye"+name);
}
function access(name, operation){
    operation(name);
}
access("Lucky", bye)

