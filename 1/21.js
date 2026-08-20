//Higher order function

function calculate(a,b,operation){
    return operation(a,b)
}
function multiply(a,b){
    return a*b;
}
console.log(calculate(5,4,multiply))

//mymap
function createMap(num, operation){
    let result=[];
    for(let i=0; i<num.length; i++){
        result.push(operation(num[i]))
    }
    return result;
}
function mymap(num){
    return num*2;
}

let numbers= [1,2,3,4,5];
console.log(createMap(numbers, mymap))