document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim().toLowerCase();
    const errorMsg = document.getElementById("error-message");

    errorMsg.textContent = ""; 
    const educationDomain = "@education.nsw.gov.au";
    const adminDomain = "@det.edu.nsw.au";


    if (email.endsWith(educationDomain)) {
        localStorage.setItem('userEmail', email); 
        window.location.href = "educationhomepage.html";
    } else if (email.endsWith(adminDomain)) {
        localStorage.setItem('userEmail', email); 
        window.location.href = "adminhomepage.html"; 
    } else {
        errorMsg.textContent = "Invalid email domain. Please use a valid NSW Education email."; 
    }
});
