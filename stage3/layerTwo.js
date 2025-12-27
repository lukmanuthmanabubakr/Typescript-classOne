let showAll = document.getElementById("showAll");
let showActive = document.getElementById("showActive");
let showAdmins = document.getElementById("showAdmins");
let userCount = document.getElementById("userCount");
let userList = document.getElementById("userList");

let users = [
  {
    username: "Liam",
    age: 28,
    role: "admin",
    isActive: true,
    address: { city: "New York", country: "USA" },
    preferences: { theme: "dark", notifications: true },
  },
  {
    username: "Emma",
    age: 22,
    role: "editor",
    isActive: false,
    address: { city: "London", country: "UK" },
    preferences: { theme: "light", notifications: false },
  },
  {
    username: "Noah",
    age: 31,
    role: "viewer",
    isActive: true,
    address: { city: "Toronto", country: "Canada" },
    preferences: { theme: "dark", notifications: true },
  },
  {
    username: "Olivia",
    age: 25,
    role: "editor",
    isActive: true,
    address: { city: "Sydney", country: "Australia" },
    preferences: { theme: "light", notifications: true },
  },
  {
    username: "Elijah",
    age: 35,
    role: "admin",
    isActive: false,
    address: { city: "Berlin", country: "Germany" },
    preferences: { theme: "dark", notifications: false },
  },
  {
    username: "Sophia",
    age: 19,
    role: "viewer",
    isActive: true,
    address: { city: "Lagos", country: "Nigeria" },
    preferences: { theme: "light", notifications: true },
  },
  {
    username: "James",
    age: 27,
    role: "editor",
    isActive: false,
    address: { city: "Dublin", country: "Ireland" },
    preferences: { theme: "dark", notifications: false },
  },
  {
    username: "Ava",
    age: 24,
    role: "viewer",
    isActive: true,
    address: { city: "Paris", country: "France" },
    preferences: { theme: "light", notifications: true },
  },
  {
    username: "William",
    age: 40,
    role: "admin",
    isActive: true,
    address: { city: "San Francisco", country: "USA" },
    preferences: { theme: "dark", notifications: true },
  },
  {
    username: "Isabella",
    age: 29,
    role: "editor",
    isActive: false,
    address: { city: "Madrid", country: "Spain" },
    preferences: { theme: "light", notifications: false },
  },
];

function showAllUsers(event) {
  event.preventDefault();

  userCount.textContent = users.length;

  userList.innerHTML = "";
  users.forEach((user) => {
    let li = document.createElement("li");
    li.textContent = `Name: ${user.username}, Age: ${user.age}, Role: ${user.role}, Status: ${user.isActive}, Address: ${user.address.city}-${user.address.country},Preferences: ${user.preferences.theme}`;
    userList.appendChild(li);
  });
}
showAll.addEventListener("click", showAllUsers);
