class Employee{
    constructor(name,salary,department){
        this.name=name;
        this.salary= salary;
        this.department= department;
    }
    showDetails(){
        console.log(`name:${this.name}`);
        console.log(`salary:${this.salary}`);
        console.log(`department: ${this.department}`);
    }
    increaseSalary(amount){
        return this.salary+=amount;
    }
    getAnnualSalary(){
        return this.salary*12;
    }
}
let emp1= new Employee("Lucky", 100000, "CEO");
emp1.showDetails();
console.log(emp1.increaseSalary(5000));
console.log(emp1.getAnnualSalary());