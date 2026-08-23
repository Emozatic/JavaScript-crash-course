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
// class Student{
//     constructor(name, age, course){
//         this.name= name;
//         this.age= age;
//         this.course= course;
//     }
// }

// let student1= new Student("Lucky", 21, "MCA");
// let student2= new Student("Rocky", 19, "BBA");
// console.log(student1);
// console.log(student2);

//activity 4
// class Car{
//     constructor(brand,model ){
//         this.brand= brand;
//         this.model= model;
//     }
//     start(){
//         console.log(`${this.brand} ${this.model} is starting`);
//     }
// }

// let car1= new Car("Mahindra", "Scorpio");
// car1.start();

//activity 5
// class BankAccount{
//     constructor(name, balance){
//         this.name= name;
//         this.balance= balance;
//     }
//     deposite(amount){
//         this.balance= this.balance+amount
//     }
//     showBalance(){
//         console.log(this.balance)
//     }
//     withdraw(amount){
//         if(amount> this.balance){
//             console.log("Insufficient balance");
//         }
//         else{
//             this.balance= this.balance-amount
//         }
//     }
// }

// let bank= new BankAccount("Lucky", 5000);
// bank.withdraw(3000)
// bank.showBalance()


//activity 6
// class BankAccount{
//     #balance;
//     constructor(balance){
//         this.#balance= balance;
//     }
//     showBalance(){
//         console.log(`balance is= ${this.#balance}`)
//     }
//     deposite(amount){
//         this.#balance= this.#balance+amount
//     }
//     withdraw(amount){
//         if(this.#balance<amount){
//             console.log("insuffiecient balance");
//         }
//         else{
//             this.#balance-=amount;
//         }
//     }
// }
// let bank= new BankAccount(5000);
// bank.deposite(2000);
// bank.withdraw(1000);
// bank.showBalance();

//inheritence
// class Vehicle{
//     start(){
//         console.log("vehicle started");
//     }
//     stop(){
//         console.log("vehicle stopped");
//     }
// }
// class Car extends Vehicle{

// }
// let car1= new Car();
// car1.start();
// car1.stop();

//activity
// class Animal{
//     eat(){
//         console.log("Animal is eating");
//     }
// }
// class Dog extends Animal{

// }
// let dog1= new Dog();
// dog1.eat();

//super keyword
// class Animal{
//     constructor(name){
//         this.name= name;
//     }
// }
// class Dog extends Animal{
//     constructor(name, breed){
//         super(name);
//         this.name= name;
//         this.breed=breed;
//         console.log(this.name)
//     }
// }

// let animal= new Animal("tommy");
// console.log(animal)

//activity
class Animal{
    constructor(name){
        this.name=name;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
}
class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this.name= name;
        this.breed= breed;
    }
}
let dog= new Dog("Tommy", "Gernam Shephered");
console.log(dog.name);
console.log(dog.breed);
dog.eat();