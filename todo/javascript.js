
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

function addTask() {
  let task = taskInput.value;
  let taskItem = `<li><input type="checkbox" onclick="markCompleted(this)"> ${task}</li>`;
  taskList.insertAdjacentHTML("beforeend", taskItem);
  taskInput.value = "";
}

function markCompleted(checkbox) {
  let taskItem = checkbox.parentNode;
  if (checkbox.checked) {
    taskItem.classList.add("completed");
  } else {
    taskItem.classList.remove("completed");
  }
}
