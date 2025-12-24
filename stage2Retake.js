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
  let filterTasksInp = filterTasks.value;
  let filteredTask;

  if (filterTasksInp === "all") {
    filteredTask = arrOfTask;
  } else if (filterTasksInp === "pending" || filterTasksInp === "completed") {
    filteredTask = arrOfTask.filter((eachTask) => {
      return eachTask.taskStatusInp === filterTasksInp;
    });
  } else {
    filteredTask = arrOfTask.filter((eachTask) => {
      return eachTask.taskPrioInp === filterTasksInp;
    });
  }

  taskList.innerHTML = "";

  filteredTask.forEach((eachTask) => {
    let li = document.createElement("li");
    li.textContent = `Name: ${eachTask.taskInp}, Priority: ${eachTask.taskPrioInp} Status: ${eachTask.taskStatusInp}`;
    taskList.appendChild(li);
  });
}

function taskTask(event) {
  event.preventDefault();
  let taskInp = taskTitle.value;
  let taskPrioInp = taskPriority.value;
  let taskStatusInp = taskStatus.value;

  if (!taskInp || taskPrioInp.value == "" || taskStatusInp == "") {
    return null;
  }

  arrOfTask.push({ taskInp, taskPrioInp, taskStatusInp });
  console.log(arrOfTask);
  theCount += 1;
  taskCount.textContent = theCount;

  filterArrayTask();
}
taskForm.addEventListener("submit", taskTask);
filterTasks.addEventListener("change", filterArrayTask);
