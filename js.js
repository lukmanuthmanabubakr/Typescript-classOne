function greet(name) {
  console.log("Hello " + name);
}
greet("Dev");

function makeAdder(x) {
  function result(y) {
    return x + y;
  }
  return result;
}
let ans = makeAdder(6);
console.log(ans);
// console.log(ans(8));

function multiplierFactory(n) {
  function machine(r) {
    return n * r;
  }

  return machine;
}
let res = multiplierFactory(7);
console.log(res(7));

function results(displayResult) {
  console.log(displayResult);
}

function calculate(samp1, samp2, callback) {
  let sample = samp1 + samp2;
  callback(sample);
}
calculate(50, 60, results);

// function counterFactory () {
//     for (let i = 0; i++) {
//         function count (i) {

//         }
//     }
// }

function greet(name) {
  console.log("Hello " + name);
}
greet("Dev");

let studentDet = {
  name: "",
  score: [],
};

function addScore (name, score ) {
    studentDet.name = name
    studentDet.score.push(score)
}
console.log(studentDet);

addScore("Wale", 90)
addScore("Wale", 60)
addScore("Wale", 30)

function averageScore (averageScore) {
    if (averageScore.length === 0){
        return 0
    }
}


// New task
function userDet (name, dob) {

}

