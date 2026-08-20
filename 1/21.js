//Higher order function

function calculate(a,b,operation){
    return operation(a,b)
}
function multiply(a,b){
    return a*b;
}
console.log(calculate(5,4,multiply))