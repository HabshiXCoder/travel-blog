/* =====================================
   ABOUT PAGE INTERACTIVITY
   Scroll reveal + footer utilities
===================================== */

// ------------------- SCROLL REVEAL -------------------
window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.fade-up'); // select all cards
  const screenPos = window.innerHeight / 1.2; // trigger position

  cards.forEach(card => {
    const cardPos = card.getBoundingClientRect().top;
    if (cardPos < screenPos) {
      card.classList.add('visible'); // reveal card
    }
  });
});

// ------------------- FOOTER CURRENT YEAR -------------------
const yearSpan = document.getElementById('current-year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// ------------------- BACK TO TOP BUTTON -------------------
const backToTopBtn = document.getElementById('back-to-top');
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ------------------- NEWSLETTER SUBSCRIPTION -------------------
const subscribeBtn = document.getElementById('subscribe-btn');
const emailInput = document.getElementById('newsletter-email');
const messagePara = document.querySelector('.subscription-message');

if (subscribeBtn && emailInput && messagePara) {
  subscribeBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    if (email === "" || !email.includes("@")) {
      messagePara.textContent = "Please enter a valid email address.";
      messagePara.style.color = "#ff6b6b"; // red for errors
    } else {
      messagePara.textContent = "Thank you for subscribing!";
      messagePara.style.color = "#28a745"; // green for success
      emailInput.value = "";
    }
  });
}

// -------------------------
// Animated Counter Script
// -------------------------
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 200;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      requestAnimationFrame(updateCount);
    } else {
      counter.innerText = target;
    }
  };

  // Trigger animation on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateCount();
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.6 });

  observer.observe(counter);
});

// ------------------- REVEAL STATS & MILESTONES -------------------
const revealElements = document.querySelectorAll('.stat-item, .milestone-item');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add('reveal');
    }
  });
});
