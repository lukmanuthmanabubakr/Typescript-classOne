let menu = [
  { name: "Pizza", price: 40 },
  { name: "Rice", price: 60 },
  { name: "Gorrila", price: 20 },
  { name: "jam", price: 55 },
  { name: "beans", price: 90 },
];

let cashInRegister = 100;
let orderQueue = [];
let nextOrderId = 0;

// Add a utility function "addNewPizza" that takes a pizza object adn adds to it menu

function addNewPizza(name, price) {
  let existPizza = menu.some((item) => item.name === name);
  if (existPizza) {
    return console.log("Pizza already exist");
  } else {
    menu.push({ name, price });
  }
  //   console.log(menu);
}
addNewPizza("Sanine", 80);

function placeOrder(name) {
  let findItems = menu.find((items) => items.name === name);
  if (findItems) {
    cashInRegister = cashInRegister += findItems.price;
    orderQueue.push({
      pizza: findItems,
      status: "Ordered",
      nextOrderId: (nextOrderId += 1),
    });
  } else {
    console.log("not seen");
  }
  return orderQueue;
}
console.log(placeOrder("jam"));
console.log(placeOrder("Gorrila"));
console.log(placeOrder("Rice"));
console.log(cashInRegister);

// Challenge: Write another utility, completeOrder, that takes an orderID as a parameter
// Find the correct order in the Orderqueue, and makrs its status as "completed" for good mesure.
// return the found order from the function
// Note: you'll need to ensure that we're adding IDs to your orders when we create and orders. you can sue a blobal "nextOrderId" variable and increment it every time a new order is created to stimulate nectIDS being manages for us by a database

function completeOrder(orderId) {
  let lookOrder = orderQueue.find((eachItem) => {
    return eachItem.nextOrderId === orderId;
  });
  if (lookOrder) {
    lookOrder.status = "completed";
    return lookOrder;
  }else {
    return "Order not found"
  }
  
}
console.log(completeOrder(5));
