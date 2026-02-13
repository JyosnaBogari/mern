/*ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"
*/
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// Get only employees from IT department
let getEmp=employees.filter(ele=>ele.department==="IT");
console.log(getEmp);


//here if i use () instead of {} then no need to write the return 
// we can write like:
// let res2=employees.map(ele=>({ // here 
//
//         id:ele.id,
//         name:ele.name,
//         salary:ele.salary,
//        department:ele.department,
//        netSalary:ele.salary+ele.salary*0.10
// 
// }));  
let res2=employees.map(ele=>{ 
    return{   // here if keep the { under return it shows error.
      //return  // here the js put ; automatically and thinks that it is end of program so the error occurs
      //{ 
        id:ele.id,
        name:ele.name,
        salary:ele.salary,
       department:ele.department,
       netSalary:ele.salary+ele.salary*0.10
};
});
console.log(res2);
// Calculate total salary payout of all employees
let totalSalary=employees.reduce((acc,ele)=>acc+ele.salary,0);
console.log(totalSalary);

// Find employee whose salary is 30000
let res4=employees.find(ele=>ele.salary===30000);
console.log(res4);

// Find index of employee named "Neha"
let res5=employees.findIndex(ele=>ele.name==="Neha");
console.log(res5);


