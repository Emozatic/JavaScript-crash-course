//destructuring
// let product= {
//     title:"laptop",
//     price: 50000,
//     brand: "Dell"
// }
// const {title, price, brand}= product
// console.log(title);
// console.log(price);
// console.log(brand);

// //array destructuring
// let arr= [10,20,30,40,50];
// let [first, second, ]= arr;
// console.log(first);
// console.log(third);
// console.log(forth);
// console.log(fifth);

//array destructuring
// let arr= [10,20,30,40,50];
// let [first, second, third, ...rest ]= arr;
// console.log(first);
// console.log(third);
// console.log(rest);

//object destructuring with rest
// let obj= {
//     name:"Lucky",
//     age:21,
//     rollNo: 009,
//     address:"kalka"
// }
// let{name, ...details}= obj;
// console.log(name);
// console.log(details);

//activity
let user= {
    name:"Lucky",
    age:21, 
    city:"chandigarh",
    skills:["Js", "React", "Node"]
};
const{name:username, age, ...otherDetails}= user;
console.log(username);
console.log(age);
console.log(otherDetails);