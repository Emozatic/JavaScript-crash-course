//this with arrow function
// const person={
//     name:"Aman",
//     sayName:()=>{
//         console.log(this.name)
//     }
// }

// person.sayName();

const person= {
    name:"Aman",
      sayName: function(){
        let inner =()=>{
            console.log(this.name);
        };
        inner();
    }
}

person.sayName();