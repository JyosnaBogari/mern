/*
ASSIGNMENT 5:
Bank Transaction Analyzer
*/

// Bank transactions data
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// Get only credit transactions
let credit = transactions.filter(ele => ele.type === "credit");
console.log(credit);

// Extract amounts from credit transactions
let res2 = res1.map(ele => ele.amount);
console.log(res2);

// Calculate final balance (add credit, subtract debit)
let finaltransaction = transactions.reduce((acc, ele) => {
    if (ele.type === "credit") {
        return acc + ele.amount;
    } else {
        return acc - ele.amount;
    }
}, 0);
console.log(finaltransaction );

// Find the first debit transaction
let debit = transactions.find(ele => ele.type === "debit");
console.log(debit);

// Find the index of transaction having amount 10000
let res5 = transactions.findIndex(ele => ele.amount === 10000);
console.log(res5);
