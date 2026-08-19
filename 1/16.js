const numbers=[10,20,30,40];

let total= numbers.reduce((sum, num)=>{
    return sum + num;
},0);

console.log(total);

//activity

let card= [
    {name: "Mouse", price:500},
    {name:"KeyBoard", price:1200},
    {name:"Headphones", price:15000},
    {name:"Usb", price:300}
]

let pricing= card.reduce((sum, card)=>{
    return sum + card.price
},0)

console.log(pricing)