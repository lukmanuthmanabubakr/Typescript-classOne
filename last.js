// Task 1

function todaysDate() {
  let date = new Date();

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let numDate = date.getDate();

  return `${year}-${month}-${numDate}`;
}
console.log(todaysDate());

// Task 2
function todaysTime() {
  let date = new Date();

  let hour = date.getHours();
  let mins = date.getMinutes();

  return mins < 10 ? `${hour}:0${mins}` : `${hour}:${mins}`;
}
console.log(todaysTime());

// Task 3
function checkPartDay() {
  let date = new Date();

  let hour = date.getHours();
  console.log(hour);

  if (hour < 11) {
    return "Morning";
  } else if (hour < 16) {
    return "Afternoon";
  } else if (hour < 20) {
    return "Evening";
  } else if (hour >= 21 && hour >= 4) {
    return "Night";
  }
}
console.log(checkPartDay());


// Task 4
function timeLeft () {
    let date = new Date
}