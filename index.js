const menu = [
  { name: "Dominus Pizza", price: 500 },
  { name: "Legend Pizza", price: 800 },
  { name: "Safari Pizza", price: 200 },
  { name: "DLT Pizza", price: 100 },
];

const cashInRegister = 100;
const orderQueue = [];

// Add a utility function "addNewPizza" thats take pizza object
// And add it to the menu

const addNewPizza = (getItem) => {
  menu.push(getItem);
};

// Write another utility function placeOrder, that takes the pizza name parameter and:
// 1 find thats pizza object in the menu
// 2. Add the income to the cashInRegister
// 3. Pushes a new "Order object" to the orderQueue
// e.g (pizza: selectedPizzaObjectfromstep1, status: "ordered")
// return the new order object

const placeOrder = (pizzaItem) => {
  const findPizza = menu.find((getItem) => getItem.name === pizzaItem);
  cashInRegister += findPizza.price;
  const newOrder = { pizza: findPizza, status: "ordered" };
  orderQueue.push(newOrder);
  return newOrder;
};

const completeOrder = (orderId) => {
  const findOrder = orderQueue.find((addNewPizza) => getItem.status);
};

//Task 1
let age = 5;
const name = "Abubakr";

// Task 2
const phone = {
  brand: "Iphone",
  model: "ios26",
  price: 500,
};
const fruit = ["Orange", "Apple", "Banana"];

// Task 4
const doubleNumber = (addnumber) => {
  const result = addnumber * 2;
  return result;
};

// Taks 5
const checkNumber = (number) => {
  if (number > 10) {
    return "Big Number";
  } else {
    return "Small Number";
  }
};

//Task 6
const addingNumber = (a, b, c) => {
  const result = a + b + c;
  return result;
};

//Task 7
const checkPos = (checkers) => {
  if (checkers === 0) {
    return "Zero";
  } else if (checkers < 0) {
    return "Negative Numbers";
  } else {
    return "Positive Number";
  }
};

// Taks 8
const colors = ["red", "blue", "green", "yellow", "black"];

const pickColor = (colors) => {
    return colors[4]
}

// Task 9
const vowelCounting = (countVowels) => {
    const vowels = "aeiou"
    let count = 0
    if(vowels.includes(countVowels)){
        count ++
    }
}

//Task 10 
const acceptArray = (capture) => {
    capture.forEach(element => {
        
    });
}

// const items = ["Yam", "Benas", "Rice"];

// const pickItem = (items index =0 )

// // Task 9
// const countLetters = (enternumer) => {

// }
