//delays in async await 
function getData(name, time, success){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(success){
                resolve(`${name}, loading`)
            }else{
                reject(`${name}, failed`)
            }
        },time)
    })
}

// async function start(){
//     try{
//         let user= await getData("user", 3000);
//         console.log(user);

//         let posts= await getData("posts", 2000);
//         console.log(posts);

//         let comments= await getData("comments", 1500)
//         console.log(comments);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// start();

//promise.all done execution at a time
async function start(){
    try{
        let result= await Promise.all([
            getData("user", 2000, true),
            getData("Posts", 3000, false),
            getData("comments", 1500, true)
        ])
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}
start()