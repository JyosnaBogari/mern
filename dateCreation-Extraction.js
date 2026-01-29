<<<<<<< HEAD
/*
Assignment 1: Date Creation & Extraction (Beginner)
---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss*/

//& Create a Date object for current date & time.
let date1=new Date();

//&Extract and display:
console.log(date1.getFullYear());
console.log(date1.getMonth());
console.log(date1.getDate());
console.log(date1.getDay());
console.log(date1.getHours());
console.log(date1.getMinutes());
console.log(date1.getSeconds());

//&Display the date in this format:
//&DD-MM-YYYY HH:mm:ss
let date=new Date().toString();
console.log(date);                  


/*Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
--------------------------------------------------------------------

 Given:
      let enrollmentDeadline = new Date("2026-01-20");

Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
      * Input: "2026-02-30" 
      * Detect whether the date is valid or invalid

  */
let enrollmentDeadline = new Date("2026-01-22");
let today=new Date();
if(today<enrollmentDeadline)
{
    console.log("Enrollment Open");
}
if(today>enrollmentDeadline)
{
    console.log("Enrollment Closed");
}

let Input=new Date("2026-02-30");//^HERE THE JS AUTOMATICALLY CONVERTS TO CORRECT DATA FROMAT
console.log(Input)//2026-03-02T00:00:00.000Z
//~ here toISOString is not needed because already js converted to the correct format in above
//console.log(Input.toISOString());//2026-03-02T00:00:00.000Z 
// ~ we can use ISOString when we need to convert into ISO fromat 
let corrected =Input.toISOString().split("T")[0]; //2026-03-02 
console.log(corrected);
if(Input === corrected)
{
    console.log("valid");
}
else
{
    console.log("Invalid");
}
/*Assignment 3: Age Calculator (Intermediate)
-------------------------------------------
Input:
    let dob = "2000-05-15";


Tasks:
        1. Calculate exact age in years*/


let date11=new Date("2000-05-21");
let d=new Date();
if((d.getMonth()>=date11.getMonth()) && (d.getDate()>=date11.getDate()))
{
console.log(d.getFullYear()-date11.getFullYear());
}
else{
    let ley=d.getFullYear()-date11.getFullYear();
    console.log(ley-1);
}
=======
/*
Assignment 1: Date Creation & Extraction (Beginner)
---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss*/

//& Create a Date object for current date & time.
let date1=new Date();

//&Extract and display:
console.log(date1.getFullYear());
console.log(date1.getMonth());
console.log(date1.getDate());
console.log(date1.getDay());
console.log(date1.getHours());
console.log(date1.getMinutes());
console.log(date1.getSeconds());

//&Display the date in this format:
//&DD-MM-YYYY HH:mm:ss
let date=new Date().toString();
console.log(date);                  


/*Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
--------------------------------------------------------------------

 Given:
      let enrollmentDeadline = new Date("2026-01-20");

Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
      * Input: "2026-02-30" 
      * Detect whether the date is valid or invalid

  */
let enrollmentDeadline = new Date("2026-01-22");
let today=new Date();
if(today<enrollmentDeadline)
{
    console.log("Enrollment Open");
}
if(today>enrollmentDeadline)
{
    console.log("Enrollment Closed");
}

let Input=new Date("2026-02-30");//^HERE THE JS AUTOMATICALLY CONVERTS TO CORRECT DATA FROMAT
console.log(Input)//2026-03-02T00:00:00.000Z
//~ here toISOString is not needed because already js converted to the correct format in above
//console.log(Input.toISOString());//2026-03-02T00:00:00.000Z 
// ~ we can use ISOString when we need to convert into ISO fromat 
let corrected =Input.toISOString().split("T")[0]; //2026-03-02 
console.log(corrected);
if(Input === corrected)
{
    console.log("valid");
}
else
{
    console.log("Invalid");
}
/*Assignment 3: Age Calculator (Intermediate)
-------------------------------------------
Input:
    let dob = "2000-05-15";


Tasks:
        1. Calculate exact age in years*/


let date11=new Date("2000-05-21");
let d=new Date();
if((d.getMonth()>=date11.getMonth()) && (d.getDate()>=date11.getDate()))
{
console.log(d.getFullYear()-date11.getFullYear());
}
else{
    let ley=d.getFullYear()-date11.getFullYear();
    console.log(ley-1);
}
>>>>>>> 9fa1f26c4b5b57483ca22ce9d5a941900d0767d5
