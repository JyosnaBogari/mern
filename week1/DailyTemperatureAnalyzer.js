/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.
*/
// Array of daily temperatures in Celsius
const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Filter temperatures greater than 35°C
let r1 = temperatures.filter(ele => ele > 35);
console.log(r1); // [40, 38, 42]

// Convert Celsius to Fahrenheit
//  Formula (C * 9/5) + 32
let r2 = temperatures.map(ele => (ele * 9 / 5) + 32);
console.log(r2);

// Calculate total temperature using reduce
let r3 = temperatures.reduce((acc, ele) => acc + ele, 0);

// Calculate average temperature
let avg = r3 / temperatures.length;
console.log(avg);

// Find first temperature greater than 40°C
let r4 = temperatures.find(ele => ele > 40);
console.log(r4); // 42

// Find index of temperature 28
let r5 = temperatures.findIndex(ele => ele === 28);
console.log(r5); // 2







