import { validateTitle, validatePriority, validateDueDate } from './validator.js';
const tasks = [];

// 1. Add new task
export function addTask(title, priority, dueDate) {
    // Validate using imported functions
    // If valid, add to tasks array
    // Return success/err0 message
  
  let res= validateTitle(title)
  let vpri=validatePriority(priority)
  let vd=validateDueDate(dueDate)
    if(res!=="success") return res;
  if( vpri !=="success")  return vpri;
  if(vd!=="success") return vd;
    
    tasks.push({
      id:tasks.length+1,
      title,priority,dueDate,
    isComplete:false
  });
}
addTask("Environment",'medium','12-2-26');


// 2. Get all tasks
export function getAllTasks() {
    // Return all tasks
 return tasks;

}


// 3. Mark task as complete

export function completeTask(taskId) {
    // Find task and mark as complete
 
    let task=tasks.find((ele)=>ele.id===taskId)

    if(!task) return "task not found";
    task.isComplete=true;
   return "added succesfully"
}

// Export functions