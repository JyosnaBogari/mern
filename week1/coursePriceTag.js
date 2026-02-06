//----------------------------------------

/* HANDS-ON 2: Course Price Tag Labeler
------------------------------------
*/

// Course price
let price = 1299;

// Variable to store course label
let label = "";

// Check if the course price is low
if (price < 500) {
    label = "Budget Course";
}
// Check if the course price is in mid range
else if (price > 500 && price < 1000) {
    label = "Standard course";
}
// Check if the course price is high
else if (price > 1000) {
    label = "Premium course";
}
// For any other unexpected price value
else {
    label = "no other course avaliable. Please check the price!";
}

// Assign final label to courseTag
let courseTag = label;

// Print the course tag
console.log(courseTag);
