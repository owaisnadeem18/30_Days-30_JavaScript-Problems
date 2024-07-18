// Day 06 (18 July 2024)

// Arrays

// ---------------------- Activity 01----------------------
// Array Creation and Access

// Task 01
// Create an array of numbers from 1 to 5 and console the results

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// Task 02
// Access the first and the last number of array and console the results

// console.log(arr[0]); // accessing first number
// console.log(arr[arr.length - 1]); // accessing last number

// ---------------------- Activity 02 ----------------------

// Array Methods (Basics)

// Task 03
// arr.push(45);

// console.log(arr); // array has been updated with the new pushed value

// Task 04
// Use the pop method to remove the last element from the array

// arr.pop();
// console.log(arr);

// Task 05
// Use the shift method to remove the element into our array (from the start)

// console.log(arr);

// console.log(arr);

// arr.shift();
// console.log(arr);

// Task 06
// Use the Unshift method to add the element into our array (from the start)

// arr.unshift(45); // Unshift daalta hay new number ko array may , jab k shift nikaalta hay new number ko array say

// console.log(arr);

// ---------------------- Activity 03 ----------------------
// Array Methods (Intermediate)

// Task 07
// Use the map method of array to double the every element of an array and console the results

// let arr = [2, 4, 5, 7, 9];

// console.log(arr.map((i) => i * i));

// Task 08
// Use the filter method to filter out only the even numbers from the array

// arr = [4, 8, 41, 31, 90, 43, 76, 53, 42, 2, 61];

// console.log(
//   `The even numbers array is = [${arr.filter((even) => even % 2 == 0)}]`
// );

// Task 09
// Use the reduce method to calculate the sum of  all the numbers in the array and console the results

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = arr.reduce((accum, reducer) => {
//   return accum + reducer;
// }, 0);

// console.log(sum);

// ---------------------- Activity 04 ----------------------
// Array Iteration

// Task 10
// Use a for loop to Iterate over each element and console the results

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Task 11
// Use the for each method to Iterate over the array and log each element to the console

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.forEach((item) => {
//   console.log(item);
// });

// Interview Question :
// What is the basic difference between for each and map method of array

// - map returns a new array
// - for each returns undefined and it does not create a new array

// ---------------------- Activity 05 ----------------------
// Multi Dimensional array

// Task 12
// Creates a 2D matrix array and console the results

// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// console.log(arr);

// // Task 13
// // Access and Log a specific element from the 2D array

// console.log(arr[0]);
// console.log(arr[arr.length - 1]);
// console.log(arr[1]);
