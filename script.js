// Function for Hero Button
function explore() {
    document.getElementById('regulations').scrollIntoView({ behavior: 'smooth' });
}

// Mobile Menu Toggle
function toggleMenu() {
    const links = document.querySelector('.nav-links');
    links.classList.toggle('active');
}

// Intersection Observer for Reveal AND Hide
const observerOptions = { 
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // SCROLL IN: Show
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        } else {
            // SCROLL OUT: Hide
            entry.target.style.opacity = "0";
            entry.target.style.transform = "translateY(40px)";
        }
    });
}, observerOptions);

// Initialize all items with the reveal-item class or specific cards
document.querySelectorAll('.card, .plan-card, .section-title, .news-header').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s cubic-bezier(0.2, 1, 0.3, 1)";
    observer.observe(el);
});
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the card is visible
    });

    reveals.forEach(el => observer.observe(el));
}

// Run the function on load
window.addEventListener("DOMContentLoaded", reveal);

// Mobile Menu Toggle logic
function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}
// --- NEW SPEED UPGRADES ---

// 1. Cursor Trail Element Creation
const trail = document.createElement('div');
trail.className = 'cursor-trail';
document.body.appendChild(trail);

let mouseX = 0;
let mouseY = 0;
let trailX = 0;
let trailY = 0;

// Track Mouse Position
window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// High-Velocity Animation Loop for the Trail
function animateTrail() {
    // Easing creates the physical 'drag' effect
    trailX += (mouseX - trailX) * 0.15;
    trailY += (mouseY - trailY) * 0.15;

    trail.style.left = `${trailX}px`;
    trail.style.top = `${trailY}px`;
    
    requestAnimationFrame(animateTrail);
}
animateTrail();

// Click "Launch" Feedback
window.addEventListener('mousedown', () => {
    trail.style.transform = 'translate(-50%, -50%) scale(0.7)';
    trail.style.background = '#ffffff'; 
});
window.addEventListener('mouseup', () => {
    trail.style.transform = 'translate(-50%, -50%) scale(1)';
    trail.style.background = 'var(--accent-coral)';
});

// 2. Adjusting existing Observer for "Fly-by" Speed
// We update the styles of items being observed to move horizontally
document.querySelectorAll('.card, .plan-card').forEach((el, index) => {
    el.style.transform = "translateX(60px) skewX(-10deg)"; // Start position
    el.style.transition = `all 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${index * 0.1}s`; // Snappy easing
});