const menu = [
    {name: "Dominus Pizza", price: 500},
    {name: "Legend Pizza", price: 800},
    {name: "Safari Pizza", price: 200},
    {name: "DLT Pizza", price: 100},
]

const cashInRegister = 100
const orderQueue = []

// Add a utility function "addNewPizza" thats take pizza object
// And add it to the menu

const addNewPizza = (getItem) => {
    menu.push(getItem)
}


// Write another utility function placeOrder, that takes the pizza name parameter and: 
// 1 find thats pizza object in the menu
// 2. Add the income to the cashInRegister
// 3. Pushes a new "Order object" to the orderQueue
// e.g (pizza: selectedPizzaObjectfromstep1, status: "ordered")
// return the new order object

const placeOrder = (pizzaItem) => {
    const findPizza = menu.find(pizzaObj => pizzaObj.name === pizzaItem)
}