// Countdown Timer
function countdownTimer(date, elementId) {
    const countDownDate = new Date(date).getTime();
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        if (distance < 0) {
            clearInterval(x);
            document.getElementById(elementId).innerHTML = "The event has started!";
            return;
        }
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById(elementId).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

countdownTimer('May 15, 2025 11:00:00', 'wedding-countdown');
countdownTimer('May 25, 2025 18:00:00', 'reception-countdown');

// QR Code Generation
function generateQRCode(text, elementId) {
    const qrcode = new QRCode(document.getElementById(elementId), {
        text: text,
        width: 128,
        height: 128
    });
}

generateQRCode('https://maps.app.goo.gl/sW6ydh5fyBTLZM6a6', 'qrcode-hyderabad');
// Repeat for other locations
