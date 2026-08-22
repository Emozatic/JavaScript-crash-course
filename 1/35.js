//default parameter
function greet(name="Rocky"){
    console.log(`Hello ${name}`)
}

greet()

//activity
function calculate(price, discount= 0){
    console.log(price-discount);
}
calculate(1000);