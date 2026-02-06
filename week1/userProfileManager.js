
/*Assignment 1: User Profile Manager
----------------------------------
Scenario : You are managing a logged-in user’s profile in a web application.

Test data:
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};*/

const user={
    id:101,
    uname:"jyosna",
    email:"jyosna@gmail.com",
    role:"student",
    isActive:true
}
console.log(user.uname);
console.log(user.email);
user.lastLogin="2026-01-01";
user.role="admin";
delete user.isActive;
console.log(Object.keys(user));

