// Day 07 (19 July 2024)

// ES6 Features

// -------------------------------Activity 01-------------------------------
// Template Literals

// Task 01
// Use Template literals to create a string that includes variables for personal's name and age and log the string to console

// let person_name = "Owais";
// let person_age = 22;

// console.log(`Name of person is = ${person_name} , Age is : ${person_age}`);

// Task 02
// Create a multi line string using tempalte literals and log the string to console

// let str = `My name is Owais Nadeem .
// I am a front end web developer ,  from Pakistan !!! `;

// console.log(str);

// -------------------------------Activity 02-------------------------------
// Destructuring

// Task 03
// Use array destructuring to extract the first and the second elements from an array of numbers and log them to the console

// let arr = [1, 4, 5, 9, 2, 3];

// // First learn how to destructure an array

// let [first, second] = arr;

// console.log(
//   `The first element of array [${arr}] is ${first} and The second element of array is ${second}`
// );

// Task 04
// Use Object Destructuring to extract the title and author name from the book object and log the result to console

// let book = {
//   athor_name: "Owais Nadeem",
//   title: "Khud say Khuda tak ka safar",
// };

// // Here , we have to destructure our object

// let { athor_name, title } = book;

// console.log(
//   `The name of the author is = ${athor_name} and the title is = ${title}`
// );

// -------------------------------Activity 03-------------------------------
// Spread & Rest Operators

// Task 05
// Use the spread operator to create a new array that includes all the elements from existing array , plus additional elements and log the new array to the console

// let old_array = [1, 2, 4, 5, 2, 6];

// let another_arr = ["Owais Nadeem", "Age : 22", "Profession : Front end dev"];

// // Using the spread operator , now I have merged two arrays , in the updated_arr
// let updated_arr = [...old_array, ...another_arr];

// console.log(updated_arr);

// Task 06
// Use the rest operator in a function to accept an arbitrary number of arguments, sum them and return the result

// function add(...numbers) {
//   let sum = 0;
//   let total_nums = numbers;
//   for (let i = 0; i < total_nums.length; i++) {
//     console.log(total_nums[i]);
//     sum += total_nums[i];
//   }
//   return sum;
// }

// console.log(add(1, 2, 3, 4, 5, 6));

// -------------------------------Activity 04-------------------------------
// (Default Parameters)

// Task 07
// Write a function that takes two parameters & returns their product , with the second parameter having a default value of 1 . Log the result to the console with or without calling this second parameter

// let prod_func = (first, second = 1) => {
//   return first * second;
// };

// calling the second parameter
// console.log(prod_func(45, 2));

// -----

// let prod_func = (first, second = 1) => {
//   return first * second;
// };

// // without calling the second parameter
// console.log(prod_func(45));

// Activity 05
// Enhanced Object Literals

// Task 08
// Use Enhanced Object literals to create an object with methods and properties and log the object to the console

// let firstName = "owais";
// let LastName = "Nadeem";
// let FullName = "Owais Nadeem";

// let obj = {
//   firstName,
//   LastName,
//   FullName,

//   greet() {
//     return `Hello ! ${this.FullName} `;
//   },
// };

// console.log(obj.greet());

// Task 09
// Create an object with computed property names based on variables and log the object to the console

// let a = 4;
// let b = 6;

// let obj = {
//   [a + b]: "Sum",
//   [a * b]: "Multiply",

//   sum() {
//     return this[a + b];
//   },

//   multiply() {
//     return a * b;
//   },
// };

// console.log(obj);
// console.log(obj.sum());
// console.log(obj.multiply());
// // console.log(obj.sum());
