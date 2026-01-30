<<<<<<< HEAD
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

  let activeusers=users.filter(ele=>ele.active===true );
  console.log(activeusers)

  let namesofactiveusers=users.map(ele=>ele.name);
  console.log(namesofactiveusers)

  let adminexists=users.find(ele=>ele.role==="admin")
  console.log(adminexists)
  
  let findbyid=users.find(ele=>ele.id===1)
  console.log(findbyid);

  



=======
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

  let activeusers=users.filter(ele=>ele.active===true );
  console.log(activeusers)

  let namesofactiveusers=users.map(ele=>ele.name);
  console.log(namesofactiveusers)

  let adminexists=users.find(ele=>ele.role==="admin")
  console.log(adminexists)
  
  let findbyid=users.find(ele=>ele.id===1)
  console.log(findbyid);

  



>>>>>>> 9fa1f26c4b5b57483ca22ce9d5a941900d0767d5
