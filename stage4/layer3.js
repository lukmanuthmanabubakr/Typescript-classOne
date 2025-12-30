let startProcess = document.getElementById("startProcess");
let status = document.getElementById("status");
let output = document.getElementById("output");

function userAuthenticated(name, email) {
  return new Promise((resolve, reject) => {
    if (!name || !email) {
      resolve("There's an error fetching user data");
    } else {
      reject("Fetch user data");
    }
  });
}
function userProfile(name, email) {
    return new Promise((resolve, reject) => {
    if (!userAuthenticated(name, email)) {
      resolve("There's an error fetching user profile");
    } else {
      reject("Fetch user Profile");
    }
  });
}
function userPost() {
    return new Promise((resolve, reject) => {
    if (!userProfile) {
      resolve("There's an error fetching user post");
    } else {
      reject("Fetch user Post");
    }
  });
}
