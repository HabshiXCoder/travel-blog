// Scroll fade animation
const fadeUps = document.querySelectorAll(".fade-up");
const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);
fadeUps.forEach(el => appearOnScroll.observe(el));

// Modal
const modal = document.getElementById("blog-modal");
const modalTitle = modal.querySelector(".modal-title");
const modalMeta = modal.querySelector(".modal-meta");
const modalText = modal.querySelector(".modal-text");
const modalImage = modal.querySelector(".modal-image");
const modalClose = modal.querySelector(".modal-close");

// Open Modal
document.querySelectorAll(".read-more-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".blog-card");
    modalTitle.textContent = card.querySelector("h2").innerText;
    modalMeta.textContent = card.querySelector(".blog-meta").innerText;
    modalText.textContent = card.dataset.fulltext;
    modalImage.src = card.dataset.image;

    modal.style.display = "flex";
  });
});

// Close Modal
modalClose.addEventListener("click", () => (modal.style.display = "none"));
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
