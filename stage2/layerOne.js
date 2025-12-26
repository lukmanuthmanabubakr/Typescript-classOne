let outputForm = document.getElementById("itemForm");
let textInput = document.getElementById("itemInput");
let readCount = document.getElementById("itemCount");
let listItems = document.getElementById("itemList");

let arrayItem = [];
let items = 0;

function shoppingList(event) {
  event.preventDefault();
  let theInp = textInput.value;
  arrayItem.push({ theInp });
  items++;

  readCount.textContent = items;

  listItems.innerHTML = "";

  arrayItem.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = `${item.theInp}`;
    listItems.appendChild(li);
  });
}
outputForm.addEventListener("submit", shoppingList);
