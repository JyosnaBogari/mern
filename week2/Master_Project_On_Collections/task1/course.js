const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

// Get published courses
export function getPublishedCourses() {
  return courses.filter(course => course.published === true);
}

// Sort courses by price (high → low)
export function sortCoursesByPrice() {
  let cloned = structuredClone(courses); // it created the copy for the nested object[id,title,price,publishedd]
  return cloned.sort((a, b) => b.price - a.price);
}

// Extract title and price
export function getCourseTitlesAndPrices() {
  let result = [];
  for (let course of courses) {
    result.push({ title: course.title, price: course.price });
  }
  return result;
}

// Total value of published courses
export function getTotalCourseValue() {
  let total = 0;
  let published = getPublishedCourses();
  for (let course of published) {
    total += course.price;
  }
  return total;
}

// Add course immutably
export function addNewCourse(newCourse) {
  let cloned = structuredClone(courses);
  cloned.push(newCourse);
  return cloned;
}
