type menuList = {
    name: string,
    price: number,
}
type orderTpe = {
  nextOrderIds: number,
  pizza: menuList,
  status: string
}

let allMenu:menuList[] = [
  { name: "Pizza", price: 40 },
  { name: "Rice", price: 60 },
  { name: "Gorrila", price: 20 },
  { name: "jam", price: 55 },
  { name: "beans", price: 90 },
];

let cashInRegisters = 100;
let orderQueue:orderTpe[] = [];
let nextOrderIds = 0;

// Add a utility function "addNewPizza" that takes a pizza object adn adds to it menu


function addNewPizza(name: string, price: number) {
  let existPizza = allMenu.some((item) => item.name === name);
  if (existPizza) {
    return console.log("Pizza already exist");
  } else {
    allMenu.push({ name, price });
  }
  //   console.log(allMenu);
}
addNewPizza("Sanine", 80);

function placeOrders(name: string) {
  let findItems = allMenu.find((items) => items.name === name);
  if (findItems) {
    cashInRegisters = cashInRegisters += findItems.price;
    orderQueue.push({
      pizza: findItems,
      status: "Ordered",
      nextOrderIds: (nextOrderIds += 1),
    });
  } else {
    console.log("not seen");
  }
  return orderQueue;
}
console.log(placeOrders("jam"));
console.log(placeOrders("Gorrila"));
console.log(placeOrders("Rice"));
console.log(cashInRegisters);

// Challenge: Write another utility, completeOrders, that takes an orderID as a parameter
// Find the correct order in the OrderQueue, and makrs its status as "completed" for good mesure.
// return the found order from the function
// Note: you'll need to ensure that we're adding IDs to your orders when we create and orders. you can sue a blobal "nextOrderIds" variable and increment it every time a new order is created to stimulate nectIDS being manages for us by a database

function completeOrders(orderId:number) {
  let lookOrder = orderQueue.find((eachItem) => {
    return eachItem.nextOrderIds === orderId;
  });
  if (lookOrder) {
    lookOrder.status = "completed";
    return lookOrder;
  }else {
    return "Order not found"
  }
  
}
console.log(completeOrders(5));


// challenge: Add an order type. it should have "id", "pizza", and "status" properties. Look through the code if you have  areminer as to what data types those should be