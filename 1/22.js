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
