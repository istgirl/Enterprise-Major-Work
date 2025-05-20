// When the DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    // Get the email and extract name
    const email = localStorage.getItem('userEmail');
    if (email) {
      const name = email.split('@')[0].split('.')[0];
      const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
      document.getElementById('userName').textContent = capitalized;
    }

    window.addEventListener('DOMContentLoaded', () => {
        const banner = document.getElementById('popup-banner');
        
        if (!sessionStorage.getItem('bannerShown')) {
          banner.style.display = 'block'; // Show the banner
          sessionStorage.setItem('bannerShown', 'true'); // Mark as shown
        }
      });
      
  
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

  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  function changeSlide(n) {
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);


//dark mode light mode feature
  const toggleButton = document.getElementById('themeToggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const icon = toggleButton.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

