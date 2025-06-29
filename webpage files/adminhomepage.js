window.addEventListener('DOMContentLoaded', () => {
  // Show student name from email
  const email = localStorage.getItem('userEmail');
  if (email) {
    const name = email.split('@')[0].split('.')[0];
    const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
    document.getElementById('userName').textContent = capitalized;
  }

  // Scroll to top on refresh
  window.scrollTo(0, 0);

  // Mobile nav toggle
  const toggleBtn = document.getElementById('toggleBtn');
  const navLinks = document.getElementById('navLinks');
  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Fade-in animation on scroll
  const faders = document.querySelectorAll('.fade-in');
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
  });

  faders.forEach(fader => appearOnScroll.observe(fader));

 
  const words = ["happy?", "sad?", "anxious?", "calm?", "neutral?"];
  const element = document.getElementById("typing-effect");
  if (element) {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {
      const word = words[wordIndex];
      if (!deleting) {
        element.textContent = word.substring(0, charIndex++);
        if (charIndex > word.length) {
          deleting = true;
          setTimeout(typeEffect, 1000);
          return;
        }
      } else {
        element.textContent = word.substring(0, charIndex--);
        if (charIndex < 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      setTimeout(typeEffect, deleting ? 50 : 100);
    }

    typeEffect();
  }

  // SLIDESHOW FIXED
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);
  setInterval(nextSlide, 3000); // change slide every 3 seconds
});

  // Fade in the quote when it comes into view
window.addEventListener('scroll', () => {
    const quote = document.querySelector('.quote-text');
    const quotePos = quote.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;
  
    if (quotePos < screenPos) {
      quote.style.opacity = 1;
      quote.style.transform = 'translateY(0)';
    }
 
  });  