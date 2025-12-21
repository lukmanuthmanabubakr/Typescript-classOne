let bDays = document.getElementById("days");
let bHours = document.getElementById("hours");
let bMins = document.getElementById("minutes");
let bSecs = document.getElementById("seconds");

let birthDay = document.getElementById("birthdayDay");
let birthMonth = document.getElementById("birthdayMonth");

function bDate() {
  let inputDay = Number(birthDay.value);
  let inputMonth = Number(birthMonth.value);

  if (!inputDay && !inputMonth) {
    bDays.textContent = "Invalid";
    bHours.textContent = "Invalid";
    bMins.textContent = "Invalid";
    bSecs.textContent = "Invalid";
  }

  let bDates = new Date();

  let theBirthMonth = bDates.getMonth(inputMonth);
  let theBirthDate = bDates.getMonth(inputDay);

  let todaysDate = new Date();

  let todaysMonth = todaysDate.getMonth();
  let todaysDay = todaysDate.getDate();
}
