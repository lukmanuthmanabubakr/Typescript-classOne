let score = 12;

score++;
score--;
score--;

console.log(score);
// the final value is 11, because when i did increment oit was 13, but decrement twice will make it decuct 1 twice. thats why its 13

// task 7

function updateBalance(amount) {
  let wallet = 90;
  wallet += amount;
  console.log(wallet);
}
updateBalance(60);

let z = 5 + "5";
console.log(typeof z);

// Task 6
let mode = "auto";
switch (mode) {
  case "auto":
    mode = "keep driving";
    break;
  case "manual":
    mode = "drive slowly";
    break;
  case "sleep":
    mode = "stop driving";
    break;
  default:
    mode = "Can't move";
    break;
}
console.log(mode);

function checkTemp(temp) {
  if (temp >= 30) {
    console.log("Hot");
  } else if (temp >= 20) {
    console.log("warm");
  } else if (temp < 20) {
    console.log("cold");
  }
}
checkTemp(29);

let u = 5;
let v = -3;

console.log(u > 0 && v > 0); //false
console.log(u > 0 || v > 0); //true
console.log(!(u < v)); // true

let a = 4;
let b = "15";

console.log(a < b); //true
console.log(a >= b); //false
console.log(a == b); //false
console.log(a !== b); //true

function userScore(youCheck) {
  let res = youCheck >= 50 ? "Pass" : "Fail";
  console.log(res);
}
userScore(5);

function checkEven(number) {
  let res = number % 2 == 0 ? "Even" : "Odd";
  console.log(res);
}
checkEven(2);

function userLoggedIn(user) {
  let res = user ? "Welcome back" : "Please log in";
  console.log(res);
}
userLoggedIn("");

function checkTemp(temp) {
  let res = temp >= 30 ? "Hot" : "Not hot";
  console.log(res);
}
checkTemp(16);

let i = 0;

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let nums = 0; nums <= 20; nums++) {
  if (nums % 2 === 0) {
    console.log(nums);
  }
}

function keepSubtract(num) {
  while ((num -= 5)) {
    console.log(num);
  }
}
keepSubtract(50);

let groupOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let index = 0; index <= groupOfNum.length; index++) {
  let result = groupOfNum[index] * 2;
  console.log(result);
}

// Task 1
let myName = "Dev Abu";
console.log(typeof myName); // string

let myAge = 40;
console.log(typeof myAge); //number

let isMarried = false;
console.log(typeof isMarried); //boolean

let eat = null;
console.log(typeof eat); //object

let drink;
console.log(typeof drink); //undefined

// Task 2
function userName(name) {
  let myNames = name;
  console.log("My Name is " + myNames);
}
//console.log(myNames); it fails because myNames is not declared in the global state
userName("ade");

//Task 3
let userDet = {};
function detUser(name, age, country) {
  userDet.name = name;
  userDet.age = age;
  userDet.country = country;

  console.log(userDet);
}
detUser("Bola", 50, "London");

//Task 4
function pushNewNum(num) {
  const arr5num = [500, 300, 600, 200, 800];
  arr5num.push(num);
  console.log(arr5num);
}
pushNewNum(700);

