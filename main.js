// Design a function that returns:
// "You are X years old"
// "You will turn X in Y days"

function toknowDate(myYear, myMonth, myDate) {
  let today = new Date();

  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth();
  let currentDate = today.getDate();

  // X → current age
  let age = currentYear - myYear;

  // Step 1: decide the year of the next birthday
  let nextBirthYear;

  if (
    currentMonth > myMonth ||
    (currentMonth === myMonth && currentDate > myDate)
  ) {
    // birthday already passed this year
    nextBirthYear = currentYear + 1;
  } else {
    // birthday is today or still coming
    nextBirthYear = currentYear;
  }

  // Step 2: build the next birthday date
  let nextBirthday = new Date(nextBirthYear, myMonth, myDate);

  // Step 3: calculate days (milliseconds → days)
  let diffInMs = nextBirthday - today;
  let daysLeft = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

  // Step 4: return the final message
  if (daysLeft === 0) {
    return `You are ${age} years old. Happy Birthday 🎉`;
  }

  return `You are ${age} years old. You will turn ${
    age + 1
  } in ${daysLeft} days`;
}

console.log(toknowDate(2006, 11, 17));

// Main Task 1

function daysLeft() {
  let date = new Date();
  let futureDate = new Date("2025-11-31");

  let currentDays = date.getDate();

  let myDaysLeft = currentDays - futureDate;
  console.log(myDaysLeft);
}
daysLeft()

// Task 1
function whatsTime() {
  let date = new Date();

  let mHour = date.getHours();
  let mMin = date.getMinutes();
  let mSecs = date.getSeconds();

  return `The time is ${mHour}:${mMin}:${mSecs}`;
}
console.log(whatsTime());

// Task 2
function checkCurZone() {
  let now = new Date();
  let getHour = now.getHours();

  if (getHour < 12) {
    return "Good Morning";
  } else if (getHour >= 12 && getHour < 18) {
    return "Good afternoon";
  } else if (getHour >= 18) {
    return "Good evening";
  } else {
    return "No time";
  }
}

console.log(checkCurZone());

// Task 3
function getTodaysDet() {
  let now = new Date();

  let year = now.getFullYear();
  let month = now.getMonth();
  let date = now.getDate();
  let hour = now.getHours();
  let mins = now.getMinutes();

  let sentence = `Today is ${date}/${month}/${year} and the time is ${hour}:${mins}`;
  return sentence;
}

console.log(getTodaysDet());
