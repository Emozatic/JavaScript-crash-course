//CRUD full fledged
async function fullyFledged(id){
    try{
        let response= await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if(!response.ok){
            throw new Error(`HTTP ERROR, ${response.status}`);
        }
        let data= await response.json();
        console.log(data);
    }catch(err){
        console.log(err)
    }
}
fullyFledged(4)