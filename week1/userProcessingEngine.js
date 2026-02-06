const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

/*TASKS
------
MODULE-1 :USER PROCESSING ENGINE
  -> Get only active users
  -> Extract names of active users
  -> Check if any admin exists
  -> Find user by id
  -> Deactivate a user immutably*/

  //-> Get only active users
  let activeusers=users.filter(ele=>ele.active===true );
  console.log(activeusers)

  // -> Extract names of active users
  let namesofactiveusers=users.map(ele=>ele.name);
  console.log(namesofactiveusers)

  //  -> Check if any admin exists
  let adminexists=users.find(ele=>ele.role==="admin")
  console.log(adminexists)
  
  //-> Find user by id
  let findbyid=users.find(ele=>ele.id===1)
  console.log(findbyid);

  // Deactivate a user immutably
let updatedUsers = users.map(user =>
  user.id === 1 ? { ...user, active: false } : user
);




