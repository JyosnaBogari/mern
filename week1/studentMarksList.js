/* Assignment 3: Student Marks List
----------------------------------
Scenario: You receive marks from an exam system.
*/

// Array containing students' marks
const marks = [78, 92, 35, 88, 40, 67];

// filter(): selects marks that are greater than or equal to 40 (pass marks)
let res1 = marks.filter(ele => ele >= 40);
console.log(res1); // [78, 92, 88, 40, 67]

// map(): adds 5 grace marks to each student's score
let res2 = marks.map(ele => ele + 5);
console.log(res2); // [83, 97, 40, 93, 45, 72]

// reduce(): finds the highest mark in the array
let res3 = marks.reduce((acc, ele) => acc > ele ? acc : ele);
console.log(res3); // 92

// find(): finds the first student who failed (marks less than 40)
let res4 = marks.find(ele => ele < 40);
console.log(res4); // 35

// findIndex(): finds the index position of the mark 92
let res5 = marks.findIndex(ele => ele == 92);
console.log(res5); // 1
