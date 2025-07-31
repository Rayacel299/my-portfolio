// Typing Animation
const typedText = document.getElementById('typedText');
const phrases = ['Hi, I am Noman Muhammadi.', 'A Web Developer.', 'Creative Coder.'];
let index = 0, char = 0, isDeleting = false;

function type() {
  let current = phrases[index];
  typedText.textContent = current.substring(0, char);

  if (!isDeleting && char < current.length) {
    char++;
  } else if (isDeleting && char > 0) {
    char--;
  } else if (!isDeleting) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  } else {
    isDeleting = false;
    index = (index + 1) % phrases.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// GSAP Animated Particle Background
const canvas = document.getElementById('particle-bg');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];
for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 1,
    dy: (Math.random() - 0.5) * 1,
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ff6a00';
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;

    // Bounce
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(animateParticles);
}
animateParticles();
