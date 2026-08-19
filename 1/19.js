//default parameter
function createUser(name="Lucky",age=21){
    console.log(`name= ${name} age= ${age}`)
}
createUser("rahul");

//optional chaining
let data= {
    name:"Lucky",
    age:0,
    address:{
        city:"Kalka"
    }
}

console.log(data.age ?? 18)