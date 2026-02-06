/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books


*/

//class defined with name Book
class Book //class declaration
{
    title;
    author;
    pages;
    isAvailable=true;
    constructor(title,author,pages) //used to initialize objects
    {
        this.title=title; // this refers to the current class object
        this.author=author;
        this.pages=pages;
      
    }
    borrow()
    {
        this.isAvailable=false; 
    }
    returnBook()
    {
        this.isAvailable=true; // it return the available books
    }
    getInfo()
    {
        return this.title+" "+this.author+" "+this.pages+" "+this.isAvailable;
    }
   isLongBook()
   {
   if(this.pages>300){
   return true; //returns the pages of books which are more than 300
   }
   else{
    return false;
   }
   }
}
let p1=new Book("C","balaguruswamy",300);   //constructor calling with 5 objects
let p2=new Book("C++","sadiya",400);
let p3=new Book("Java","balaguruswamy",200);
let p4=new Book("python","sadiya sadaf",400);
let p5=new Book("js","manasa",200);

// Display info of all books
console.log(p1.getInfo())
console.log(p2.getInfo())
console.log(p3.getInfo())
console.log(p4.getInfo())
console.log(p5.getInfo())

 //Borrow 2 books and show their availability status
p1.borrow("C");
console.log(p1.isAvailable);
//checking the availability of the book "java"
p2.borrow("Java");
console.log(p2.isAvailable);

// Return 1 book and show updated status
p1.returnBook("C");
console.log(p1.isAvailable);

//Count how many books are "long books" (more than 300 pages)
let books=[p1,p2,p3,p4,p5];
let counts=books.filter(ele=>ele.pages>300).length
console.log(counts)

// List all available books
let listofavailablebooks=books.filter(ele=>ele.isAvailable===true)
console.log(listofavailablebooks)

