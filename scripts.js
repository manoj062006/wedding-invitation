// Countdown Timers
function countdown(targetDate, elementId) {
  const countdownElement = document.getElementById(elementId);
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      countdownElement.innerHTML = "It's time!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

const weddingDate = new Date('May 15, 2025 11:00:00').getTime();
const receptionDate = new Date('May 25, 2025 18:00:00').getTime();

countdown(weddingDate, 'wedding-countdown');
countdown(receptionDate, 'reception-countdown');

// Floating animation - flower petals
const emojis = ['🌺', '🌸', '🌹'];
function createFloatingEmoji() {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.animationDuration = 5 + Math.random() * 5 + 's';
  flower.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
  document.body.appendChild(flower);

  setTimeout(() => flower.remove(), 10000);
}
setInterval(createFloatingEmoji, 500);
