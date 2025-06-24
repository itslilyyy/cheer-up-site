const messages = [
  "You are enough, exactly as you are 💗",
  "Take a deep breath. You’re doing better than you think 🌸",
  "The world is brighter with you in it 🌟",
  "Someone out there is so glad you exist 🕊️",
  "It’s okay to rest. You deserve peace 🛏️💤",
  "Keep going. You’ve already survived so much 🌼",
  "You matter more than words can say 💛",
];

function newMessage() {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById('message').innerText = msg;
}

window.onload = newMessage;
