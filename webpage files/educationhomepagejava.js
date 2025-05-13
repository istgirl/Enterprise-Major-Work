// When the DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    // Get the email and extract name
    const email = localStorage.getItem('userEmail');
    if (email) {
      const name = email.split('@')[0].split('.')[0];
      const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
      document.getElementById('userName').textContent = capitalized;
    }
  
    // Banner entry animation
    const banner = document.getElementById('banner');
    banner.classList.add('visible');
  
    setTimeout(() => {
      banner.classList.remove('visible');
    }, 2000);
  });
  
  // Scroll to top on refresh
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  
  // Scroll-triggered fade-in animations
  const faders = document.querySelectorAll('.fade-in');
  const headings = document.querySelectorAll('.dynamic-heading');
  
  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  

  window.addEventListener('scroll', () => {
    headings.forEach(h => {
      const scrollY = window.scrollY;
      h.style.backgroundPosition = `0 ${scrollY / 2}px`;
    });
  });
  

const toggleButton = document.getElementById('themeToggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const icon = toggleButton.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

const toggleBtn = document.getElementById('toggleBtn');
const navLinks = document.getElementById('navLinks');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

  