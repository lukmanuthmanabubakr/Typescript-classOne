let statusForm = document.getElementById("statusForm");
let userName = document.getElementById("userName");
let userRole = document.getElementById("userRole");
let userStatus = document.getElementById("userStatus");
let accessMessage = document.getElementById("accessMessage");
let submissionCount = document.getElementById("submissionCount");
let historyList = document.getElementById("historyList");

let submitCount = 0;
let history = [];

function userRequirements(event) {
  event.preventDefault();

  let name = userName.value;
  let role = userRole.value;
  let status = userStatus.value;

  if (!name && !role && !status) {
    accessMessage.textContent = "Input the fields above";
  }

  if (name && role === "admin" && status === "active") {
    accessMessage.textContent = `${name} has full access message`;
  } else if (name && role === "admin" && status === "inactive") {
    accessMessage.textContent = `${name} have the restricted admin message`;
  } else if (name && role === "member" && status === "active") {
    accessMessage.textContent = `${name} has the standard access message`;
  } else if (name && role === "member" && status === "inactive") {
    accessMessage.textContent = `${name} has the suspended message`;
  } else if (name && role === "guest" && status === "inactive") {
    accessMessage.textContent = `${name} will view-only message`;
  } else {
    return null;
  }

  submitCount++;
  submissionCount.textContent = `Submission count is ${submitCount}`;

  history.push({ name, role, status });

  historyList.innerHTML = "";

  history.forEach((theRole) => {
    let li = document.createElement("li");
    li.textContent = `${theRole.name} has the role of ${role} and the status is ${status}`;
    historyList.appendChild(li);
  });
}
statusForm.addEventListener("submit", userRequirements);
