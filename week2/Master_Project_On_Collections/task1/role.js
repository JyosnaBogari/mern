const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

// Get all role names
export function getRoleNames() {
  return Object.keys(roles);
}

// Check if student can delete
export function canStudentDelete() {
  return roles.student.includes("delete");
}

// Get all unique permissions
export function getAllPermissions() {
  let permissions = [];
  for (let role in roles) {
    for (let perm of roles[role]) {
      if (!permissions.includes(perm)) {
        permissions.push(perm);
      }
    }
  }
  return permissions;
}

// Add new role immutably
export function addModeratorRole() {
  let cloned = structuredClone(roles);
  cloned.moderator = ["view", "update"];
  return cloned;
}
