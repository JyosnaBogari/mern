/*Assignment 3: Age Calculator (Intermediate)
-------------------------------------------
Input:
    let dob = "2000-05-15";


Tasks:
        1. Calculate exact age in years*/


// Date of birth
let date11 = new Date("2000-05-21");

// Current date
let d = new Date();

// Check if birthday already occurred this year
if ((d.getMonth() >= date11.getMonth()) && (d.getDate() >= date11.getDate())) {
    console.log(d.getFullYear() - date11.getFullYear());
}
else {
    // If birthday has not yet occurred
    let ley = d.getFullYear() - date11.getFullYear();
    console.log(ley - 1);
}
