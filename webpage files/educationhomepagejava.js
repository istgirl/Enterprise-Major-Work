window.addEventListener('DOMContentLoaded', () => {
    const email = localStorage.getItem('userEmail');
    if (email) {
        const name = email.split('@')[0].split('.')[0]; 
        const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
        document.getElementById('userName').textContent = capitalized;
    }

    // Show the banner when the page loads
    const banner = document.getElementById('banner');
    banner.classList.add('visible'); // Make the banner visible

    // Hide the banner after 3 seconds
    setTimeout(() => {
        banner.classList.remove('visible'); // Hide the banner after 3 seconds
    }, 3000); // 3000ms = 3 seconds
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
