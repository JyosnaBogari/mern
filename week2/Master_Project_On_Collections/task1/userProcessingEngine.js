// USER DATA
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

// Get active users
export function getActiveUsers() {
  return users.filter(user => user.active === true);
}

// Get names of active users
export function getActiveUserNames() {
  let names = [];
  let activeUsers = getActiveUsers(); // get all active users
  for (let user of activeUsers) {
    names.push(user.name); // it pushes the names of active users
  }
  return names;
}

// Check if admin exists
export function isAdminExist() {
  for (let user of users) {
    if (user.role === "admin") { // checking the role if an user with admin
      return true;
    }
  }
  return false;
}

// Find user by id
export function findUserById(id) {
  return users.find(user => user.id === id); // finding user by an id
}

// Deactivate user immutably
export function deactivateUser(id) {
  let clonedUsers = structuredClone(users);
  for (let user of clonedUsers) {
    if (user.id === id) {
      user.active = false; 
    }
  }
  return clonedUsers; // it returns the users are active:false
}
