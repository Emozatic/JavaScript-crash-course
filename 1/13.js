const students= [{name:"Aman", age:17},
    {name:"Rahul", age:21},
    {name:"Rohit", age:19},
    {name:"Karan", age:18},
    {name:"Vikas", age:24}
]

let filtering= students.filter((students)=>{
    return students.age>=20;
})

console.log(filtering);