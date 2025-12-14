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