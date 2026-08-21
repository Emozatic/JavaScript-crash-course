let url= "https://jsonplaceholder.typicode.com/users"
async function getUser(id){
    let response= await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if(!response.ok){
        throw new Error("Something went wrong");
    }
    let data= await response.json();
    console.log(data.name);
    console.log(data.email);
console.log(data.address?.city)
    
}
getUser(5);

//sending data
// async function sendData(){
//     let response= await fetch("https://jsonplaceholder.typicode.com/users",{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({
//             name:"Lucky",
//             email:"lk@gmail.com"
//         })
//     });
//     let data= await response.json();
//     console.log(data)
// }

// sendData();

//send data 2nd time
async function sendData2(){
    let response= await fetch("https://jsonplaceholder.typicode.com/users",{
        method: "POST", // Specify the HTTP method
      headers: {
        "Content-Type": "application/json" // Inform the server that the payload is JSON
      },
      body: JSON.stringify({
        name:"Rocky",
        email:"roky@gmail.com"
      })
    })
    let data= await response.json();
    console.log(data)
}

sendData2();