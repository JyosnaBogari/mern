/* 1.HANDS-ON 1: Smart Login Status Engine
----------------------------------------

Initial data:
    let isLoggedIn = true;
    let isProfileComplete = false;
    */

//---------------------------------------------

/* HANDS-ON 1: Smart Login Status Engine
--------------------------------------
*/

// User login status
let isLoggedIn = true;

// User profile completion status
let isProfileComplete = false;
let message = "";
if (!isLoggedIn) {
  message = "Please login first";
}
// If user is logged in but profile is incomplete
else if (!isProfileComplete) {
  message = "Complete your profile";
}
// If user is logged in and profile is complete
else {
  message = "Welcome back!";
}

console.log(message);
