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

// Function to render expenses based on current filter
function renderExpenses() {
  let selectedCategory = filterCategory.value;
  let filteredExpenses;

  if (selectedCategory === "all") {
    filteredExpenses = expensesDetails;
  } else {
    filteredExpenses = expensesDetails.filter(expense => expense.expCat === selectedCategory);
  }

  expenseList.innerHTML = "";

  filteredExpenses.forEach(expense => {
    let li = document.createElement("li");
    li.textContent = `${expense.expName}, ${expense.expAmount}, ${expense.expCat}`;
    expenseList.appendChild(li);
  });
}

// Function to handle new expense submission
function expenseTracker(event) {
  event.preventDefault();

  let expName = expenseName.value;
  let expAmount = Number(expenseAmount.value);
  let expCat = expenseCategory.value;

  if (!expName && !expAmount && !expCat) return null;

  expensesDetails.push({ expName, expAmount, expCat });
  console.log(expensesDetails);

  // Update counts and totals
  expensesCounts += 1;
  expenseCount.textContent = expensesCounts;

  theAllExpenses += expAmount;
  totalAmount.textContent = theAllExpenses;

  if (theAllExpenses <= 45000) {
    budgetStatus.textContent = "Safe";
  } else if (theAllExpenses > 45000 && theAllExpenses < limit) {
    budgetStatus.textContent = "Warning";
  } else {
    budgetStatus.textContent = "Exceeded";
  }

  // Render the list according to the current filter
  renderExpenses();

  // Clear form fields for next input
  expenseName.value = "";
  expenseAmount.value = "";
  expenseCategory.value = "food"; // or default
}

// Listen for form submission
expenseForm.addEventListener("submit", expenseTracker);

// Listen for filter changes
filterCategory.addEventListener("change", renderExpenses);
