import { addTask,getAllTasks,completeTask} from './task.js'


//Add some tasks
console.log(addTask("Environment", "medium", "2026-02-12"));
console.log(addTask("You are Not Alone", "high", "2026-03-01"));

// 2. Display all tasks
console.log(getAllTasks());

  // 3. Complete a task
console.log(completeTask(1));

console.log(getAllTasks());