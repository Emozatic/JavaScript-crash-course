//promises
// let promise= new Promise((resolve, reject)=>{
//     let sucess= false;
//     if(sucess){
//         resolve("done");
//     }
//     else{
//         reject("rejected");
//     }
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err)
// })

//activity 1
// let promise= new Promise((resolve,reject)=>{
//     let age =20;
//     if(age>=18){
//         resolve("you are elegible");
//     }
//     else{
//         reject("you are not elegible");
//     }
// }).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err)
// })

//delayed promises
let promise= new Promise((resolve, reject)=>{
    let success= false
    setTimeout(()=>{
        if(success){
            resolve("true");
        }
        else{
            reject("false");
        }
    },2000);
}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
