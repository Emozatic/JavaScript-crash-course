//destructuring
let product= {
    title:"laptop",
    price: 50000,
    brand: "Dell"
}
const {title, price, brand}= product
console.log(title);
console.log(price);
console.log(brand);

//array destructuring
let arr= [10,20,30,40,50];
let [first, second, ]= arr;
console.log(first);
console.log(third);
console.log(forth);
console.log(fifth);