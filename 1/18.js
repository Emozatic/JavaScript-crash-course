//destructuring

// const student={
//     name:"Lucky",
//     age:21,
//      stream:"MCA"
// }
// let {name, age, stream}= student;
// console.log(name);
// console.log(age);
// console.log(stream);

//array destructuring
// const marks= [10,20,30,40];
// const [first, second, third, forth]= marks;
// console.log(first);
// console.log(second);

// //spread operator
// let arr1= [10,20,30,40];
// let arr2= [50,60,70,80];
// let combined= [...arr1, ...arr2];
// console.log(combined);

//activity
let boys= ["Aman", "Rahul", "Rohit"];
let girls= ["Priya", "Neha", "Anjali"];
//let students=[...boys, ...girls];
let students=["Vikas", ...boys, ...girls, "Karan"];
let [first, second, third, forth]= students
console.log(students);
console.log(first)
console.log(second);
console.log(third);