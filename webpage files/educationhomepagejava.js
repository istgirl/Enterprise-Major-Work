window.addEventListener('DOMContentLoaded', () => {
    const email = localStorage.getItem('userEmail');
    if (email) {
        const name = email.split('@')[0].split('.')[0]; 
        const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
        document.getElementById('userName').textContent = capitalized;
    }


    const banner = document.getElementById('banner');
    banner.classList.add('visible'); 

    setTimeout(() => {
        banner.classList.remove('visible'); 
    }, 2000); 
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
