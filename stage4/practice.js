console.log("Start");

setTimeout(() => {
  console.log("Inside the timout");
}, 3000);

console.log("end");

function doThisLater(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}
function showThis() {
  console.log("I am active");
}
doThisLater(showThis);

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Show now");
  }, 1000);
});

promise.then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });


function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 2000);
  });
}

async function start() {
  console.log("Loading...");
  let result = await fetchData();
  console.log(result);
  console.log("Done");
}

start();

