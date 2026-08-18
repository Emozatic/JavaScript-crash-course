//objects
let student={
    name:"Lucky",
    age:21,
    course:"MCA",
    marks:98,
    city:"Kalka"
}

console.log(student.name);
student.name="Rocky"
console.log(student.name);

if((student.marks)>=50){
    student.passed=true;
}
else{
    student.passed=false;
}

console.log(student);