//async await with try and catch
function getData(success){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(success){
                resolve("data got it");
            }
            else{
                reject("nothing found");
            }
        },2000)
    })
}
async function start(){
    try{
        let data= await getData(false);
        console.log(data);
    }catch(err){
        console.log(err);
    }
};

start();