let showAll = document.getElementById("showAll");
let showActive = document.getElementById("showActive");
let showAdmins = document.getElementById("showAdmins");
let userCount = document.getElementById("userCount");
let userList = document.getElementById("userList");

let users = [
  { username: "Liam", age: 28, role: "admin", isActive: true },
  { username: "Emma", age: 22, role: "editor", isActive: false },
  { username: "Noah", age: 35, role: "viewer", isActive: true },
  { username: "Olivia", age: 30, role: "editor", isActive: true },
  { username: "Aiden", age: 27, role: "admin", isActive: false },
  { username: "Sophia", age: 24, role: "viewer", isActive: true },
  { username: "Jackson", age: 31, role: "editor", isActive: false },
  { username: "Mia", age: 26, role: "viewer", isActive: true },
  { username: "Lucas", age: 29, role: "admin", isActive: true },
  { username: "Amelia", age: 23, role: "editor", isActive: true },
];

function showAllUsers(event) {
  event.preventDefault();

  userCount.textContent = users.length;

  userList.innerHTML = "";

  users.forEach((eachuser) => {
    let li = document.createElement("li");
    li.textContent = `Name: ${eachuser.username}, Age: ${eachuser.age}, Role: ${eachuser.role}, Status: ${eachuser.isActive}`;
    userList.appendChild(li);
  });
}
showAll.addEventListener("click", showAllUsers);

function showActiveUsers(event) {
  event.preventDefault();

  let filterActiveUsers = users.filter((activeUser) => {
    return activeUser.isActive === true;
  });
  userCount.textContent = filterActiveUsers.length;

  userList.innerHTML = "";

  filterActiveUsers.forEach((eachuser) => {
    let li = document.createElement("li");
    li.textContent = `Name: ${eachuser.username}, Age: ${eachuser.age}, Role: ${eachuser.role}, Status: ${eachuser.isActive}`;
    userList.appendChild(li);
  });
}
showActive.addEventListener("click", showActiveUsers);

function showTheAdmins(event) {
  event.preventDefault();

  let filterActiveUsers = users.filter((activeUser) => {
    return activeUser.role === "admin";
  });
  userCount.textContent = filterActiveUsers.length;

  userList.innerHTML = "";

  filterActiveUsers.forEach((eachuser) => {
    let li = document.createElement("li");
    li.textContent = `Name: ${eachuser.username}, Age: ${eachuser.age}, Role: ${eachuser.role}, Status: ${eachuser.isActive}`;
    userList.appendChild(li);
  });
}
showAdmins.addEventListener("click", showTheAdmins);
