var tasks = [];

function addTask() {
  let taskInput = document.getElementById("todoInput");
  let taskValue = taskInput.value;
  if (taskValue.trim() !== "") {
    //add Tasks
    tasks.push({
      task: taskValue,
      completed: false,
    });
    taskInput.value = "";
    updateTodoList();
  }
}
function updateTodoList() {
  const todoList = document.getElementById("todoList");
  //clear existing list data
  todoList.innerHTML = "";
  tasks.forEach((task) => {
    var listItem = document.createElement("li");
    listItem.textContent = task.task;
    listItem.className = task.completed ? "completed" : "";
    listItem.onclick = function () {
      toggleCompleted(task);
    };
    todoList.appendChild(listItem);
  });
  //function to calculate todos,completed
  updateAgregrate();
}
function toggleCompleted(task) {
  task.completed = !task.completed;
  updateTodoList();
}
function updateAgregrate() {
  let totalTasks = document.getElementById("totalTasks");
  let completedTasks = document.getElementById("completedTasks");
  let total = tasks.length;
  let completed = tasks.reduce((acc, task) => {
    return task.completed ? acc + 1 : acc;
  }, 0);
  totalTasks.textContent = total;
  completedTasks.textContent = completed;
}
function filterTasks() {
  let searchInput = document.getElementById("searchInput");
  var searchValue = searchInput.value.toLowerCase();
  let filteredTasks = tasks.filter((task) => {
    return task.task.toLowerCase().includes(searchValue);
  });
  //update todoList with filteredTask
  updateTodoListWithFilteredTasks(filteredTasks);
}
function updateTodoListWithFilteredTasks(filteredTasks) {
  let todoList = document.getElementById("todoList");
  todoList.innerHTML = "";
  filteredTasks.forEach((task) => {
    var listItem = document.createElement("li");
    listItem.textContent = task.task;
    listItem.className = task.completed ? "completed" : "";
    listItem.onclick = function () {
      toggleCompleted(task);
    };
    todoList.appendChild(listItem);
  });
  updateAgregrate();
}
