function showMessage() {
    document.getElementById('message').innerText = "ti amo un sacco gine!!";
}

function moveNoButton() {
    const noButton = document.getElementById('no-button');
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const buttonRect = noButton.getBoundingClientRect();

    const maxX = viewportWidth - buttonRect.width; // Maximum horizontal movement
    const maxY = document.body.scrollHeight - buttonRect.height; // Maximum vertical movement within the page height

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 390 + 'px'; // Ensure hearts fall within 390px width
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

function showLoveMessage() {
    document.getElementById('prompt').innerText = "lo voglio anche io hihi <3";
    document.getElementById('yes-button').style.display = 'none';
    document.getElementById('no-button').style.display = 'none';
}

// Add touch event listener for mobile
document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('no-button');
    if (!noButton) {
        console.error('No button not found during DOMContentLoaded');
        return;
    }
    noButton.addEventListener('touchstart', moveNoButton);
    noButton.addEventListener('click', moveNoButton);
});