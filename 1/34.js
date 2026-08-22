// //spread operator
// let arr1= [10,20,30];
// let arr2= [40,50];
// let arr3= [...arr1, ...arr2];
// console.log(arr3);

// //object spread operator
// let user= {
//     name:"Lucky",
//     age: 22,
// }
// let user2= {
//     ...user,
//     city:"kalka"
// }
// console.log(user2)

//activity
// let product= {
//     name:"Laptop",
//     price:50000,
// }
// let updatedProduct={
//     ...product,
//     brand:"Dell"
// }
// console.log(updatedProduct);

// //overwrite in spread operator
// let product2= {
//     productDetails: "monitor",
//     price: 40000,
// }
// let updatedProduct={
//     ...product2,
//     price:3000
// }
// console.log(updatedProduct)

//spread in array
let arr1= [10,20,30];
let arr2= [40,50];
let arr3= [...arr1, ...arr2, 60];
console.log(arr3)