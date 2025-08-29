
/* =========================
   HERO SLIDER SCRIPT
========================= */
let heroIndex = 0;
const heroSlides = document.querySelectorAll('.slide');

function showHeroSlide(n) {
    if (n >= heroSlides.length) heroIndex = 0;
    if (n < 0) heroIndex = heroSlides.length - 1;

    heroSlides.forEach(slide => slide.style.display = 'none');
    heroSlides[heroIndex].style.display = 'block';
}

function changeSlide(n) {
    heroIndex += n;
    showHeroSlide(heroIndex);
}

// Auto-slide every 5 seconds
setInterval(() => {
    heroIndex++;
    showHeroSlide(heroIndex);
}, 5000);

// Initialize first hero slide
showHeroSlide(heroIndex);


/* =========================
   ABOUT SECTION SCROLL REVEAL
========================= */
window.addEventListener('scroll', () => {
    const aboutSection = document.querySelector(".about-section");
    if (!aboutSection) return;

    const sectionPos = aboutSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
        aboutSection.classList.add("reveal");
    }
});


/* =========================
   GALLERY SLIDER SCRIPT
========================= */
const galleryWrapper = document.querySelector('.slider-wrapper');
const gallerySlides = document.querySelectorAll('.slide-item');
const galleryDots = document.querySelectorAll('.dot');
let galleryIndex = 0;

function updateGallery() {
    if (gallerySlides.length === 0) return;
    
    const slideWidth = gallerySlides[0].offsetWidth + 20; // width + gap
    const containerCenter = galleryWrapper.parentElement.offsetWidth / 2;
    const offset = -(slideWidth * galleryIndex) + containerCenter - slideWidth / 2;

    galleryWrapper.style.transform = `translateX(${offset}px)`;

    // Center image styling
    gallerySlides.forEach(slide => slide.classList.remove('center'));
    gallerySlides[galleryIndex].classList.add('center');

    // Update dots
    galleryDots.forEach(dot => dot.classList.remove('active'));
    if(galleryDots[galleryIndex]) galleryDots[galleryIndex].classList.add('active');
}

// Scroll navigation (mouse wheel)
window.addEventListener('wheel', e => {
    if (gallerySlides.length === 0) return;

    if (e.deltaY > 0) {
        galleryIndex = (galleryIndex + 1) % gallerySlides.length;
    } else {
        galleryIndex = (galleryIndex - 1 + gallerySlides.length) % gallerySlides.length;
    }
    updateGallery();
});

// Dot navigation
galleryDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        galleryIndex = index;
        updateGallery();
    });
});

// Auto-slide every 5s
setInterval(() => {
    galleryIndex = (galleryIndex + 1) % gallerySlides.length;
    updateGallery();
}, 5000);

// Initialize gallery
updateGallery();


/* =========================
   VIDEO SLIDER SCRIPT
========================= */
let videoIndex = 0;
const videoSlides = document.querySelectorAll('.video-slide');
const videoDots = document.querySelectorAll('.dot-video');

function showVideoSlide(n) {
    if (videoSlides.length === 0) return;

    if (n >= videoSlides.length) videoIndex = 0;
    if (n < 0) videoIndex = videoSlides.length - 1;

    videoSlides.forEach((slide, i) => {
        const video = slide.querySelector('video');
        if (i === videoIndex) {
            slide.classList.add('active');
            if(video) video.play().catch(err => console.log('Video playback blocked:', err));
        } else {
            slide.classList.remove('active');
            if(video) {
                video.pause();
                video.currentTime = 0;
            }
        }
    });

    // Update dots
    videoDots.forEach((dot, i) => dot.classList.toggle('active', i === videoIndex));
}

// Next / Previous buttons
function changeVideo(n) {
    videoIndex += n;
    showVideoSlide(videoIndex);
}

// Dot navigation
function currentVideo(n) {
    videoIndex = n;
    showVideoSlide(videoIndex);
}

// Initialize first video slide
showVideoSlide(videoIndex);


/* =========================
   FOOTER SCRIPT
========================= */
// Update current year dynamically
const yearEl = document.getElementById('current-year');
if(yearEl) yearEl.textContent = new Date().getFullYear();

// Back to top button
const backToTopBtn = document.getElementById('back-to-top');
if(backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Newsletter subscription validation
const subscribeBtn = document.getElementById('subscribe-btn');
const emailInput = document.getElementById('newsletter-email');
const messagePara = document.querySelector('.subscription-message');

if(subscribeBtn && emailInput && messagePara){
    subscribeBtn.addEventListener('click', () => {
        const email = emailInput.value.trim();
        if(email === "" || !email.includes("@")){
            messagePara.textContent = "Please enter a valid email address.";
            messagePara.style.color = "#ff6b6b"; // red for error
        } else {
            messagePara.textContent = "Thank you for subscribing!";
            messagePara.style.color = "#64ffda"; // green for success
            emailInput.value = "";
        }
    });
}
