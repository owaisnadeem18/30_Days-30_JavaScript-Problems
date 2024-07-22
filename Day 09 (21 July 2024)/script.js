// Task 01

let task_01 = document.getElementById("change_content");

task_01.innerText =
  "Task 01 has been completed (This was the requirement of task 01) i.e changing content through DOM  ";

// Task 02

let task_02 = document.getElementsByClassName("task_02");

let element = task_02[0];

element.style.backgroundColor = "red";
element.style.color = "#ffffff";
element.style.padding = "30px";

console.log(element.textContent);

// Activity 02
// Task 03

// Create a new div and add some text content in this div and append it to the body

let newDiv = document.createElement("div");

newDiv.innerHTML = `
<h2>Task 03</h2>
<p>Create a new element (which is this paragraph) and then append it into the body</p>
<hr />
`;

document.body.appendChild(newDiv);

// Activity 02
// Task 04

// create a container for task 04 activity 02

let fourth_task_container = document.createElement("div");

fourth_task_container.innerHTML = `

<h2>Activity 02</h2>
<h2>Task 04</h2>
<p>Use DOM Manipluation to append an li element inside ul</p>

`;

document.body.appendChild(fourth_task_container);

// Add a ul element and also add an existing li element inside it from DOM

let ul = document.createElement("ul");

ul.innerHTML = `
  <li>Eat</li>
  <li>Sleep</li>
  <li>Code</li>
`;

let li = document.createElement("li");

li.innerHTML = `This is the Li added as Task`;

ul.appendChild(li);

let hr = document.createElement("hr");

document.body.appendChild(hr);

// Activity 03
// Removing elements from DOM

// Task 05
// Select an HTML element to remove it from the DOM

let fifth_task_container = document.createElement("div");

fifth_task_container.innerHTML = `
    <h2>Activity 03</h2>
    <h2>Task 05</h2>
    <p>Select an HTML element from DOM and then remove it </p>
    <b> <p id="del" >Click on the button below to remove this text</p></b>
    <button id = "btn" >Click to delte</button>
    <hr/>
`;

document.body.appendChild(fifth_task_container);

// get the btn button and also the paragraph , which should be deleted after clicking on the btn

let btn = document.getElementById("btn");
let para = document.getElementById("del");

btn.addEventListener("click", () => {
  para.remove();
});

// Task # 06

let sixth_container = document.createElement("div");

sixth_container.innerHTML = `
  <h2>Activity 03</h2>
  <h2>Task 06</h2>

  <p>Remove the last child of specific HTML (The element below this line has been removed as task 06) </p>
  <hr/>
  <p>Some random Text</p>

`;

document.body.appendChild(sixth_container);

// get the last child of the specific HTML element and remove it

sixth_container.lastElementChild.remove();

// Activity 04
// (Modifying Attributes & Classes)

// Task 07
// select and html element and change one of it's attributes , e.g (src of img tag)

let seventh_container = document.createElement("div");

seventh_container.classList.add("seventh");

seventh_container.innerHTML = `
  <h2>Activity 04</h2>
  <h2>Task 07</h2>
  <p>select and html element and change one of it's attributes , e.g (src of img tag)</p>
  <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" width=200 id='first_img' />
  <button id="img_changer" >
    Click me to change the img
  </button
`;

document.body.appendChild(seventh_container);

// get the btn of image changer (img_changer)

let img_changer = document.querySelector("#img_changer");

img_changer.style.display = "block";

// get the img id of first img
let image_id = document.querySelector("#first_img");

let img_1 =
  "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630";

let img_2 =
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg";

img_changer.addEventListener("click", function () {
  // if (image_id.src == img_1) {
  //   image_id.src = img_2;
  // } else {
  //   image_id.src = img_1;
  // }

  // Now replace the entire code with ternary operator

  image_id.src = image_id.src == img_1 ? img_2 : img_1;
});

// Task 08
// Remove class from an html element

let eight_task_container = document.createElement("div");

// Through this way , we can add a class to our div
eight_task_container.classList.add("eight");

// Add some content in the container

eight_task_container.innerHTML = `
  <hr/>
  <h2>Activity 04</h2>
  <h2>Task 08</h2>
  <b> <p>Remove class from an html element</p></b>
`;

// remove class from eight_task_container

eight_task_container.classList.remove("eight");

document.body.appendChild(eight_task_container);

// Activity 05
// (Event Handling)

// Task 09
// Add a click event listener to a button that changes the text content of the paragraph , by clicking on the button

// first create a div for ninth task

let ninth_task_container = document.createElement("div");

let count = 0;

ninth_task_container.innerHTML = `
  <hr />
  <h2>Activity 05</h2>
  <h2>Task 09</h2>
  <p >This below button has been unclicked till yet  </p>
  <button id="change_para" >Click me to change the text content of above paragraph</button>
`;

document.body.appendChild(ninth_task_container);

let change_para = document.querySelector("#change_para");

let paragraph = ninth_task_container.querySelector("p");

change_para.addEventListener("click", function () {
  count++;
  paragraph.innerText = `This below button has been clicked for ${count} times`;
});

// Last Task i.e task # 10
// Activity 05

// Task # 10
// Create a div element which changes it's border color on mouse over

let tenth_task_container = document.createElement("div");

tenth_task_container.innerHTML = `
<h2>Activity 05</h2>
<h2>Task 10</h2>
<p class = "para_ten" >
  I will change my border color on mouse over
</p>
`;

document.body.appendChild(tenth_task_container);

let para_ten = document.querySelector(".para_ten");

para_ten.style.border = "1px solid red";

para_ten.addEventListener("mouseover", function () {
  para_ten.style.border = "1px solid black";
});
para_ten.addEventListener("mouseout", function () {
  para_ten.style.border = "1px solid red";
});
