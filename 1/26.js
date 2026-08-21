//async await 
function delay(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve, ms)
    })
}
// async function start(){
//     try{
//     await delay(2000);
//     console.log("HEllo bhai");
//     console.log("after 2 second");
// }catch(err){
//     console.log(err)
// }
// }
// start()

//activity
async function start(){
    try{
        console.log("A")
        await delay(2000);
        console.log("B");
        await delay(3000);
        console.log("C")
    }catch(err){
        console.log(err)
    }
}
start()