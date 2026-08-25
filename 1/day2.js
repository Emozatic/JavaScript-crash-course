class BankAccount{
    constructor(owner, balance){
        this.owner= owner;
        this.balance= balance;
    }
    deposite(amount){
        if(amount>0){
        return this.balance+=amount;
        }
        else{
            return "invalid amount";
        }
    }
    withdraw(amount){
        if(amount<=this.balance){
            return this.balance-=amount;
        }
        else{
            return "insufficient balance";
        }
    }
    showBalance(){
        return this.balance;
    }
    transfer(amount, anotherAccount){
        if (amount<=this.balance){
            this.balance-=amount;
            anotherAccount.balance+=amount;
            return "Transfer successfull";
        }
        else{
            return "Insufficient balance";
        }
    }
}

let emp1= new BankAccount("Lucky", 10000)
let emp2= new BankAccount("Rahul", 2000);
console.log(emp1.transfer(2000, emp2));
console.log(emp2.balance)