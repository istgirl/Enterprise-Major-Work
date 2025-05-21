// Typing animation for emotion words
document.addEventListener("DOMContentLoaded", () => {
  const words = ["happy?", "sad?", "anxious?", "calm?", "neutral?"];
  const element = document.getElementById("typing-effect");
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
});


// Percentage counter animation on scroll
document.addEventListener("DOMContentLoaded", () => {
    const statSection = document.querySelector(".mood-stats");
    let started = false;
  
    function revealProgress() {
      const sectionTop = statSection.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 120;
  
      if (!started && sectionTop < triggerPoint) {
        started = true;
  
        statSection.querySelectorAll(".stat-box").forEach(box => {
          const textEl = box.querySelector(".percentage");
          const progressEl = box.querySelector(".progress");
          const target = parseInt(textEl.textContent);
  
          // Animate percentage text
          let count = 0;
          const step = Math.ceil(target / 60);
          const numberTimer = setInterval(() => {
            count += step;
            if (count >= target) {
              count = target;
              clearInterval(numberTimer);
            }
            textEl.textContent = `${count}%`;
          }, 80);
  
          // Animate the circle
          requestAnimationFrame(() => {
            progressEl.style.strokeDashoffset = 100 - target;
          });
        });
  
        window.removeEventListener("scroll", revealProgress);
      }
    }
  
    window.addEventListener("scroll", revealProgress);
    revealProgress(); // in case it's already in view
  });
  
  
  
