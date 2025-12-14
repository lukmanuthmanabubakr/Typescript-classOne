//Task group 1
function adding(a, b, sign) {
  let result;
  if (sign == "+") {
    result = a + b;
  }
}
adding(3, 6, "+");

function checkAge(age) {
  let result = age > 18 ? "Adult" : "Minor";
  console.log(result);
}
checkAge(5);

function calculator(a, b, operaors) {
  let response;
  if (operaors == "+") {
    response = a + b;
  } else if (operaors == "-") {
    response = a - b;
  } else if (operaors == "*") {
    response = a * b;
  } else if (operaors == "/") {
    response = a / b;
  } else if (operaors == "%") {
    response = a % b;
  } else if (operaors == "**") {
    response = a ** b;
  } else {
    console.log("Invalid response");
  }

  console.log(response);
}
calculator(5, 6, "-");

// Task group 2
// let student = {};
// function addDetails(name, score) {
//   student.name = name;
//   student.score = score;

//   let aveScore = score / 2;
//   console.log(aveScore);
// }

// addDetails("dele", 50);

let numArr = [1, 2, 3, 4, 5, 6, 7, 8];

function addNumber(numbers) {
  numArr.push(numbers);
  let evenNum = numArr % 2 === 0;
  console.log(evenNum);
}
addNumber(60);

for (let i = 0; i <= 20; i++) {
  console.log(i);
}

for (let i = 0; i <= 20; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

// Tak 4
let x = 5;

function test() {
  let x = 10;
  return x;
}

console.log(test());
console.log(x);

// x = 10

// Task Group 2: Objects and Arrays

// Create a student object with:

// name

// scores (array)

// Write a function that:

// Adds a score to the student

// Does not overwrite previous scores

// Write a function that:

// Calculates average score

// Fix task 2
let student = {
  name: "",
  scores: [],
};

function addScore(studentName, studentScore) {
  student.name = studentName;
  student.scores.push(studentScore);
}
console.log(student);

addScore("Dele", 40);
addScore("Dele", 40);

function studentAverage(studentName) {
  student.name = studentName;
  let averageScore = addScore().studentScore / 2;
  console.log(averageScore);
}
student("dele");
