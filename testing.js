let varA = 6;

varA++;
console.log(varA);

varA--;
console.log(varA);

let x = 9;
let y = "89";

console.log(x < y); //true
console.log(x > y); //false
console.log(x <= y); // true
console.log(x >= y); //false
console.log(x == y); //false
console.log(x != y); //true
console.log(x === y); //false
console.log(x !== y); // true

function operaorsSet(a, b) {
  console.log(a > 0 && b > 0); //true
  console.log(a < 0 && b > 0); // false
  console.log(a > 0 && b < 0); //false
  console.log(a > 0 || b > 0); //true
  console.log(a < 0 || b > 0); // true
  console.log(a > 0 || b < 0); //true
  console.log(!(a > b)); // true
  console.log(!(a < b)); // false
}
operaorsSet(5, 9);

let eat = true;
let notEat = false;

console.log(!eat);
console.log(!notEat);

function addName(name) {
  name += " Ade";
  console.log(name);
}
addName("Fatima");

let z = 5 - 6 - 9;
console.log(z);
console.log(typeof z);

let u = 5 ** (6 ** 9);
console.log(u);
console.log(typeof u);

let p = 10;
function App() {
  p = p + 5;
  console.log(p);
}
// App();
