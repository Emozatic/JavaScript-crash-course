//this keyword
const user={
    name:"Lucky",
    greet:function(){
        console.log(this.name)
    }
}
user.greet();

//2
const car={
    brand:"toyota",
    model:"hilux",
    showDetails:function(){
        console.log(this.brand);
        console.log(this.model);
    }
}

car.showDetails();

//3
const student= {
    name:"Rahul",
    age: 22,
    course: "MCA",
    introduce:function(){
        console.log(`my name is ${this.name}`);
        console.log(`i am ${this.age} years old`);
        console.log(`i am stydying ${this.course}`);
    }
}

student.introduce();
