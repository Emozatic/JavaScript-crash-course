//sort
let names= ["BOb","Aman", "Raman", "Shyam", "Sunder"]
names.sort();
console.log(names);

let nums= [1,43,2,10,100];
nums.sort((a,b)=>{
    return a-b
})
console.log(nums)

let marks= [72, 45, 91, 63, 88, 56, 100, 34];
// marks.sort((a,b)=>{
//     return a-b;
// })



marks.sort((a,b)=>{
    return b-a;
})
console.log(marks)
console.log("first", marks[0])
console.log("second", marks[1])
console.log("third", marks[2])