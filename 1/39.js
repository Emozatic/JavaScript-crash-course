//classes and objects
// class User{
//     constructor(name, age){
//         this.name= name;
//         this.age= age;
//     }
// }

// let user1= new User("Lucky", 21);
// let user2= new User("Rahul", 25);
// console.log(user1);
// console.log(user2);


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
// class Animal{
//     constructor(name){
//         this.name=name;
//     }
//     eat(){
//         console.log(`${this.name} is eating`);
//     }
// }
// class Dog extends Animal{
//     constructor(name, breed){
//         super(name);
//         this.name= name;
//         this.breed= breed;
//     }
// }
// let dog= new Dog("Tommy", "Gernam Shephered");
// console.log(dog.name);
// console.log(dog.breed);
// dog.eat();

//activity for method overriding
// class Animal{
//     speak(){
//         console.log("animal is speaking");
//     }
// }
// class Dog extends Animal{
//     speak(){
//         console.log("dog barks");
//     }
// }
// class Cat extends Animal{
//     speak(){
//         console.log("cat meowing");
//     }
// }
// let dog= new Dog();
// let cat= new Cat();
// dog.speak();
// cat.speak();

//super.method override
// class Animal {
//     speak(){
//         console.log("animal speaks");
//     }
// }
// class Dog extends Animal{
//     speak(){
//         super.speak();
//         console.log("dog barks");
//     }
// }
// let dog= new Dog();
// dog.speak();

//activity
// class Car{
//     start(){
//         console.log("car is starting");
//     }
// }
// class electricCar extends Car{
//     start(){
//         super.start();
//         console.log("electric is started");
//     }
// }
// let car= new electricCar();
// car.start()

//static method
// class User{
//     static welcome(){
//         console.log("welcome to our app");
//     }
// }
// User.welcome()
// let user= new User();
// console.log(user.welcome())

//activity
// class Maths{
//     static add(a,b){
//         return a+b;
//     }
// }
// console.log(Maths.add(2,3));

//getter and setter
// class User{
//     constructor(name){
//         this._name= name;
//     }    
//         get name(){
//             return this._name;
//         }
//         set name(newName){
//             this._name= newName;
//         }
    
// }
// let user = new User("Lucky");
// console.log(user.name);
// user.name= "Rahul";
// console.log(user.name);

//activity 
// class Person{
//     constructor(name){
//         this._name= name;
//     }
//     get name(){
//         return this._name;
//     }
//     set name(newName){
//         if(newName=" "){
//             console.log("invalid name")
//         }
//         else{
//             this._name= newName;
//         }
//     }
// }

// let person= new Person("Lucky");
// console.log(person.name);
// person.name= "Rahul";
// console.log(person.name);
// person.name="";

//polymorphism
// class Shape{
//     area(){
//         console.log("calculating area");
//     }
// }
// class Circle extends Shape{
//     area(){
//         console.log("circle area");
//     }
// }
// class Rectangle extends Shape{
//     area(){
//         console.log("rectangle area");
//     }
// }

// let circle= new Circle();
// let rectangle = new Rectangle();
// circle.area();
// rectangle.area();

//abstraction
// class CoffeeMachine{
//     #boilWater(){
//         console.log("water is boiling");
//     }
//     makeCoffee(){
//         this.#boilWater();
//         console.log("coffee ready");
//     }
// }

// let coffee= new CoffeeMachine();
// coffee.makeCoffee();

// //activity
// class Payment{
//     #validate(){
//         console.log("payment validation")
//     }
//     pay(){
//         this.#validate();
//         console.log("payment successfull");
//     }
// }
// let pay= new Payment();
// pay.pay();

//task1
// class BankAccount{
//     #balance;
//     constructor(owner, balance){
//         this.owner= owner;
//         this.#balance= balance;
//     }
//     deposit(amount){
//         if(amount>0){
//         this.#balance+=amount;
//         }
//         else{
//             console.log("invalid")
//         }

//     }
// }
// let account= new BankAccount("Lucky", 2000);
// account.deposit(2000)


//task 2
// class Product{
//     constructor(name,price,quantity){
//         this.name= name;
//         this.price= price;
//         this.quantity= quantity;
//     }
//     getTotal(){
//         return this.price*this.quantity;
//     }
//     showProduct(){
//         console.log(`name= ${this.name}`);
//         console.log(`price= ${this.price}`);
//         console.log(`quantity= ${this.quantity}`);
//     }
// }
// let product= new Product("Laptop", 100000, 2);
// let product2= new Product("Mouse", 500, 5);
// let product3= new Product("Keyboard", 1500, 3);
// console.log(product.getTotal());
// console.log(product2.getTotal());
// console.log(product3.getTotal())
// product.showProduct();
// product2.showProduct();
// product3.showProduct();

//task3
// class Product{
//     #price;
//     constructor(name,price){
//         this.name= name;
//         this.#price= price;
//     }
//     setPrice(price){
//         if(price>0){
//             this.#price=price;
//         }
//         else{
//             console.log("invalid")
//         }
//     }
//     getPrice(){
//         return this.#price;
//     }
// }
// let product= new Product("Laptop", 500000);
// console.log(product.getPrice());

// product.setPrice(550000);
// console.log(product.getPrice());

// product.setPrice(-100)

//task 4
class Vehicle{
    constructor(brand){
        this.brand= brand;
    }
    start(){
        console.log("vehicle started");
    }
}
class Car extends Vehicle{
    constructor(brand, model){
        super(brand);
        this.model= model;
    }
    showCar(){
        console.log(`brand: ${this.brand}`)
        console.log(`model: ${this.model}`)
    }
}

let car= new Car("mahindra", "scorpio");
car.start();
car.showCar()