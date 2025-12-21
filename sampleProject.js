let greetings = document.getElementById("greetings");
let date = document.getElementById("date");
let mtTime = document.getElementById("time");

function checkGreetings() {
  let todaysDate = new Date();

  let currentHours = todaysDate.getHours();

  if (currentHours >= 0 && currentHours < 5) {
    return "We are at midnight";
  } else if (currentHours >= 5 && currentHours < 12) {
    return "Good morning";
  } else if (currentHours >= 12 && currentHours < 18) {
    return "Good Afternoon";
  } else if (currentHours >= 18 && currentHours < 20) {
    return "Good Evening";
  } else if (currentHours >= 20 && currentHours < 24) {
    return "Good Night";
  }
}
greetings.textContent = checkGreetings();

function checkDate() {
  let todaysDate = new Date();

  let currentYear = todaysDate.getFullYear();
  let currentMonth = todaysDate.getMonth() + 1;
  let currentDate = todaysDate.getDate();

  let date = `${currentDate} - ${currentMonth} - ${currentYear} `;
  return date;
}

date.textContent = checkDate();

function checkTime() {
  let todaysDate = new Date();

  let currentHour = todaysDate.getHours();
  let currentMins = todaysDate.getMinutes();
  let currentSec = todaysDate.getSeconds();

  mtTime.textContent = `${currentHour}:${currentMins}:${currentSec}`;
}

setInterval(checkTime, 1000);
