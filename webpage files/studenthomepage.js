window.addEventListener('DOMContentLoaded', () => {
    const email = localStorage.getItem('userEmail');
    if (email) {
      const name = email.split('@')[0].split('.')[0];
      const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
      document.getElementById('userName').textContent = capitalized;
    }
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

let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.style.display = "none");
  
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 3000); 
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides();
});


//dark mode light mode feature
  const toggleButton = document.getElementById('themeToggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const icon = toggleButton.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

 window.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('reminder-popup');
    
    // Show the popup
    setTimeout(() => {
      popup.classList.add('active');

      // Hide it again after 5 seconds
      setTimeout(() => {
        popup.classList.remove('active');
      }, 5000);
    }, 1000); // Delay before showing popup (1 sec after page load)
  });

