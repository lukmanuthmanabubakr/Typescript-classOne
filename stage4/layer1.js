let loadData = document.getElementById("loadData");
let loadWithError = document.getElementById("loadWithError");
let status = document.getElementById("status");
let dataList = document.getElementById("dataList");

function toLoadData() {
  status.textContent = "loading....";

  setTimeout(() => {
    dataList.textContent = "Data Loaded";
    status.textContent = "Idle";
  }, 3000);
}
loadData.addEventListener("click", toLoadData);
function toErrorData() {
  status.textContent = "loading....";

  setTimeout(() => {
    dataList.textContent = "code error";
    status.textContent = "Idle";
  }, 3000);
}
loadWithError.addEventListener("click", toErrorData);
