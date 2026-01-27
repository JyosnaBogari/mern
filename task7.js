/* 1.HANDS-ON 1: Smart Login Status Engine
----------------------------------------

Initial data:
    let isLoggedIn = true;
    let isProfileComplete = false;
    */

//---------------------------------------------


let isLoggedIn = true;
let isProfileComplete = false;
let message="";
if(!isLoggedIn)
{
  message="Please login first";
}
else if(!isProfileComplete)
{
    message="Complete your profile";
}
else 
{
    message="Welcome back!";
}
console.log(message);


//----------------------------------------

/*HANDS-ON 2: Course Price Tag Labeler
------------------------------------
Initial data:
     let price = 1299;*/

let price=1299;
let label="";
if(price<500)
{
    label="Budget Course";
}
else if(price>500 && price<1000)
{
    label="Standard course";
}
else if(price>1000)
{
      label="Premium course";
}
else {
    label="no other course avaliable.Please check the price!";
}
let courseTag=label;
console.log(courseTag);

//-----------------------------------------

/*HANDS-ON 3: Enrollment Eligibility Checker
------------------------------------------
Initial data:
    let hasPaid = true;
    let hasCompletedBasics = false;*/

    let hasPaid = true;
    let hasCompletedBasics = false;
    let enrollMessage=(hasPaid && hasCompletedBasics)?"Enroll Now":"Complete Requirements";
   console.log(enrollMessage);