const messages = [
  "Dear Baby, please feel it",
  "Please ye pyaar ka cycle hai, achee se feel karna",
  "Dost bhi tum, pyaar bhi tum 😊",
  "Ek bhi tum aur hazar bhi tum 🤩",
  "Dukh me tum aur khushi me tum 🤨",
  "Jindagi ke safar me kaafi ho tum ❤️",
  "Maine shiddat se chaha hai tumhe, I love you ❤️",
  "You are my soulmate ✨💕",
  "My future wife🤭",
  "I will always be there for you",
  "No matter how far we are🥰",
  "I promise I will never multi-thread on you",
  "You're the prettiest, cutest, funniest,",
  "I'll always do my best to keep you happy🥺",
  "Main humesa tumhre sath hun 🤞✔",
  "Kabhi khud ko akela mat samjhna💓",
  "You are the most special person in my life🥰",
  "And trust me I don't want anyone else 🥰",
  "Acche lagte hai wo pal jo tumhare",
  "Sath bitaye hain virtually or offline💓",
  "This complete love cycle is just for you, 😘",
  "My unconditional love, my private variable💖",
  "Please take care of love who really loves you❤",
  "You're the love of my life,",
  "I Love You So much Miss.Anushree Sharma❤️",
  "End.....",
];

const ulEl = document.querySelector("ul");
let currentDay = 0;

// Initialize the list of messages with numbers
function init() {
  messages.forEach((message, idx) => {
    const li = document.createElement("li");
    li.textContent = `${idx + 1}: ${message}`; // Add number before each message
    ulEl.appendChild(li);
  });
  updateDay(0); // Display the initial active message
}

// Update the active message
function updateDay(offset) {
  currentDay = (currentDay + offset + messages.length) % messages.length;

  const liElements = document.querySelectorAll("li");
  liElements.forEach((li, idx) => {
    li.classList.toggle("active", idx === currentDay);
  });
}

// Adjust the day based on button click
function adjustDay(offset) {
  updateDay(offset);
}

// Initialize the app
document.addEventListener("DOMContentLoaded", init);
