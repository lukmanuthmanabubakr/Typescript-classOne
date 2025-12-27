let showAll = document.getElementById("showAll");
let showAvailable = document.getElementById("showAvailable");
let showTopRated = document.getElementById("showTopRated");
let showSummary = document.getElementById("showSummary");
let productInfo = document.getElementById("productInfo");
let productList = document.getElementById("productList");

let products = [
  {
    name: "Wireless Mouse",
    category: "electronics",
    price: 12000,
    inStock: true,
    rating: 4.3,
  },
  {
    name: "Bluetooth Headphones",
    category: "electronics",
    price: 28000,
    inStock: false,
    rating: 4.6,
  },
  {
    name: "Laptop Stand",
    category: "accessories",
    price: 15000,
    inStock: true,
    rating: 4.1,
  },
  {
    name: "USB-C Charger",
    category: "electronics",
    price: 10000,
    inStock: true,
    rating: 3.9,
  },
  {
    name: "Office Chair",
    category: "furniture",
    price: 85000,
    inStock: false,
    rating: 4.4,
  },
  {
    name: "Mechanical Keyboard",
    category: "electronics",
    price: 45000,
    inStock: true,
    rating: 4.8,
  },
  {
    name: "Desk Lamp",
    category: "furniture",
    price: 18000,
    inStock: true,
    rating: 4.0,
  },
  {
    name: "External Hard Drive",
    category: "electronics",
    price: 65000,
    inStock: true,
    rating: 4.5,
  },
];

function toShowAllProducts(event) {
  event.preventDefault();

  productList.innerHTML = "";
  products.forEach((eachProduct) => {
    let { name, category, price, inStock, rating } = eachProduct;

    let li = document.createElement("li");
    li.textContent = `Name: ${name}, Category: ${category}, Price: ${price}, Available: ${inStock}, Rate: ${rating}`;
    productList.appendChild(li);
  });
}
showAll.addEventListener("click", toShowAllProducts);

function toProductInStock(event) {
  event.preventDefault();

  let availableStock = products.filter((stockedProduct) => {
    return stockedProduct.inStock === true;
  });

  productList.innerHTML = "";
  availableStock.forEach((eachProduct) => {
    let { name, category, price, inStock, rating } = eachProduct;

    let li = document.createElement("li");
    li.textContent = `Name: ${name}, Category: ${category}, Price: ${price}, Available: ${inStock}, Rate: ${rating}`;
    productList.appendChild(li);
  });
}
showAvailable.addEventListener("click", toProductInStock);

function toShowTopRated(event) {
  event.preventDefault();

  let availableStock = products.sort((sortA, sortB) => {
    return sortB.rating - sortA.rating;
  });

  productList.innerHTML = "";
  availableStock.forEach((eachProduct) => {
    let { name, category, price, inStock, rating } = eachProduct;

    let li = document.createElement("li");
    li.textContent = `Name: ${name}, Category: ${category}, Price: ${price}, Available: ${inStock}, Rate: ${rating}`;
    productList.appendChild(li);
  });
}
showTopRated.addEventListener("click", toShowTopRated);

function toShowPriceSummary(event) {
  event.preventDefault();

  let availableStock = products.filter((product) => {
    return product.inStock === true;
  });

  let total = availableStock.reduce((adding, product) => {
    return adding + product.price;
  }, 0);

  let summaryPrice = total / availableStock.length;

  console.log(summaryPrice);
  productInfo.textContent = summaryPrice;
}
showSummary.addEventListener("click", toShowPriceSummary);
