let taskForm = document.getElementById("taskForm");
let taskTitle = document.getElementById("taskTitle");
let taskPriority = document.getElementById("taskPriority");
let taskStatus = document.getElementById("taskStatus");
let taskCount = document.getElementById("taskCount");
let filterTasks = document.getElementById("filterTasks");
let taskList = document.getElementById("taskList");

let theCount = 0;
let arrOfTask = [];

function filterArrayTask() {
  let eachStatus;
  arrOfTask.filter((each) => {
    each.taskStatus = eachStatus;
  });
}

function taskTask(event) {
  event.preventDefault();
  let taskInp = taskTitle.value;
  let taskPrioInp = taskPriority.value;
  let taskStatusInp = taskStatus.value;
  let filterTasksInp = filterTasks.value;
  let taskListDisplay = taskList.value;

  if (!taskInp || taskPrioInp.value == "" || taskStatusInp == "") {
    return null;
  }

  arrOfTask.push({ taskInp, taskPrioInp, taskStatusInp });
  console.log(arrOfTask);
  theCount += 1;
  taskCount.textContent = theCount;

  taskList.innerHTML = "";

  arrOfTask.forEach((eachTask) => {
    let li = document.createElement("li");
    li.textContent = `Name: ${eachTask.taskInp}, Priority: ${eachTask.taskPrioInp} Status: ${eachTask.taskStatusInp}`;
    taskList.appendChild(li);
  });
}

taskForm.addEventListener("submit", taskTask);
