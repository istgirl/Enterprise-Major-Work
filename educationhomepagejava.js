// Show user's first name
window.addEventListener('DOMContentLoaded', () => {
    const email = localStorage.getItem('userEmail');
    if (email) {
      const name = email.split('@')[0].split('.')[0]; // "nameerah"
      const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
      document.getElementById('userName').textContent = capitalized;
    }
  });

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  
  window.addEventListener("scroll", () => {
    const banner = document.getElementById("banner");
    if (window.scrollY > 100) {
      banner.classList.add("hidden");
    } else {
      banner.classList.remove("hidden");
    }
  });
  