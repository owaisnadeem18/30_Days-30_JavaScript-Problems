// Activity 01

// Arithmetic Operations

// Write a Program to find the sum of two numbers

let add = (a, b) => {
  return a + b;
};

console.log(add(3, 7));

// Write a Program to find the subtraction of two numbers

let sub = (a, b) => {
  return a - b;
};

console.log(sub(3, 7));

// Write a Program to find the division of two numbers

let division = (a, b) => {
  return a / b;
};

console.log(division(3, 7));

// Write a Program to find the multiply of two numbers

let multiply = (a, b) => {
  return a * b;
};

console.log(multiply(3, 7));

// Write a Program to find the remainder when two numbers are divided by each other using modulus operator

let modulus = (a, b) => {
  return a % b;
};

console.log(modulus(10, 3));

// Activity 02 Assignment operator (+=) & (-=)

let variable = 45;
variable += 3;
console.log(variable);

let variable2 = 45;
variable2 -= 3;
console.log(variable2);

// Activity 03 Comparison operator (<=) , (>=) , (==) , (===)

let num1 = 43;
let num2 = 13;

// compare these numbers , the result will come in boolean form (true or false)

console.log(num1 > num2);

console.log(num1 < num2);

console.log(num1 === num2);
console.log(num1 == num2);

console.log(num1 >= num2);
console.log(num1 <= num2);

// Activity 04 Logical operators (&&) , (||) , (!)

// && returns true when both conditions are true
// || returns true when any one condition is true
// ! converts true to false and false to true

console.log("&& Operator");

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("|| Operator");

console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(true || false);

let num = 32;
let num_2 = 42;

console.log(num && num_2);
console.log(num || num_2);
console.log(num != num_2);

// Ternary Operator

let number = 23;

let result = number > 0 ? "positive number" : "negative number";

console.log(result);

let neg_number = -123;

let neg_result = neg_number > 0 ? "positive number" : "negative number";

console.log(neg_result);
