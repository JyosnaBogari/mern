/*Assignment 2: Exam Result Summary
---------------------------------
Scenario : Marks are stored subject-wise for a student.

Test data:
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};*/

const marks={
    maths:78,
    physics:65,
    chemistry:82,
    english:55
};
function getData()
{
    let sum=0;
    let values=Object.values(marks);
    for(let i=0;i<values.length;i++)
    {
        sum=sum+values[i];
    }
    let avg=sum/values.length;
    return avg;
}
console.log(getData());

marks.computer=90;
console.log(marks)
