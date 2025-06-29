// dashboard.js
document.addEventListener('DOMContentLoaded', function() {
  const infoButtons = document.querySelectorAll('.info-btn');
  
  // Initialize all descriptions as visible and buttons as "×"
  document.querySelectorAll('.graph-desc').forEach(desc => {
    desc.style.display = 'block'; // Changed from 'none' to 'block'
  });

  infoButtons.forEach(button => {
    const icon = button.querySelector('i');
    icon.classList.replace('fa-info-circle', 'fa-times'); // Start with "×" icon
    
    button.addEventListener('click', function() {
      const description = this.closest('.graph-header').nextElementSibling;
      const isVisible = description.style.display !== 'none';
      
      // Toggle display (opposite of current behavior)
      description.style.display = isVisible ? 'none' : 'block';
      
      // Toggle icon
      if (isVisible) {
        icon.classList.replace('fa-times', 'fa-info-circle');
      } else {
        icon.classList.replace('fa-info-circle', 'fa-times');
      }
    });
  });
});

  document.querySelector('iframe').onload = function() {
    this.contentWindow.postMessage({
      tableauCommand: 'disableAutomaticMobileScaling'
    }, '*');
  };
