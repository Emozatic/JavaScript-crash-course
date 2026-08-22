//spread operator
let arr1= [10,20,30];
let arr2= [40,50];
let arr3= [...arr1, ...arr2];
console.log(arr3);

//object spread operator
let user= {
    name:"Lucky",
    age: 22,
}
let user2= {
    ...user,
    city:"kalka"
}
console.log(user2)