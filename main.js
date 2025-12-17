// function toknowDate(myYear) {
//   let date = new Date();

//   let getYear = date.getFullYear();

//   let age = getYear - myYear;
//   return age;
// }

// console.log(toknowDate(2006));


// Task 1
function whatsTime() {
  let date = new Date();

  let mHour = date.getHours();
  let mMin = date.getMinutes();
  let mSecs = date.getSeconds();

  return `The time is ${mHour}:${mMin}:${mSecs}`;
}
console.log(whatsTime());
