let loadSuccess = document.getElementById("loadSuccess");
let loadError = document.getElementById("loadError");
let status = document.getElementById("status");
let dataList = document.getElementById("dataList");


function fetchData(shouldSucceed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve("Data loaded successfully");
      } else {
        reject("Something went wrong");
      }
    }, 3000);
  });
}

async function handleLoad(shouldSucceed) {
  status.textContent = "Loading...";
  dataList.textContent = "";

  try {
    const result = await fetchData(shouldSucceed);
    dataList.textContent = result;
  } catch (error) {
    dataList.textContent = error;
  }

  status.textContent = "Idle";
}


loadSuccess.addEventListener("click", () => {
  handleLoad(true);
});

loadError.addEventListener("click", () => {
  handleLoad(false);
});
