// Day 10 (22 July 2024)

// Event Listeners In JavaScript

// Activity 01
// (Basic Event Handling)

// Task 01

para_task_one = document.getElementById("para_task_one");

button_task_one = document.getElementById("button_task_one");

button_task_one.addEventListener("click", () => {
  para_task_one.innerText = `Task 01 has been done`;
});

let img_task_02 = document.getElementById("img_task_02");

let img_1 =
  "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg";

img_task_02.addEventListener("dblclick", function () {
  img_task_02.style.opacity =
    img_task_02.style.opacity === "0" || img_task_02.style.opacity === ""
      ? "1"
      : "0";
});

let box_activity_02 = document.getElementById("box_activity_02");

box_activity_02.addEventListener("mouseover", function () {
  box_activity_02.style.backgroundColor = "black";
  box_activity_02.style.color = "white";
  box_activity_02.style.cursor = "pointer";
});

box_activity_02.addEventListener("mouseout", () => {
  box_activity_02.style.backgroundColor = "white";
  box_activity_02.style.color = "black";
});

// Activity 03
// KeyBoard Event Listeners

// Task 05
// Use of key down events

let activity_03 = document.getElementById("activity_03");

activity_03.addEventListener("keydown", (e) => {
  console.log(e.key);
});

// Task 06
// Use of key up events

let activity_03_task_6 = document.getElementById("activity_03_task_6");

// I am getting the task 06 paragraph , in which I will display the input field data and the context
const task_6_para = document.getElementById("task_6_para");
activity_03_task_6.addEventListener("keyup", (e) => {
  task_6_para.innerText = `${e.target.value}`;
});

// Activity 04
// (Form Events)

// Task 07
// Add a submit event listener in the form and prevent it's default behaviour of getting refreshed

let submit_task_07 = document.getElementById("submit_task_07");

submit_task_07.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Submitted !!! ");
});

// Task 08
// Add a change event listener to a select drop down that displays the selected value in a paragraph
