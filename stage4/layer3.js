let startProcess = document.getElementById("startProcess");
let status = document.getElementById("status");
let output = document.getElementById("output");

function userAuthenticated() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("User Authenctiated")
    }, 3000);
  });
}
function fetchUserProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User profile loaded");
    }, 2000);
  });
}

function fetchUserPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User posts loaded");
      // reject("Posts fetch failed");
    }, 2000);
  });
}

async function loadDashboard() {
  status.textContent = "Loading...";
  output.textContent = "";

  try {
    let auth = await userAuthenticated();
    output.innerHTML += `<p>${auth}</p>`;

    let profile = await fetchUserProfile();
    output.innerHTML += `<p>${profile}</p>`;

    let posts = await fetchUserPosts();
    output.innerHTML += `<p>${posts}</p>`;

  } catch (error) {
    output.textContent = error;
  }

  status.textContent = "Idle";
}

startProcess.addEventListener("click", loadDashboard);