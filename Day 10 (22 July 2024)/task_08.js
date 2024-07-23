document.addEventListener("DOMContentLoaded", () => {
  let selected_container = document.querySelector("#select_container");
  let para = document.querySelector("#para");

  selected_container.addEventListener("change", function () {
    let selected_option = selected_container.value;
    para.textContent = "Selected value: " + selected_option;
  });
});
