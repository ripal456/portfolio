// ==================== HERO SECTION SCRIPTS ====================

// Generate random particles
function generateParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const delay = Math.random() * 3;
    const duration = 3 + Math.random() * 2;

    particle.style.left = x + "%";
    particle.style.top = y + "%";
    particle.style.animationDelay = delay + "s";
    particle.style.animationDuration = duration + "s";

    particlesContainer.appendChild(particle);
  }
}

// Wave emoji animation on load
function animateWaveEmoji() {
  const emoji = document.querySelector(".greeting-emoji");
  emoji.style.display = "inline-block";
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// CTA Button click handler (Hero)
function downloadPDF() {
  // Method 1: Direct link to PDF file
  const pdfUrl = "./Gemini_Generated_Image_xvw5yjxvw5yjxvw5 (1) (1).png"; // Path to your PDF file

  // Create a temporary anchor element
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Resume.pdf"; // Name of downloaded file

  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// CTA Button click handler (Hero) - Download Resume
document.querySelector(".cta-button").addEventListener("click", function () {
  downloadPDF();
});
// Hire Me button click handler
document.querySelector(".hire-btn").addEventListener("click", function () {
  const email = "ripalshah3838@gmail.com";
  const subject = "Hiring Inquiry";
  const body =
    "Hello,\n\nI'm interested in discussing a potential opportunity with you.\n\nPlease let me know your availability.\n\nThank you!";

  window.location.href = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
});
// ==================== PARALLAX & HOVER EFFECTS ====================

// Parallax effect on mouse move for all images
document.addEventListener("mousemove", (e) => {
  const imageWrappers = document.querySelectorAll(
    ".about-image-wrapper, .collaborate-image-wrapper, .passion-image-wrapper"
  );
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  const moveX = (x - 0.5) * 20;
  const moveY = (y - 0.5) * 20;

  imageWrappers.forEach((wrapper) => {
    wrapper.style.transform = `perspective(1000px) rotateX(${moveY}deg) rotateY(${moveX}deg)`;
  });
});

// Reset on mouse leave
document.addEventListener("mouseleave", () => {
  const imageWrappers = document.querySelectorAll(
    ".about-image-wrapper, .collaborate-image-wrapper, .passion-image-wrapper"
  );
  imageWrappers.forEach((wrapper) => {
    wrapper.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  });
});

// Parallax effect on mouse move for hero orbs
document.addEventListener("mousemove", (e) => {
  const heroOrbs = document.querySelectorAll(".floating-orb");
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  heroOrbs.forEach((orb, index) => {
    const moveX = (x - 0.5) * (index + 1) * 20;
    const moveY = (y - 0.5) * (index + 1) * 20;
    orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateX(0)";
    }
  });
}, observerOptions);

// Observe bring items and collaborate items
document
  .querySelectorAll(".bring-item, .collaborate-item")
  .forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateX(-30px)";
    item.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
    observer.observe(item);
  });

// ==================== ABOUT SECTION SCRIPTS ====================

// CTA Button click handler (About)
document.querySelector(".about-cta").addEventListener("click", function () {
  window.location.href = "mailto:ripalshah3838@gmail.com";
});

// ==================== SKILLS SECTION SCRIPTS ====================

// Add hover effect to skill cards
document.querySelectorAll(".skill-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-15px) scale(1.05)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// ==================== COLLABORATE SECTION SCRIPTS ====================

// Collaborate button click handler
document
  .querySelector(".collaborate-btn")
  .addEventListener("click", function () {
    alert("Contact form or email functionality here!");
  });

// ==================== PASSION SECTION SCRIPTS ====================

// Social buttons click handlers
document.querySelectorAll(".social-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const text = this.textContent.trim();
    if (text === "Email") {
      window.location.href = "mailto:ripalshah3838@gmail.com";
    } else if (text === "LinkedIn") {
      window.location.href = "https://linkedin.com/in/yourprofile";
    }
  });
});

