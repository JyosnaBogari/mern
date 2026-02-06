/* Assignment 2: Online Course Name Processor
--------------------------------------------
Scenario: Preparing a course list for website display
*/

// Array of course names
const courses = ["javascript", "react", "node", "mongodb", "express"];

// gets course names whose length is more than 5 characters
let re1 = courses.filter(ele => ele.length > 5);
console.log(re1);

// converts each course name to uppercase
let re2 = courses.map(ele => ele.toUpperCase());
console.log(re2);

// combines all course names into one string separated by |
let re3 = courses.reduce((acc, ele) => acc + ele + " | ", "");
console.log(re3);

//finds the course name "react"
let re4 = courses.find(ele => ele == "react");
console.log(re4);

//  finds the index position of "node"
let re5 = courses.findIndex(ele => ele == "node");
console.log(re5);
