/* Assignment 3: Student Marks List
----------------------------------
Scenario: You receive marks from an exam system.
*/

// Array containing students' marks
const marks = [78, 92, 35, 88, 40, 67];

// filter(): selects marks that are greater than or equal to 40 (pass marks)
let getMarks = marks.filter(ele => ele >= 40);
console.log(getMarks); // [78, 92, 88, 40, 67]

// map(): adds 5 grace marks to each student's score
let getScores = marks.map(ele => ele + 5);
console.log(getScores); // [83, 97, 40, 93, 45, 72]

// reduce(): finds the highest mark in the array
let highestMark= marks.reduce((acc, ele) => acc > ele ? acc : ele);
console.log(highestMark); // 92

// find(): finds the first student who failed (marks less than 40)
let fail = marks.find(ele => ele < 40);
console.log(fail); // 35

// findIndex(): finds the index position of the mark 92
let res5 = marks.findIndex(ele => ele == 92);
console.log(res5); // 1
