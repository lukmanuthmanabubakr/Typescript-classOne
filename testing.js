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

let b = 5 + "5";
console.log(typeof b);

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

