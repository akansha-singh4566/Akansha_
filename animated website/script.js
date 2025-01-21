// Parallax effect
const parallax = document.querySelector('#parallax .background');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  parallax.style.transform = `translateY(${scrollY * 0.5}px)`; // Fixed syntax with backticks
});

// Interactive Canvas Graphics
const canvas = document.getElementById('interactiveCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

// Particle class
class Particle {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speedX = Math.random() * 3 - 1.5; // Random horizontal velocity
    this.speedY = Math.random() * 3 - 1.5; // Random vertical velocity
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Shrink the particle size over time
    if (this.size > 0.2) this.size -= 0.1;
  }
}

// Mouse interaction
const mouse = {
  x: null,
  y: null,
};

// Add particles on mousemove
canvas.addEventListener('mousemove', (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < 5; i++) {
    particlesArray.push(
      new Particle(mouse.x, mouse.y, Math.random() * 5 + 1, 'rgba(150, 0, 255, 0.8)')
    );
  }
});

// Animate particles
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  particlesArray.forEach((particle, index) => {
    particle.draw();
    particle.update();
    // Remove particles that are too small
    if (particle.size <= 0.3) particlesArray.splice(index, 1);
  });
  requestAnimationFrame(animate);
}

animate();
