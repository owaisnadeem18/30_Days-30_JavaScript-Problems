// Day 03 (15 July 2024)

// Activity 01

// Write a program to check if the number is positive , negative or zero and console the results

let num = 5;

if (num > 0) {
  console.log("The number is positive ");
} else if (num == 0) {
  console.log("The number is Equal to Zero");
} else {
  console.log("The number is Negative");
}

// Activity 02
// Write a program to check if the person is eligible to vote and console the results

let age = 56;

if (age >= 18) {
  console.log("The person is eligible to vote");
} else if (age < 18) {
  console.log("The person is not eligible to vote");
}

// Activity 03
// Nested If else statements

// Write a program to find the largest of three numbers using nested if else

let num1 = 699;
let num2 = 2312;
let num3 = 62;

if (num1 > num2) {
  if (num1 > num3) {
    console.log(`${num1} is the biggest number`);
  } else {
    console.log(`${num3} is the biggest number`);
  }
} else {
  if (num2 > num3) {
    console.log(`${num2} is the biggest number`);
  } else {
    console.log(`${num3} is the biggest number`);
  }
}

// Activity 04
// Switch Case

// Write a program that uses switch case statement to determine the day of the week based on number (1-7) and log the name of day to console

let day = 3;

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day number. Please enter a number between 1 and 7.");
}

let percentage = 85; // Change this value to test different percentages
let grade;

switch (true) {
  case percentage >= 90 && percentage <= 100:
    grade = "A++";
    break;
  case percentage >= 80 && percentage < 90:
    grade = "A+";
    break;
  case percentage >= 70 && percentage < 80:
    grade = "A";
    break;
  case percentage >= 60 && percentage < 70:
    grade = "B";
    break;
  case percentage >= 50 && percentage < 60:
    grade = "C";
    break;
  case percentage >= 0 && percentage < 50:
    grade = "F";
    break;
  default:
    console.log("Invalid percentage. Please enter a number between 0 and 100.");
    break;
}

console.log(`The grade for ${percentage}% is: ${grade}`);

// Activity 05
// Ternary Operator

// Use Ternary Operator to check eiter the number is ever or odd

let number = 53;
let ans =
  number % 2 == 0
    ? ` ${number} is an even Number `
    : `${number} is an odd number`;
console.log(ans);

// Activity 06
// Combining Conditions

let year = 2024; // Change this value to test different years

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}
