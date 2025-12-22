let expenseForm = document.getElementById("expenseForm");
let expenseName = document.getElementById("expenseName");
let expenseAmount = document.getElementById("expenseAmount");
let expenseCategory = document.getElementById("expenseCategory");
let totalAmount = document.getElementById("totalAmount");
let expenseCount = document.getElementById("expenseCount");
let budgetStatus = document.getElementById("budgetStatus");
let filterCategory = document.getElementById("filterCategory");
let expenseList = document.getElementById("expenseList");

let expensesDetails = [];
let expensesCounts = 0;
let theAllExpenses = 0;
let limit = 50000;

function expenseTracker(event) {
  event.preventDefault();

  let expName = expenseName.value;
  let expAmount = Number(expenseAmount.value);
  let expCat = expenseCategory.value;
  let expFill = filterCategory.value;

  if (!expName && !expAmount && !expCat) {
    return null;
  }

  expensesDetails.push({ expName, expAmount, expCat });
  console.log(expensesDetails);

  expenseCount.textContent = expensesCounts += 1;

  totalAmount.textContent = expAmount + theAllExpenses;
  theAllExpenses = expAmount + theAllExpenses;
  totalAmount.textContent = theAllExpenses;

  if (theAllExpenses <= 45000) {
    budgetStatus.textContent = "Safe";
  } else if (theAllExpenses > 45000 && theAllExpenses < limit) {
    budgetStatus.textContent = "Warning";
  } else if (theAllExpenses >= limit) {
    budgetStatus.textContent = "Exceeded";
  }

  expenseList.innerHTML = "";
  expensesDetails.forEach((expense) => {
    let li = document.createElement("li");
    li.textContent = `${expense.expName}, ${expense.expAmount}, ${expense.expCat}`;
    expenseList.appendChild(li);
  });

  
}
expenseForm.addEventListener("submit", expenseTracker);
