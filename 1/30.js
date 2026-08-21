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
getUser(5)