// Day 04 (14 July 2024) Loops

// Activity 01
// For Loop

// Use for loop to print numbers from 1 to 10

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Activity 02
// For Loop

// Write a program using for loop in which print the table of 5 till 10

// let num = 5;

// for (let i = 1; i <= 10; i++) {
//   console.log(`${num} x ${i} = ${num * i}`);
// }

// Activity 03
// While Loop

// Write a program to calculate the sum of numbers from 1 to 10 using a while loop

// let i = 0;
// let x = 0;

// while (x <= 10) {
//   i = i + x;
//   x++;
// }

// console.log(`The sum of 10 numbers is = ${i}`);

// Activity 04
// While Loop

// Write a program to print numbers from 10 to 1 using while loop

// let num = 10;

// while (num >= 1) {
//   console.log(num);
//   num--;
// }

// Activity 05
// Do While Loop

// Write a program in which print numbers from 1 to 5 using do while loop

// num = 1;

// do {
//   console.log(num);
//   num++;
// } while (num <= 5);

// Activity 06
// Do While Loop

// Write a function to calculate the factorial of a function using do while loop

// let num = 5;
// let fact = 1;

// do {
//   fact *= num;
//   num--;
// } while (num > 0);

// console.log(fact);

// Activity 07
// Nested Loops

// let result;

// for (let i = 1; i <= 5; i++) {
//   result = "";
//   for (let j = 1; j <= i; j++) {
//     result += "*";
//   }
//   console.log(result);
// }

// Activity 08
// Loop Control Statements

// Write a program to print the numbers from 01 to 10 , but skip number 5

// for (let i = 1; i < 11; i++) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(i);
// }

// Activity 09
// Loop Control Statements

// Write a program to print the numbers from 01 to 10 , but stop the loop when number is 7

for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  }
  console.log(i);
}
