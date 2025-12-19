function todaysDate() {
  let date = new Date();

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let numDate = date.getDate();

  return `${year}-${month}-${numDate}`;
}

console.log(todaysDate());
