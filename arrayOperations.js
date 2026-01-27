/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.
*/
const temperatures=[32,35,28,40,38,30,42];
let r1=temperatures.filter(ele=>ele>35)
console.log(r1)

// convert celsius to fahreinheat
let r2=temperatures.map(ele=>(ele*9/5)+35)
console.log(r2)

let r3=temperatures.reduce((acc,ele)=>acc+ele)
let avg=r3/temperatures.length;
console.log(avg)

let r4=temperatures.find(ele=>ele>40)
console.log(r4)

let r5=temperatures.findIndex(ele=>ele==28)
console.log(r5);





/*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.*/
const courses = ["javascript", "react", "node", "mongodb", "express"];
let re1=courses.filter(ele=>ele.length>5)

console.log(re1)
let re2=courses.map(ele=>ele.toUpperCase())
console.log(re2)

let re3=courses.reduce((acc,ele)=>acc+ele+' | ')
console.log(re3)

let re4=courses.find(ele=>ele=="react")
console.log(re4)

let re5=courses.findIndex(ele=>ele=="node")
console.log(re5)


/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.*/

const marks = [78, 92, 35, 88, 40, 67];
let res1=marks.filter(ele=>ele>=40)
console.log(res1);

let res2=marks.map(ele=>ele+5)
console.log(res2);

let res3=marks.reduce((acc,ele)=>acc>ele?acc:ele)
console.log(res3);

let res4=marks.find(ele=>ele<40)
console.log(res4);

let res5=marks.findIndex(ele=>ele==92)
console.log(res5);





