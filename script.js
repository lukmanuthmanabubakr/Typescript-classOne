// To show Notification we use
// alert("My name is dev Abu");

// instead of writing in  my html i can use this
document.write("My name is dev abu");
document.write("My name is Abubakr");
document.write("A developer that know noting");

console.log("I know i will get better ");

let x = 10;

if (x > 5) {
  let y = 20;
  console.log(y);
}

const street = "Ikeshi";

// Global scope

var xDev = "Hello dev Abu";

function example() {
  console.log(xDev);
}
example();
console.log(xDev);

//Function scope
function exampleTwo() {
  var fs = "Hello Dev dev Abu";

  console.log(fs);
}
exampleTwo();
// console.log(fs);

// block scope
function exampleThree() {
  if (true) {
    let bv = "Legend";
    console.log(bv);
  }
  //   console.log(bv);
}
exampleThree();

document.write("My name is Abubakr");
document.write(19);
document.write(
  "Backend / Full-Stack Developer with 3+ years experience building scalable web applications and blockchain-integrated platforms. I specialize in the MERN stack, Node.js, and MongoDB to design high-performance APIs, integrate smart contracts, and develop secure fintech and DeFi solutions for sectors like car rental, healthcare, and payment systems, focused on delivering reliable, user-centered backend systems."
);

// alert("Welcome, your app is loading...");

const age = 18;

if (age > 18) {
  document.write("You are an adult");
  console.log("You are an adult");
} else {
  document.write("You are still young");
  console.log("You are still young");
}

var day = "Monday";

function printDay() {
  let today = "wednesday";
  console.log(today, day);
}
printDay();
// console.log(today, day);

function bScope() {
  if (true) {
    let y = 87;
    console.log(y);
  }
  // console.log(y);
}
bScope();

function sayHello(myName) {
  console.log("My name" + " " + myName);
}
sayHello("Abubakr");

//Data types
let firstName = "Dev";
let lastName = "Abu";

let num = 96.9;
document.write(num);
console.log(num);

let xes = "60.91838";

console.log(typeof xes);

let gender = 60;
console.log(typeof gender);

let learning = true;
let completed = false;

console.log(typeof learning, typeof completed);

const b = 60 < 100;
console.log(typeof b);

let aged;

console.log(aged);
console.log(typeof aged);

let number = null;

console.log(number);
console.log(typeof number);

console.log(null == undefined);

let person = {};

function addDetails(name, age) {
  person.name = name;
  person.age = age;

  console.log(person);
  console.log(typeof person);
}
addDetails("david", 80);

let country = {};

function declareConntryStateandCapital(state, capital) {
  country.state = state;
  country.capital = capital;

  console.log(country);
}
declareConntryStateandCapital("Lagos", "Ikeja");

let numberss = [1, 2, 3, 4, 5];

console.log(numberss);
console.log(typeof numberss);

function msg() {
  console.log("Hello Dev Abu");
}
console.log(typeof msg);

//Test

let laptops = "MacBook Pro";
console.log(typeof laptops);

let laptopsPrice = 500;
console.log(typeof laptopsPrice);

let increaseLaptopPrice = true;
console.log(increaseLaptopPrice);

console.log(typeof increaseLaptopPrice);

let soldLaptops;
console.log(typeof soldLaptops);

let noSoldLaptops = null;
console.log(noSoldLaptops);

console.log(typeof noSoldLaptops);

let car = {};

function addCarDetails(model, year) {
  car.model = model;
  car.year = year;

  console.log(car);
  console.log(typeof car);
}
addCarDetails("Benz", 2025);

let arrayOfFour = [600, 900, 490, 500];

function allFourNumbs() {
  console.log(typeof arrayOfFour);
  arrayOfFour.push(600);
  console.log(arrayOfFour);
}

allFourNumbs();

function checkScore(score) {
  if (score > 50) {
    console.log("Pass");
    console.log(typeof "Pass");
  } else {
    console.log("Fail");
    console.log(typeof "Fail");
  }
}
checkScore(90);

function sayName(myNmae) {
  console.log("My name is" + " " + myNmae);
}
sayName("Dev abu");

let a;
let u = null;

console.log(a);
console.log(typeof a);
console.log(u);
console.log(typeof u);

console.log(a == b);
console.log(a === b);

let students = {};

function setStudentDetails(name, scoresArray) {
  students.name = name;
  students.scoresArray = scoresArray;
  console.log(students);
}
setStudentDetails("Dev Abu", 90);

let result = 20 < 15;
console.log(result);
console.log(typeof result);

let p;
console.log(p);
console.log(typeof p);

p = "Legend Dev";

console.log(p);
console.log(typeof p);

p = false;
console.log(p);
console.log(typeof p);

//Arithmetic Operators

//Addition

let sum = 5 + 3;
console.log(sum);

//Subtraction
let sub = 5 - 3;
console.log(sub);
//Multiply
let multiply = 5 - 3;
console.log(multiply);

// My task
function calculator(a, b, symbols) {
  let result;
  if (symbols === "+") {
    result = a + b;
  } else if (symbols === "-") {
    result = a - b;
  } else if (symbols === "**") {
    result = a ** b;
  } else if (symbols === "%") {
    result = a % b;
  } else {
    result = "Error number";
  }
  console.log(result);
}
calculator(5, 8, "%");

//Assignment operator
let h = 5;
h += 9;
h **= 2;
console.log(h);

// Task 1
// alert("Am i in the right page");
document.write("yes, Welcome to Dev abu's Page");
console.log("Let's start coding");

//Task 2
let myName = "Abubakr";
let myAge = 19;
let decNum = 50.89;
let eaten = true;

let drink;
let digest = null;

