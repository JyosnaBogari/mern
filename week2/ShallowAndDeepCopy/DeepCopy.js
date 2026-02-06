/*Hands-On 2: Deep Copy (Isolation & Safety Use Case)
---------------------------------------------------

🧪 Given Data:
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

🎯 Task:
      1. Create a deep copy of order
      2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged

*/

/* Hands-On 2: Deep Copy (Isolation & Safety Use Case)
---------------------------------------------------
*/

// Original order object
const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085
    }
  },
  items: [
    { product: "Laptop", price: 70000 }
  ]
};

// Create a deep copy of the order object
let copyorder = structuredClone(order);

// Modify city in the copied object
copyorder.customer.address.city = "nalgonda";

// Modify item price in the copied object
copyorder.items[0].price = 80000;

// Print original object (should remain unchanged)
console.log("order", order);

// Print copied object (shows updated values)
console.log("copyorder", copyorder);
