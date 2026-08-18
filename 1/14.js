const users= [
    {id:1, name:"Aman", age:20},
    {id:2, name:"Rahul", age:22},
    {id:3, name:"Rohit", age:19},
    {id:4, name:"Vikas", age:24}
]

let finding= users.find((user)=>{
    return user.id=3;
})

console.log(finding);