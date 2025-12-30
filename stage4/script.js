let status = document.getElementById("status");
let dataList = document.getElementById("dataList");
let loadSuccess = document.getElementById("loadSuccess");
let loadError = document.getElementById("loadError");

function fetchData(callback) {
  status.textContent = "Loading";

  setTimeout(() => {
    callback();
    status.textContent = "Idle";
  }, 3000);
}
function dataSuccessfull () {
    dataList.textContent = "Data Loaded Successfully"
}
function dataUnSuccessfull () {
    dataList.textContent = "Something went wrong"
}

loadSuccess.addEventListener("click", ()=> {
    fetchData(dataSuccessfull)
})
loadError.addEventListener("click", ()=> {
    fetchData(dataUnSuccessfull)
})