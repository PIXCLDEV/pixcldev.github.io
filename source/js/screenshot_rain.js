// Array of image sources (add your own screenshot paths here)
const images = [
    'assets/sa2d/screen1.png',
    'assets/sa2d/screen2.png',
    'assets/sa2d/screen3.png'
];

const fallingImagesContainer = document.querySelector('.falling-images');

// Function to create a falling image element
function createFallingImage() {
    const img = document.createElement('img');
    img.src = images[Math.floor(Math.random() * images.length)];
    img.classList.add('falling-image');

    // Randomize the animation duration, delay, and starting position
    const randomDuration = Math.random() * 5 + 30; // Between 5s and 10s
    const randomDelay = Math.random() * 1; // Between 0s and 5s
    const randomXPosition = Math.random() * 100; // Between 0% and 100%
    const randomRotationSpeed = Math.random() * 0 + 35; // Between 5s and 15s

    img.style.left = `${randomXPosition}vw`;
    img.style.top = '-400px';
    img.style.animationDuration = `${randomDuration}s`;
    img.style.animationDelay = `${randomDelay}s`;



    //img.style.animationName = 'fall, rotate';
    img.style.animationTimingFunction = 'linear';
    //img.style.animationIterationCount = 'infinite';
    //img.style.animationDirection = 'normal';
    img.style.animationDuration = `${randomDuration}s, ${randomRotationSpeed}s`;

    // Remove the image after it finishes falling (infinite loop, so not strictly necessary)
    img.addEventListener('animationend', () => {
        img.remove();
    });

    fallingImagesContainer.appendChild(img);
}

// Create multiple falling images
setInterval(createFallingImage, 4000); // Add a new image every second
