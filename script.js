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
addCarDetails(2025, "Benz");

let arrayOfFour = [600, 900, 490, 500];

function allFourNumbs(addNum) {
  console.log(arrayOfFour);
  console.log(typeof arrayOfFour);
  arrayOfFour.addNum = +console.log(arrayOfFour);
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
