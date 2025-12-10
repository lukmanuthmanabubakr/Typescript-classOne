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
