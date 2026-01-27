let totalAmount = 0;
//1. Add ₹500 to the total
totalAmount+=500;

// Add ₹1200 to the total
totalAmount+=1500; //2000

//Apply a ₹200 discount
totalAmount-=200; //1800

//. Add 18% GST
let gstRate=18;
let gstAmount=totalAmount*(gstRate/100); // 1800*18/100 //324
totalAmount=totalAmount+gstAmount; //1800+324=2124

 // 5. Print the final bill amount
console.log("Final bill Amount "+totalAmount); 

//tofixed used for round figure to 2 decimals
