//sort
let names= ["BOb","Aman", "Raman", "Shyam", "Sunder"]
names.sort();
console.log(names);

let nums= [1,43,2,10,100];
nums.sort((a,b)=>{
    return a-b
})
console.log(nums)