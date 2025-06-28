// gamespage.js
document.addEventListener('DOMContentLoaded', function() {
  const infoButtons = document.querySelectorAll('.info-btn');
  
  // Hide all descriptions by default
  document.querySelectorAll('.graph-desc').forEach(desc => {
    desc.style.display = 'none';
  });

  infoButtons.forEach(button => {
    button.addEventListener('click', function() {
      const description = this.closest('.graph-header').nextElementSibling;
      const isHidden = description.style.display === 'none';
      
      // Toggle display
      description.style.display = isHidden ? 'block' : 'none';
      
      // Toggle icon
      const icon = this.querySelector('i');
      if (isHidden) {
        icon.classList.replace('fa-info-circle', 'fa-times');
      } else {
        icon.classList.replace('fa-times', 'fa-info-circle');
      }
    });
  });
});