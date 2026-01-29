/*Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    
filter() students who passed (marks ≥ 40)
map() to add a grade field
        ≥90 → A
        ≥75 → B
        ≥60 → C
        else → D

   
reduce() to calculate average marks
find() the student who scored 92
findIndex() of student "Kiran"*/

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

let res1=students.filter(ele=>ele.marks>=40)
console.log(res1);

let res2=students.map(ele=>{
    if(ele.marks>=90)
    {
        ele.field='A';
    }
    else if(ele.marks>=75)
    {
        ele.field='B';
    }
    else if(ele.marks>=60)
    {
        ele.field='C';
    }
    else
    {
        ele.field='D';
    }
    return ele;
});

console.log(res2);

let res3=students.reduce((acc,ele)=>acc+ele.marks,0)/students.length;
//let avg=res3/students.length;
console.log(res3);

let res4=students.find(ele=>ele.marks==92)
console.log(res4);

let res5=students.findIndex(ele=>ele.name==="Kiran");//=== strictlu equality checks values+datatypes
console.log(res5);