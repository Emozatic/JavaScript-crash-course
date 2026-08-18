// let students= ["Aman", "Rahul", "Lucky"];
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[0]);
// console.log(students.length)


//Activity 1
let marks= [65, 82, 45, 91, 73];
let passing_students=0;
let sum =0;
for (let i=0; i<marks.length; i++){
    sum+=marks[i];
    if(marks[i]>=30){
        passing_students++;
    }
}
let average= sum/marks.length;

console.log(sum);
console.log(passing_students);
console.log("average=", average);