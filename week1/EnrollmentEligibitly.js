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