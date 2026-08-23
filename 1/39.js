//classes and objects
class User{
    constructor(name, age){
        this.name= name;
        this.age= age;
    }
}

let user1= new User("Lucky", 21);
let user2= new User("Rahul", 25);
console.log(user1);
console.log(user2);


//activity 2
// class Car{
//     // constructor(brand, model){
//     //     this.brand= brand;
//     //     this.model= model;
//     // }
// }

// //let car1 = new Car("Toyota", "Fortuner");
// let car2= new Car();
// //console.log(car1);
// console.log(car2);

//activity 3
class Student{
    constructor(name, age, course){
        this.name= name;
        this.age= age;
        this.course= course;
    }
}

let student1= new Student("Lucky", 21, "MCA");
let student2= new Student("Rocky", 19, "BBA");
console.log(student1);
console.log(student2);