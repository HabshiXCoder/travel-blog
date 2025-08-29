// ===========================
// Contact Form Handling
// ===========================
const form = document.getElementById('contact-form');
const formMessage = document.querySelector('.form-message');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default page reload

  // Extract form values
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  // Basic validation
  if (!name || !email || !subject || !message) {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please fill in all fields.';
    return;
  }

  // Simulate sending form
  formMessage.style.color = 'green';
  formMessage.textContent = `Thank you, ${name}! Your message has been sent successfully.`;

  // Reset form after submission
  form.reset();
});

// ===========================
// Scroll Reveal Animation
// ===========================
const fadeUps = document.querySelectorAll('.fade-up');
window.addEventListener('scroll', () => {
  const triggerPoint = window.innerHeight * 0.85;

  fadeUps.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < triggerPoint) {
      el.classList.add('reveal');
    }
  });
});

// ===========================
// Footer Year Update
// ===========================
document.getElementById('current-year').textContent = new Date().getFullYear();
