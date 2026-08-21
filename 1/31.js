async function fullData(){
    try{
    let response= await fetch ("https://jsonplaceholder.typicode.com/users",{
        method: "POST", // Specify the HTTP method
      headers: {
        "Content-Type": "application/json" // Inform the server that the payload is JSON
      },
      body: JSON.stringify({
        name:"lucky2",
        age:21,
        email:"lk123@gmail.com"
      })
    })
    if(!response.ok){
        throw new Error (`HTTP Erro, ${response.status}`)
    }
    let data= await response.json();
    console.log(data);
}catch(err){
    console.log(err)
}
}
fullData()