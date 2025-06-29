document.addEventListener('DOMContentLoaded', function() {
  const infoButtons = document.querySelectorAll('.info-btn');
  
  document.querySelectorAll('.graph-desc').forEach(desc => {
    desc.style.display = 'block'; 
  });

  infoButtons.forEach(button => {
    const icon = button.querySelector('i');
    icon.classList.replace('fa-info-circle', 'fa-times');
    
    button.addEventListener('click', function() {
      const description = this.closest('.graph-header').nextElementSibling;
      const isVisible = description.style.display !== 'none';
      
  
      description.style.display = isVisible ? 'none' : 'block';
      

      if (isVisible) {
        icon.classList.replace('fa-times', 'fa-info-circle');
      } else {
        icon.classList.replace('fa-info-circle', 'fa-times');
      }
    });
  });
});