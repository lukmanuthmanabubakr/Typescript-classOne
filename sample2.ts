type menuList = {
  id: number
    name: string,
    price: number,
}

type Status = "Ordered" | "completed"
type orderTpe = {
  nextOrderIds: number,
  pizza: menuList,
  status: Status
}

let allMenu:menuList[] = [
  {id: 1, name: "Pizza", price: 40 },
  {id: 2, name: "Rice", price: 60 },
  {id: 3, name: "Gorrila", price: 20 },
  {id: 4, name: "jam", price: 55 },
  {id: 5, name: "beans", price: 90 },
];

let cashInRegisters = 100;
let orderQueue:orderTpe[] = [];
let nextOrderIds = 0;

// Add a utility function "addNewPizza" that takes a pizza object adn adds to it menu


function addNewPizza(id:number, name: string, price: number) {
  let existPizza = allMenu.some((item) => item.name === name);
  if (existPizza) {
    return console.log("Pizza already exist");
  } else {
    allMenu.push({id, name, price });
  }
  //   console.log(allMenu);
}
addNewPizza(5, "Sanine", 80);

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

//Challenge: Create a new utility function called getPizzaDetail, It will take a parameter called identifier, but theres a twist. We want this identifier to be allowed to either be the string name of the pizza [e.g "Rice"], or to be a number ID of the pizza (e.g 2)


type Identifier = string | number
function getPizzaDetail (identifier:Identifier) {
  if(typeof identifier === "string"){
    let byName = allMenu.find(search => {
      return search.name.toLowerCase() === identifier.toLowerCase()
    })
  }else if (typeof identifier === "number"){
     let byName = allMenu.find(search => {
      return search.id === identifier
    })
  }else{
    return null
  }
}