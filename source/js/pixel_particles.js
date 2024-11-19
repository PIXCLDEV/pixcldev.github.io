// Get the canvas and its context
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Particle settings
const particlesArray = [];
const numberOfParticles = 20;
const particleColor = "#a8a8a8"; // Light gray for neumorphism style

// Helper function to generate a random number
function random(min, max) {
    return Math.random() * (max - min) + min;
}

function lerp(a, b, t) {
    return a + (b - a) * t;
}

// Particle constructor function
class Particle {

    constructor(particleId) {
        this.particleId = particleId;
        this.reset();
    }

    reset() {

        this.y = random(0, canvas.height / 2);

        this.startSize = random(10, 30); // Size of square particles
        this.size = this.startSize; // Size of square particles

        this.speedY = random(30.2, 30.5); // Vertical speed (downwards movement)

        this.animationOffset = random(0, 1);

        if (this.particleId < numberOfParticles / 2) {
            this.startX = random(0, canvas.width * 0.2);
            this.xDirection = 1;
            this.x = this.startX - 100;
        }
        else {
            this.startX = random(canvas.width /2, canvas.width);
            this.xDirection = -1;
            this.x = this.startX - 100;
        }

        this.maxOpacity = random(0.2, 0.5);
        this.opacity = 0;

        this.maxLifetime = random(5,10);
        this.lifetime = 0;

        this.rotation = random(0, math.PI * 2); // Initial rotation in radians
    }

    // Update particle position
    update(dt) {
        let a = math.min(this.lifetime / this.maxLifetime, 1);
        let sinA = (math.sin(a * math.PI) + 1) / 2;
        let sinAOff = (math.sin((a + this.animationOffset) * math.PI) + 1) / 2;

        this.y += this.speedY * dt;

        this.startX += (this.speedY * dt) * this.xDirection;
        this.x = lerp(this.startX - 100, this.startX + 100, sinAOff);

        this.opacity = lerp(0, this.maxOpacity, sinA);

        this.size = lerp(this.startSize, this.startSize * 2, a);

        // If the particle goes off the bottom, reset it to the top
        if (a >= 1) {
            this.reset();
            return;
        }

        this.lifetime += dt;
    }

    // Draw the particle as a square
    draw() {
        ctx.save();
        ctx.fillStyle = particleColor;
        ctx.globalAlpha = this.opacity;
        
        ctx.translate(this.x, this.y);

        ctx.rotate(this.rotation);
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);

        //ctx.rotate(this.rotation);
        //ctx.globalAlpha = 1;
        
         ctx.restore(); // Restore the canvas to its previous state
    }
}

// Initialize particles
function initParticles() {
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle(i));
    }
}

// Animation loop with delta time
let lastTime = performance.now();

function animateParticles(currentTime) {
    let dt = (currentTime - lastTime) / 1000; // Delta time in seconds
    lastTime = currentTime;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesArray.forEach((particle) => {
        particle.update(dt);
        particle.draw();
    });

    requestAnimationFrame(animateParticles);
}

// Resize canvas on window resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particlesArray.length = 0;
    initParticles();
});

// Start the particle effect
initParticles();
animateParticles(performance.now());
