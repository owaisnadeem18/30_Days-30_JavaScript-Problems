// Day 04 (16 July 2024)

// Functions

// Activity 01
// (Function declaration)

// Task 01
// Check if the number is even or odd , create a function to check it

// num = 24;

// let ifEven = (number) => {
//   return num % 2 != 0 ? "odd" : "even";
// };

// console.log(`The number ${num} is ${ifEven(num)}`);

// Task 02
// Write a function to print the square of a number and then print the result to console

// let num = 12;

// let square = (num) => num * num;

// console.log(`The square of the number ${num} is ${square(num)}`);

// Activity 02
// (Function Expression)

// Task 03
// Write a function expression to find the maximum of two numbers and console the results

// let num1 = 2;
// let num2 = 5;

// let FindMax = (one, two) =>
//   one > two
//     ? `${one} (num1) is greator than ${two} (num2)`
//     : `${two} (num2) is greator than ${one} (num1)`;

// console.log(FindMax(num1, num2));

// Task 04
// Write a function expression to concatenate two strings and console the results

// let str1 = "owais";
// let str2 = "nadeem";

// let concateStr = (a, b) => `${a} ${b}`;

// console.log(concateStr(str1, str2));

// Activity 03
// (Arrow Functions)

// Task 05
// Write a program in which create an arrow function which can add two numbers with each other and console the result

// let num1 = 24;
// let num2 = 41;

// let sumFunc = (a, b) => a + b;

// console.log(sumFunc(num1, num2));

// Task 06
// Write a program in which create an arrow function which can check either the specific character is present in the str and return boolean value in the console as result

// let str = "Owais Nadeem";
// check_char = "";

// let checkChar = (string, char) => {
//   str = string.split("");

//   for (let i = 0; i < str.length; i++) {
//     if (string[i] == char) {
//       return true;
//     }
//   }

//   return false;
// };

// console.log(checkChar(str, checkChar));

// Activity 04
// (Function Parameters and Default Values)

// // Task 07
// // Write a function that takes two parameters and returns the product of them , provide the second parameter as a default value

// let num1 = 6;
// let num2 = 9;

// let productFunc = (a, b = 5) => a * b;

// console.log(productFunc(num1, num2));

// Task 08

// Write a function that takes a person's name and age as argument and then returns the greetings on the console

// let UserName = "Owais Nadeem";
// let age = 22;

// let greet = (naam, umer = 67) => `Hello ! ${naam} , Your Age is ${umer}`;

// console.log(greet(UserName, age));

// Activity 05
// (Higher Order Functions In JavaScript)

// Task 09:
// Write a higher order function that takes a function and a number and calls the function that many times

// let b = 4;

// let func = () => {
//   console.log(`I have been called `);
// };

// let HigherOrderFunc = (a, b) => {
//   for (let i = 0; i < b; i++) {
//     a();
//   }
// };

// HigherOrderFunc(func, b);

// Task 10:
// Write a higher order function that takes two functions and a value , applies the first function to the value , and then applies the second function to the result.
