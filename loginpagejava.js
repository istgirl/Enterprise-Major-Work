document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim().toLowerCase();
    const errorMsg = document.getElementById("error-message");

    errorMsg.textContent = ""; // Clear any previous error messages

    const educationDomain = "@education.nsw.gov.au";
    const adminDomain = "@det.edu.nsw.au";

    // Check if the email domain is valid
    if (email.endsWith(educationDomain)) {
        localStorage.setItem('userEmail', email); // Store the email in localStorage
        window.location.href = "educationhomepage.html"; // Redirect to homepage
    } else if (email.endsWith(adminDomain)) {
        localStorage.setItem('userEmail', email); // Store the email in localStorage
        window.location.href = "adminhomepage.html"; // Redirect to admin homepage (example)
    } else {
        errorMsg.textContent = "Invalid email domain. Please use a valid NSW Education email."; // Show error if invalid domain
    }
});
