let enteringDays = document.getElementById("determinDays");
let outputDays = document.getElementById("days");
let outputHours = document.getElementById("hours");
let outputMins = document.getElementById("minutes");
let outputSecs = document.getElementById("secs");
let resp = document.getElementById("resp");

function countDown() {
  let inpDate = enteringDays.value;

  if (!inpDate) {
    outputDays.textContent = "No valid date";
    return;
  }

  let selectedDate = new Date(inpDate);
  let todaysDate = new Date();

  if (selectedDate < todaysDate) {
    return null
  }

  let differenceDates = selectedDate - todaysDate;

  let days = Math.floor(differenceDates / (1000 * 60 * 60 * 24));
  outputDays.textContent = days;

  let hours = Math.floor(
    (differenceDates % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  outputHours.textContent = hours;

  let minutes = Math.floor((differenceDates % (1000 * 60 * 60)) / (1000 * 60));
  outputMins.textContent = minutes;

  let seconds = Math.floor((differenceDates % (1000 * 60)) / 1000);
  outputSecs.textContent = seconds;
}

enteringDays.addEventListener("change", () => {
  countDown(), setInterval(countDown, 1000);
});
