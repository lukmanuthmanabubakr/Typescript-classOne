let taskForm = document.getElementById("taskForm"); // this allows me to get conmnected to my form in html
let taskTitleInput = document.getElementById("taskTitle"); // this allows me to get connected to my text input in html
let taskPrioritySelection = document.getElementById("taskPriority"); // this allows me to get conmnected to my form priotity selection in html
let taskStatusCheck = document.getElementById("taskStatus"); // this allows me to get connected to my form status in html
let taskCounter = document.getElementById("taskCount"); // this allows me to get connected to my form count when a user input a task in html
let filterEachTak = document.getElementById("filterTasks"); // this allows me to get connected to my filtgered response in html
let taskAllList = document.getElementById("taskList"); // this allows me to get connected to all respsones in html

let listOfTask = []; // this is the array all the respone in the task will be stored
let taskCount = 0; // this counter serves as times the function was call.

function filterTrack() {
  // This funtion serves as the function that handles filtering of task from all selectedors
  let filteringTask = filterEachTak.value; // this helps to get the value of the filteringtask in the output html
  let allFilters; // i assigned this here because i want to get all users

  if (filteringTask === "all") {
    // this says that if the value of the filtered is the same as  all
    allFilters = listOfTask; // this  now say that that it should assing the allfilters be the same with the listOf task which is in  the array
  } else if (filteringTask === "pending" || filteringTask === "completed") {
    // this sayes that if the task filters value is same as pending or complted.
    allFilters = listOfTask.filter((eactStatus) => {
      // then this says that it shoild chekc in the list of array and check the status that has anyof that
      return eactStatus.taskStaCheckers === filteringTask;
    }); // then this helps pusing thme out tto the ui html
  } else if (
    // this too work vise vercse for the priotiyy
    filteringTask === "low" ||
    filteringTask === "medium" ||
    filteringTask === "high"
  ) {
    allFilters = listOfTask.filter((eactStatus) => {
      return eactStatus.taskSelPrio === filteringTask;
    });
  } else {
    return null;
  }

  taskAllList.innerHTML = "";

  allFilters.forEach((eachTask, index) => {
    let li = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.textContent = "delete";
    let markComBtn = document.createElement("button");
    markComBtn.textContent = "Mark complete";

    delBtn.addEventListener("click", function () {
      toDelete(index);
    });
    markComBtn.addEventListener("click", function () {
      markComplete(index);
    });
    li.textContent = `Task: ${eachTask.taskInput}. Priority: ${eachTask.taskSelPrio}. Status: ${eachTask.taskStaCheckers}. Date: ${eachTask.date}-${eachTask.month}-${eachTask.year}. Time: ${eachTask.hour}:${eachTask.mins}`;
    li.appendChild(delBtn);
    li.appendChild(markComBtn);
    taskAllList.appendChild(li);
  });
}

function toDelete(index) {
  listOfTask.splice(index, 1);
  taskCount -= 1;
  taskCounter.textContent = taskCount;
  filterTrack();
}

function markComplete(index) {
  listOfTask[index].taskStaCheckers = "completed";
  filterTrack();
}

function trackTask(event) {
  event.preventDefault();

  let taskInput = taskTitleInput.value;
  let taskSelPrio = taskPrioritySelection.value;
  let taskStaCheckers = taskStatusCheck.value;
  let todaysDate = new Date();

  let date = todaysDate.getDate();
  let month = todaysDate.getMonth() + 1;
  let year = todaysDate.getFullYear();

  let hour = todaysDate.getHours();
  let mins = todaysDate.getMinutes();

  if (!taskInput || taskSelPrio == "" || taskStaCheckers == "") {
    return null;
  }

  listOfTask.push({
    taskInput,
    taskSelPrio,
    taskStaCheckers,
    date,
    month,
    year,
    hour,
    mins,
  });

  taskAllList.textContent = listOfTask;
  console.log(listOfTask);

  taskCount += 1;
  taskCounter.textContent = taskCount;
  console.log(taskCount);

  filterTrack();
}
taskForm.addEventListener("submit", trackTask);
filterEachTak.addEventListener("change", filterTrack);
