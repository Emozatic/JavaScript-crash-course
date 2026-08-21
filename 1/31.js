// async function fullData(){
//     try{
//     let response= await fetch ("https://jsonplaceholder.typicode.com/users",{
//         method: "POST", // Specify the HTTP method
//       headers: {
//         "Content-Type": "application/json" // Inform the server that the payload is JSON
//       },
//       body: JSON.stringify({
//         name:"lucky2",
//         age:21,
//         email:"lk123@gmail.com"
//       })
//     })
//     if(!response.ok){
//         throw new Error (`HTTP Erro, ${response.status}`)
//     }
//     let data= await response.json();
//     console.log(data);
// }catch(err){
//     console.log(err)
// }
// }
// fullData()

// //PUT method
// async function putMethod(){
//     try{
//     let response= await fetch("https://jsonplaceholder.typicode.com/users/5",{
//         method: "PUT", // Specify the HTTP method
//       headers: {
//         "Content-Type": "application/json" // Inform the server that the payload is JSON
//       },
//       body: JSON.stringify({
//         name:"Lucky Sah",
//         email:"lkk@gmail.com"
//       })
//     })
//     if(!response.ok)   {
//         throw new Error("something went wrong")
//     }
//     let data= await response.json();
//     console.log(data);
// }catch(err){
//     console.log(err)
// }
// }
// putMethod()

//PUT method
async function putMethod(){
    try{
    let response= await fetch("https://jsonplaceholder.typicode.com/users/5",{
        method: "PATCH", // Specify the HTTP method
      headers: {
        "Content-Type": "application/json" // Inform the server that the payload is JSON
      },
      body: JSON.stringify({
        email:"lkksah@gmail.com"
      })
    })
    if(!response.ok)   {
        throw new Error("something went wrong")
    }
    let data= await response.json();
    console.log(data);
}catch(err){
    console.log(err)
}
}
putMethod()

//delete method
async function delMethod(){
    try{
    let response= await fetch("https://jsonplaceholder.typicode.com/users/5",{
        method: "DELETE", // Specify the HTTP method
    })
    if(!response.ok)   {
        throw new Error("something went wrong")
    }
    let data= await response.json();
    console.log(data);
}catch(err){
    console.log(err)
}
}
delMethod()