let state;
function seeAllState() {
  state = "You are a king";
  console.log(state);
  let stateCap = "Asaba";
}
//It fails becasue it was decaled inside the function, so thje variable can only be use in thsod eth funipn i mean the sytatecap varicable
// console.log(stateCap);
seeAllState();

let sentence = {};

function printObj(name, skill, country) {
  sentence.name = name;
  sentence.skill = skill;
  sentence.country = country;
  console.log(sentence);
}
printObj("Abubakr", "Full stack dev", "Nigeria");

const arrNum = [600, 700, 899, 700];

function addArrNum() {
  console.log(typeof arrNum);
  arrNum.push(600);
  console.log(arrNum);
}
addArrNum();

function checkScoree(student) {
  if (student > 50) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}
checkScoree(60);

let check;
let goodCheck = null;

if (check == goodCheck) {
  console.log(true);
} else if (check === goodCheck) {
  console.log(false);
}

function compSen(name, age) {
  console.log(`My name is ${name} and I am ${age} years old.`);
}
compSen("Dev Abu", 60);

function miniCalc(operators, a, b) {
  if (operators == "+") {
    console.log(a + b);
  } else if (operators == "-") {
    console.log(a - b);
  } else if (operators == "*") {
    console.log(a * b);
  } else if (operators == "/") {
    console.log(a / b);
  } else if (operators == "**") {
    console.log(a ** b);
  } else if (operators == "%") {
    console.log(a % b);
  }
}
miniCalc("+", 50, 70);

let sampA = 90;
console.log((sampA += 50));
let sampB = 90;
console.log((sampB -= 50));
let sampC = 90;
console.log((sampC /= 50));
let sampD = 90;
console.log((sampD **= 50));
let sampE = 90;
console.log((sampE %= 50));
let sampF = 90;
console.log((sampF *= 50));

function miniCalculatoor(operators, a, b) {
  if (operators == "+") {
    console.log(a + b);
  } else if (operators == "-") {
    console.log(a - b);
  } else if (operators == "*") {
    console.log(a * b);
  } else if (operators == "/") {
    console.log(a / b);
  } else if (operators == "**") {
    console.log(a ** b);
  } else if (operators == "%") {
    console.log(a % b);
  } else {
    console.log("Invalid operator");
  }
}
miniCalculatoor("+", 50, 70);

let numbers;

function checkEodd(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else if (num % 2 !== 0) {
    console.log("even");
  }
}
checkEodd(5);

let studentDet = {};

function addDScore(name, level, scoreArr) {
  studentDet.name = name;
  studentDet.level = level;
  studentDet.scoreArr += scoreArr;
  studentDet.scoreArr += scoreArr;
  console.log(studentDet);
}
addDScore("David", 500, 10);

//increment and decremnt operator
let g = 10;
// console.log(++g);
console.log(g++);
console.log(g);
console.log(--g);

//Comparison operaors

let l = "10";
let m = 20;

console.log(l < m);
console.log(l > m);
console.log(l <= m);
console.log(l >= m);

console.log(l == m);
console.log(l != m);

console.log(l == m);
console.log(l === m);
console.log(l !== m);

// Logical Operators

// let x = 5;
// let y = 10;

// console.log(x > 0 && y > 0);
// console.log(x > 0 && y < 0);
// console.log(x < 0 && y > 0);
// console.log(x < 0 && y < 0);

let Yes = true;
let No = false;

console.log(!Yes);
console.log(!No);

let z = "Javascript";

z += " tutorial";

console.log(z);

//Left to right Assoicativity

let reSult = 4 - 2 - 1;
console.log(reSult);

let exResult = 2 ** (3 ** 2);
console.log(exResult);

//Conditional statement
if (true) {
  console.log("exucute");
}

let countrys = "Nigeraia";

let aGe = 20;
if (aGe >= 18 && countrys == "Nigeraia") {
  console.log("I am a citizen");
} else {
  console.error("You are not a citizen");
}

// Conditiona statement
//If else

let ages = 19;
if (ages >= 18) {
  console.log("You are an adult");
} else if (age >= 16) {
  console.log("You are a teenager");
} else {
  console.log("You be minor");
}

//Switch
let value = "57";

switch (typeof value) {
  case "number":
    console.log("Number value");
    break;
  case "string":
    console.log("string");
    break;
  case "boolean":
    console.log("boolean");
    break;
  default:
    console.log("Other");

    break;
}

let dayName = 2;

switch (dayName) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;

  default:
    dayName = "No days";
    break;
}
console.log(dayName);

//tenary operators

let agee = 20;

let msgg = agee >= 18 ? "You are an adult" : "You are a minor";

console.log(msgg);

//break / continue
for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}
for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

let i = 0;

// While loop
while (i <= 10) {
  // while only exscute when the conditon is true. it wont ig its force

  console.log(i);
  i++;
}

// do while loop
let t = 1;
do {
  // code that want to be repeated
  //If the conditon is true it will continue the code, but if false stop the loop
  console.log(t);
  t += 9;
} while (t <= 27);

//Breake / continue
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    // break;
    continue;
  }
  console.log(i);
}

// Function

function greet() {
  console.log("Hello, Dev Abu");
}
greet();

function add(a, b, operaors) {
  if (operaors == "+") {
    return a + b;
  }
}
let results = add(5, 7, "+");
console.log(results);

function fn1(x) {
  function fn2(y) {
    return x * y;
  }
  return fn2;
}
let sss = fn1(9);
console.log(sss);
console.log(sss(6));

// Call backs function
function display(result) {
  console.log(result);
}

function added(num1, num2, myCallBack) {
  let sum = num1 + num2;
  myCallBack(sum);
}

added(30, 4, display);