//Task 5
function lilCalc(firstNum, lastNum, operators) {
  let result;

  // if (operators === "+") {
  //   result = firstNum + lastNum;
  // } else if (operators === "-") {
  //   result = firstNum - lastNum;
  // } else if (operators === "*") {
  //   result = firstNum * lastNum;
  // } else if (operators === "/") {
  //   result = firstNum / lastNum;
  // } else if (operators === "**") {
  //   result = firstNum ** lastNum;
  // } else if (operators === "+=") {
  //   result = firstNum += lastNum;
  // } else if (operators === "-=") {
  //   result = firstNum -= lastNum;
  // } else if (operators === "*=") {
  //   result = firstNum *= lastNum;
  // } else if (operators === "/=") {
  //   result = firstNum /= lastNum;
  // } else if (operators === "**=") {
  //   result = firstNum **= lastNum;
  // }
  switch (operators) {
    case "+":
      result = firstNum + lastNum;
      break;
    case "-":
      result = firstNum - lastNum;
      break;
    case "*":
      result = firstNum * lastNum;
      break;
    case "/":
      result = firstNum / lastNum;
      break;
    case "%":
      result = firstNum % lastNum;
      break;
    case "**":
      result = firstNum ** lastNum;
      break;
    case "+=":
      result = firstNum += lastNum;
      break;
    case "-=":
      result = firstNum -= lastNum;
      break;
    case "*=":
      result = firstNum *= lastNum;
      break;
    case "/=":
      result = firstNum /= lastNum;
      break;
    case "%=":
      result = firstNum %= lastNum;
      break;
    case "**=":
      result = firstNum **= lastNum;
      break;
    default:
      console.log("Not ALLOWED");
      break;
  }
  console.log(result);
}
lilCalc(40, 60, "+");

//Task 6
function compVar(main, sub, operaors) {
  let result;
  if (operaors == "==") {
    result = main == sub; //true
  } else if (operaors == "===") {
    result = main === sub; // false
  } else if (operaors == "!=") {
    result = main != sub; // false
  } else if (operaors == "!==") {
    result = main !== sub; //true
  } else if (operaors == "<") {
    result = main < sub; //false
  } else if (operaors == ">") {
    result = main > sub; // false
  }
  console.log(result);
}
compVar(10, "10", ">");

//Task 7
function checkScore(score, passScore) {
  if (score >= passScore) {
    console.log("Pass");
  } else if (score > 45) {
    console.log("almost there");
  } else {
    console.log("Fail");
  }
}
checkScore(49, 50);

//Task 8
function months(month) {
  let res;
  switch (month) {
    case 1:
      res = "January";
      break;
    case 2:
      res = "Febuary";
      break;
    case 3:
      res = "March";
      break;
    case 4:
      res = "April";
      break;
    case 5:
      res = "May";
      break;
    case 6:
      res = "June";
      break;
    case 7:
      res = "July";
      break;
    case 8:
      res = "August";
      break;
    case 9:
      res = "September";
      break;
    case 19:
      res = "October";
      break;
    case 11:
      res = "November";
      break;
    case 12:
      res = "December";
      break;
    default:
      console.log("No month");

      break;
  }
  console.log(res);
}
months(7);

//task 9
function checkAdult(age) {
  let adultAge = age >= 18 ? "Adult" : "Minor";
  console.log(adultAge);
}
checkAdult(17);

//Task 10
for (let index = 1; index <= 20; index++) {
  // console.log(index);
  if (index % 2 === 0) {
    console.log(index);
  }
}

//Task 13
function checkSomeNum(number) {
  let even = number % 2 === 0;
  let greaterThanTen = number > 10;
  let odd = !even;
  let lessThanFive = number < 5;

  if (even && greaterThanTen) {
    console.log("valid even");
  } else if (odd || lessThanFive) {
    console.log("Not valid");
  } else {
    console.log("Try again");
  }
}
checkSomeNum(1);

//Task 14
function semiCalc(firstNum, lastNum, operators) {
  let result;
  if (operators == "+") {
    result = firstNum + lastNum;
  } else if (operators == "-") {
    result = firstNum - lastNum;
  } else if (operators == "*") {
    result = firstNum * lastNum;
  } else if (operators == "/") {
    result = firstNum / lastNum;
  } else if (operators == "%") {
    result = firstNum % lastNum;
  } else if (operators == "**") {
    result = firstNum ** lastNum;
  } else {
    console.log("Error");
  }
  console.log(result);
}
semiCalc(50, 80, "*");

//Task 15
let arrNum = []; //object
console.log(typeof arrNum); // oBject
let objSet = {};
console.log(typeof objSet); // oBject
let numd = null;
console.log(typeof numd); // oBject
let isSleep = true
console.log(typeof isSleep); //Boolean
let amount = "500"
console.log(typeof amount); //string


