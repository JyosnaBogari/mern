

// 1. Validate task title (not empty, min 3 chars)
export function validateTitle(title) {
     if(!title)
     {
        return "title is empty";
     }
     if(title.length<3)
     {
        return "give the title with more than 3 chars";
     }
    
        return "success";
     
}


// 2. Validate priority (must be: low, medium, high)
export function validatePriority(priority) {
  if(!priority)
  {
    return "priority is empty";
  }
  if(priority==='low'|| priority==='medium' || priority==='high')
  {
    return "success";
  }
  return "Invalid";
}

// 3. Validate due date (must be future date)
export function validateDueDate(date) {
  
 if(new Date(date)>new Date())
 {
return "success";
 }
 
  return "the date must be on or before future date";
 
}
