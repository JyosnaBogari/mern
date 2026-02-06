const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

// Merge cart with courses
export function mergeCartWithCourses(courses) {
  let result = [];
  for (let item of cart) {
    let course = courses.find(c => c.id === item.courseId);
    if (course) {
      result.push({
        title: course.title,
        price: course.price,
        qty: item.qty
      });
    }
  }
  return result;
}

// Calculate total cart amount
export function getCartTotal(courses) {
  let total = 0;
  let merged = mergeCartWithCourses(courses);
  for (let item of merged) {
    total += item.price * item.qty;
  }
  return total;
}

// Increase quantity immutably
export function increaseQuantity(courseId) {
  let cloned = structuredClone(cart);
  for (let item of cloned) {
    if (item.courseId === courseId) {
      item.qty += 1;
    }
  }
  return cloned;
}

// Remove course from cart
export function removeFromCart(courseId) {
  return cart.filter(item => item.courseId !== courseId);
}
