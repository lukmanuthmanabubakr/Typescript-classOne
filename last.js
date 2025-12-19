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
  } else if (hour >= 21) {
    return "Night";
  } else if (hour >= 4) {
    return "Night";
  }
}
console.log(checkPartDay());

// Task 4
function timeLeft() {
  let date = new Date();

  let hour = date.getHours();
  let mins = date.getMinutes();

  let minsLeft = 60 - mins;
  let hoursLeft = 23 - hour;

  return `${hoursLeft} and  ${minsLeft}`;
}
console.log(timeLeft());

// Task 5
function tmDate() {
  let date = new Date();
  let tDate = date.getDate();

  date.setDate(tDate + 1);

  let tYear = date.getFullYear();
  let tMonth = date.getMonth() + 1;
  let myDate = date.getDate();
  return `Tomorrow is : ${tYear}-${tMonth}-${myDate}`;
}
console.log(tmDate());

// Task 6
function daysLeft() {
  let date = new Date();
  let days = date.getDate();
  let daysMonth = new Date(year, month + 1, 0).getDate();

  let minDaysLeft = daysMonth - days;
  return `Days left in this month: ${minDaysLeft}`;
}
console.log(daysLeft());
