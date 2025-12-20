function tellsNoon() {
  let date = new Date();

  let hour = date.getHours();

  if (hour >= 0 && hour < 5) {
    return "Midnight";
  } else if (hour >= 5 && hour < 12) {
    return "Morning";
  } else if (hour >= 12 && hour < 18) {
    return "Afternoon";
  } else if (hour >= 18) {
    return "Good evening";
  } else return "Night";
}
console.log(tellsNoon());

function showTodaysDate() {
  let date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return `${day}-${month}-${year}`;
}
console.log(showTodaysDate());

function toShowEndDay() {
  let date = new Date();

  let weekend = date.getDay() + 1;

  if (weekend >= 6 && weekend <= 7) {
    return "We are on weekend";
  } else if (weekend >= 1 && weekend <= 5) {
    return "We are on week day";
  } else {
    return null;
  }
}
console.log(toShowEndDay());

function calcAge(year, month, date) {
  let todaysDate = new Date();

  let currentYear = todaysDate.getFullYear();
  let currentMonth = todaysDate.getMonth() + 1;
  let currentDate = todaysDate.getDate();

  let getAge;

  if (year > currentYear) {
    return (getAge = "Not possible");
  }
}
console.log(calcAge(2005,));

function daysleftTillNextBday(year, month, day) {
  let todaysDate = new Date();

  let currYear = todaysDate.getFullYear();
  let currMonth = todaysDate.getMonth() + 1;
  let currDay = todaysDate.getDate();

  if (year > currYear) {
    return "you can't be born";
  } else if (year < currYear) {
    return currYear - year;
  } else if (month < currMonth) {
    return "Birthday has been done";
  } else if (month == currMonth && day < currDay) {
    return "Birthday has been done this month";
  } else if (month == currMonth && day == currDay) {
    return "Today's your birthday";
  } else if (month == currMonth && day > currDay) {
    return `your birthday will be in next ${day - currDay} days`;
  }
}
console.log(daysleftTillNextBday(2021, 12, 19));
