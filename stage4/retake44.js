let loginSuccess = document.getElementById("loginSuccess");
let loginFail = document.getElementById("loginFail");
let status = document.getElementById("status");
let output = document.getElementById("output");

function checkCredentials(checkers) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (checkers) {
        resolve("Show all user data");
      } else {
        reject("User load data error");
      }
    }, 3000);
  });
}
async function showResponse(checkers) {
  status.textContent = "Loading...";
  output.textContent = "";

  try {
    let result = await checkCredentials(checkers);
    output.textContent = result;
  } catch (error) {
    output.textContent = error;
  }
  status.textContent = "Idle";
}
loginSuccess.addEventListener("click", () => {
    showResponse(true)
})
loginFail.addEventListener("click", () => {
    showResponse(false)
})