// ==================== EXPERIENCE SECTION SCRIPTS ====================

// Timeline item hover effects
document.querySelectorAll(".timeline-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.02)";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
});

// ==================== PROJECTS CAROUSEL SCRIPTS ====================

let currentProjectIndex = 0;
const projectCards = document.querySelectorAll(".project-card");
const totalProjects = projectCards.length;
const projectsPerView = 3;

function initializeCarousel() {
  const carouselDotsContainer = document.getElementById("carouselDots");
  const totalDots = Math.ceil(totalProjects / projectsPerView);

  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement("div");
    dot.className = "carousel-dot";
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    carouselDotsContainer.appendChild(dot);
  }
}

function updateCarousel() {
  const track = document.getElementById("projectsTrack");
  const scrollAmount = currentProjectIndex * (projectCards[0].offsetWidth + 30);
  track.scrollLeft = scrollAmount;

  // Update dots
  document.querySelectorAll(".carousel-dot").forEach((dot, index) => {
    dot.classList.remove("active");
    if (index === currentProjectIndex) {
      dot.classList.add("active");
    }
  });
}

function goToSlide(index) {
  currentProjectIndex = index;
  updateCarousel();
}

function nextSlide() {
  const totalDots = Math.ceil(totalProjects / projectsPerView);
  currentProjectIndex = (currentProjectIndex + 1) % totalDots;
  updateCarousel();
}

function prevSlide() {
  const totalDots = Math.ceil(totalProjects / projectsPerView);
  currentProjectIndex = (currentProjectIndex - 1 + totalDots) % totalDots;
  updateCarousel();
}

// Carousel button event listeners
if (document.getElementById("nextBtn")) {
  document.getElementById("nextBtn").addEventListener("click", nextSlide);
}

if (document.getElementById("prevBtn")) {
  document.getElementById("prevBtn").addEventListener("click", prevSlide);
}

// ==================== INITIALIZATION ====================

// Initialize on page load
window.addEventListener("load", () => {
  generateParticles();
  animateWaveEmoji();
  initializeCarousel();
});

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = "smooth";

// ==================== SCROLL ANIMATIONS ====================

// Add scroll animation for sections
const sections = document.querySelectorAll("section");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
      }
    });
  },
  {
    threshold: 0.1,
  }
);

sections.forEach((section) => {
  section.style.opacity = "0.9";
  sectionObserver.observe(section);
});

// ==================== RESPONSIVE CAROUSEL ====================

// Handle window resize for carousel
window.addEventListener("resize", () => {
  if (document.getElementById("projectsTrack")) {
    updateCarousel();
  }
});

// ==================== KEYBOARD NAVIGATION ====================

// Keyboard navigation for carousel
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    nextSlide();
  } else if (e.key === "ArrowLeft") {
    prevSlide();
  }
});

// ==================== ACTIVE NAV LINK ====================

// Update active nav link on scroll
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
      link.style.color = "#ffd700";
    } else {
      link.style.color = "#ffffff";
    }
  });
});

// ==================== FORM VALIDATION ====================

// Real-time form validation
const formInputs = document.querySelectorAll(".form-input, .form-textarea");

formInputs.forEach((input) => {
  input.addEventListener("blur", function () {
    if (this.value.trim() === "") {
      this.style.borderColor = "#ff6b9d";
    } else {
      this.style.borderColor = "rgba(255, 215, 0, 0.2)";
    }
  });

  input.addEventListener("focus", function () {
    this.style.borderColor = "#ffd700";
  });
});

// ==================== PERFORMANCE OPTIMIZATION ====================

// Lazy load images
if ("IntersectionObserver" in window) {
  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    if (img.dataset.src) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
          }
        });
      });
      observer.observe(img);
    }
  });
}

// ==================== UTILITY FUNCTIONS ====================

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for performance
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// ==================== CONSOLE LOG ====================

console.log("Portfolio loaded successfully!");
console.log("All sections and features are ready.");
