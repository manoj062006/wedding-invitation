// Countdown Logic
function startCountdown(id, dateStr) {
  const countdownEl = document.getElementById(id);
  const targetDate = new Date(dateStr);

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      countdownEl.innerText = 'It’s time!';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownEl.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

startCountdown("wedding-countdown", "May 15, 2025 11:00:00");
startCountdown("reception-countdown", "May 25, 2025 18:00:00");

// Floating flower animations
function createFloatingFlowers() {
  const body = document.body;
  for (let i = 0; i < 15; i++) {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.left = `${Math.random() * 100}vw`;
    flower.style.animationDuration = `${5 + Math.random() * 10}s`;
    flower.innerText = "🌺"; // Flower emoji
    body.appendChild(flower);
  }
}

window.onload = () => {
  createFloatingFlowers();
};
