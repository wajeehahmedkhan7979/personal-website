// Improved Mobile menu toggle with outside click and resize handling
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
function closeMenu() {
  navLinks.classList.remove('open');
  menuToggle.classList.remove('open');
  menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
}
function openMenu() {
  navLinks.classList.add('open');
  menuToggle.classList.add('open');
  menuToggle.innerHTML = '<i class="fas fa-times"></i>';
}
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (navLinks.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });
  // Close menu on link click (mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && e.target !== menuToggle) {
      closeMenu();
    }
  });
  // Responsive: close menu on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      closeMenu();
      navLinks.style.display = '';
    }
  });
}
// Navbar active link highlight
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");
  let current = "";
  const scrollY = window.scrollY;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Typewriter effect for hero section
const typewriterPhrases = [
  "Full Stack JavaScript Developer",
  "MERN Stack Specialist",
  "Cloud & SaaS Platform Builder",
  "UI/UX Enthusiast",
  "Delivering Real-World Business Value"
];
let twIndex = 0, charIndex = 0, isDeleting = false;
const typewriter = document.getElementById("typewriter");
function type() {
  const phrase = typewriterPhrases[twIndex];
  if (isDeleting) {
    typewriter.textContent = phrase.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      twIndex = (twIndex + 1) % typewriterPhrases.length;
      setTimeout(type, 600);
    } else {
      setTimeout(type, 40);
    }
  } else {
    typewriter.textContent = phrase.substring(0, charIndex++);
    if (charIndex > phrase.length) {
      isDeleting = true;
      setTimeout(type, 1200);
    } else {
      setTimeout(type, 80);
    }
  }
}
if (typewriter) type();

// Reveal animation for project cards
function revealProjects() {
  const reveals = document.querySelectorAll('.project-card');
  const windowHeight = window.innerHeight;
  reveals.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < windowHeight - 60) {
      card.classList.add('reveal');
    }
  });
}
window.addEventListener('scroll', revealProjects);
window.addEventListener('DOMContentLoaded', revealProjects);

// Scroll to top button
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Enhanced Contact Form Submission
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  formMessage.textContent = "Sending...";
  setTimeout(() => {
    formMessage.textContent = "Thanks for reaching out! I'll get back to you soon.";
    contactForm.reset();
    setTimeout(() => { formMessage.textContent = ""; }, 4000);
  }, 1200);
});
