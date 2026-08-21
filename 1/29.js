//fetch API
let data=fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>{
//     return res.json()
// }).then((data)=>{
//     data.forEach((data)=>{
//     console.log(data.username)
// })
// })


//async function 
// async function getUser(){
//     let response= await fetch("https://jsonplaceholder.typicode.com/users");
//     let data= await response.json();
//     data.forEach((data)=>{
//         console.log(data.phone)
//     })
// }

// async function getUser(){
//     let response= await fetch("https://jsonplaceholder.typicode.com/users");
//     if(!response.ok){
//         throw new Error("something went wrong", response.status);
//     }
//     let data= await response.json();
//     data.forEach((data)=>{
//         console.log(data.address?.city)
//     })
    
// }

async function getUser(id){
    let response= await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if(!response.ok){
        throw new Error("something went wrong");
    }
    let data= await response.json();
    console.log(data)
}

getUser(5);
