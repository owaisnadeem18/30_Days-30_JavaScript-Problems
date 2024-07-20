// Objects in JavaScript

// --------------------------------- Activity 01 ------------------------------------
// Object Creation & Access

// Task 01
// Create an object representing a book with properties like title , author & year and  log the object to the console

// let obj = {
//   book_name: "07 habits of highly effective people",
//   author: "Stephen Conway",
//   year: 1996,
// };

// Task 02
// Access the values of this objects and log the results to console

// console.log(obj.book_name);
// console.log(obj.author);
// console.log(obj.year);

// --------------------------------- Activity 02 ------------------------------------
// Object Methods

// Task 03
// Add a method to the book object that returns a string with book's title and author and log the result of calling

// let obj = {
//   Author: "Stephen",
//   Title: "The 7 Habits of Highly Effective People",
//   getDetail() {
//     return `The Author is : ${this.Author} and the Title is : ${this.Title}`;
//   },
// };

// console.log(obj.getDetail());

// Task 04
// Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object

// let obj = {
//   Author: "Stephen",
//   Title: "The 7 Habits of Highly Effective People",
//   year: 1997,
//   getDetail() {
//     return `The Author is : ${this.Author} and the Title is : ${this.Title}`;
//   },

//   updateYear(updateYear) {
//     this.year = updateYear;
//   },
// };

// obj.updateYear(2015);

// console.log(obj.updateYear());
// console.log(obj);

// --------------------------------- Activity 03 ------------------------------------

// Task 05
// Nested Objects
// let library = {
//   name: "Central Library", // Name of the library
//   books: [
//     // Array of book objects
//     {
//       title: "Book 1",
//       author: "Author A",
//       year: 2021,
//     },
//     {
//       title: "Book 2",
//       author: "Author B",
//       year: 2020,
//     },
//     {
//       title: "Book 3",
//       author: "Author C",
//       year: 2022,
//     },
//   ],
// };

// // Task 06
// // Now access and log the name of the library and the titles of all the books in the library

// console.log(library.name);

// // Now access the title name of the books available in the library

// console.log(library.books.map((answer) => answer.title));

// --------------------------------- Activity 04 ------------------------------------

// Task 07
// This Keyword
// Use this keyword in order to access the key value pairs of object

// let obj = {
//   book_name: "Khud say Khuda tak ka safar",
//   author: "Owais Nadeem",
//   year: 2004,

//   getDetail() {
//     return `the author is ${this.author} and the year of this book is : ${this.year}`;
//   },
// };

// console.log(obj.getDetail());

// --------------------------------- Activity 05 ------------------------------------
// Object Iteration

// Task 08
// Use a for in loop to iterate over the objects to display each and every key value pairs and console results

// let obj = {
//   name: "Owais Nadeem",
//   age: 22,
//   city: "Karachi",
//   Profession: "Student & FrontEnd Developer",
// };

// // for (let i in obj) {
// //   console.log(i);
// // }

// Task # 09
// Use Object.keys and Object.values in order to iterate the properties and values of object elements

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
