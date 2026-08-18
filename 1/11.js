const fruits= ["Apple", "Mango", "Litchi"];
fruits.forEach((fruits,index)=>{
    console.log(fruits, index);
})

const marks= [45, 78, 32, 90, 61, 49, 88];
marks.forEach((marks)=>{
    if(marks>=50){
        console.log(marks,"pass")
    }
    else{
        console.log(marks, "fail");
    }
})