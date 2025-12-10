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
