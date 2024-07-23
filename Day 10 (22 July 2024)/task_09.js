// task_09

// Add a click event listener to a list that logs the text content

document.addEventListener("DOMContentLoaded", function () {
  // Select the list element
  let list = document.querySelector("#myList");

  // Add a click event listener to the list
  list.addEventListener("click", function (event) {
    // Check if the clicked element is a list item
    if (event.target.tagName === "LI") {
      // Log the text content of the clicked list item
      console.log("Clicked item:", event.target.textContent);
    }
  });
});
