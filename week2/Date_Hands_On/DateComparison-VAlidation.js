/*  Date Comparison & Validation (Beginner → Intermediate)
--------------------------------------------------------------------

 Given:
      let enrollmentDeadline = new Date("2026-01-20");

Tasks:
  1.Check if:
       Today is before deadline → "Enrollment Open"
      Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
       Input: "2026-02-30" 
      Detect whether the date is valid or invalid

  */

//task1

// Enrollment deadline date
let enrollmentDeadline = new Date("2026-01-22");

// Get today's date
let today = new Date();

// If today is before the deadline
if (today < enrollmentDeadline) {
    console.log("Enrollment Open");
}

// If today is after the deadline
if (today > enrollmentDeadline) {
    console.log("Enrollment Closed");
}


//task 2
let InputDate="2026-02-30";//^HERE THE JS AUTOMATICALLY CONVERTS TO CORRECT DATA FROMAT
console.log(InputDate);//2026-03-02T00:00:00.000Z
let d=new date(InputDate);
//~ here toISOString is not needed because already js converted to the correct format in above
//console.log(Input.toISOString());//2026-03-02T00:00:00.000Z 
// ~ we can use ISOString when we need to convert into ISO fromat 
let correctedDate =d.toISOString().split("T")[0];  //2026-03-02 

console.log(correctedDate);
if(Input === correctedDate)
{
    console.log("valid");
}
else
{
    console.log("Invalid");
}

