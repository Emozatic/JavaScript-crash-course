//Higher order function

// function calculate(a,b,operation){
//     return operation(a,b)
// }
// function multiply(a,b){
//     return a*b;
// }
// console.log(calculate(5,4,multiply))

// //mymap
// function createMap(num, operation){
//     let result=[];
//     for(let i=0; i<num.length; i++){
//         result.push(operation(num[i]))
//     }
//     return result;
// }
// function mymap(num){
//     return num*2;
// }

// let numbers= [1,2,3,4,5];
// console.log(createMap(numbers, mymap))

//activity 2 :- myFilter
// function createFunction(number, operation){
//     let result= [];
//     for(let i=0; i<number.length; i++){
//         if(operation(number[i])){
//             result.push(number[i])
//         }
//     }
//     return result
// }

// function myFilter(num){
//     return num%2===0
// }
// let number= [1,2,3,4,5];
// console.log(createFunction(number, myFilter))

//activity 3
// function myReduce(num, operation){
//     let result= 0;
//     for(let i=0; i<num.length; i++){
//         result= operation(result, num[i])
//     }
//     return result;
// }
// function reducing(total, num){
//     return total+num
// }
// let number= [1,2,3,4,5];
// console.log(myReduce(number,reducing))

//activity 4
let products= [
    {name:"Mouse", price: 500, category:"electronics"},
    {name:"KeyBoard", price:1200, category:"electronics"},
    {name:"Book", price:300, category:"study"},
    {name:"Pen", price:50, category:"study"}
]
function mymap(products, operation){
    let product=[]
    for(let i=0; i<products.length; i++){
        if(operation(products[i])){
            product.push(products[i])
        }
    }
    return product;
}

function filter(product){
    return product.category === "electronics"
}

console.log(mymap(products, filter))

