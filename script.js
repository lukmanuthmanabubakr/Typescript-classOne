// To show Notification we use
alert("My name is dev Abu");

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

alert("Welcome, your app is loading...");

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
