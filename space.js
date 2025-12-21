let moodForm = document.getElementById("moodForm");
let userName = document.getElementById("userName");
let userMood = document.getElementById("userMood");
let greetingMessage = document.getElementById("greetingMessage");
let submissionCount = document.getElementById("submissionCount");
let historyList = document.getElementById("historyList");

let moodHistory = [];
let count = 0;

function enterDetails(event) {
  event.preventDefault();

  let name = userName.value;
  let mood = userMood.value;

  if (mood === "happy") {
    greetingMessage.textContent = `${name} is happy`;
  } else if (mood === "sad") {
    greetingMessage.textContent = `${name} is sad`;
  } else if (mood === "neutral") {
    greetingMessage.textContent = `${name} is neutral`;
  } else if (mood === "excited") {
    greetingMessage.textContent = `${name} is excited`;
  } else if (mood === "tired") {
    greetingMessage.textContent = `${name} is tired`;
  } else {
    return null;
  }

  count++;
  submissionCount.textContent = `Submissions today: ${count}`;
  moodHistory.push({ name, mood });

  historyList.innerHTML = "";

  // Loop through moodHistory
  moodHistory.forEach((person) => {
    let li = document.createElement("li");
    li.textContent = `${person.name} is feeling ${person.mood}`;
    historyList.appendChild(li);
  });
}

moodForm.addEventListener("submit", enterDetails);
