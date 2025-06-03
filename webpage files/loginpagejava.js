// Toggle between login and signup views
function toggleForm(mode) {
  document.getElementById("login-section").style.display = mode === "login" ? "block" : "none";
  document.getElementById("signup-section").style.display = mode === "signup" ? "block" : "none";
}

// SIGN UP FUNCTION
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("signupEmail").value.trim().toLowerCase();
    const password = document.getElementById("signupPassword").value.trim();
    const errorMsg = document.getElementById("signup-error-message");

    if (!(email.endsWith("@education.nsw.gov.au") || email.endsWith("@det.edu.nsw.au"))) {
        errorMsg.textContent = "Please use a valid NSW Education email domain.";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users") || "{}");

    if (users[email]) {
        errorMsg.textContent = "User already exists.";
    } else {
        users[email] = password;
        localStorage.setItem("users", JSON.stringify(users));
        alert("Signup successful! Please login.");
        toggleForm("login");
    }
});


// LOGIN FUNCTION
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("error-message");

    const users = JSON.parse(localStorage.getItem("users") || "{}");

    if (!users[email]) {
        errorMsg.textContent = "Account not found. Please sign up first.";
        return;
    }

    if (users[email] !== password) {
        errorMsg.textContent = "Incorrect password.";
        return;
    }

    // Success
    alert("Login successful!");
    localStorage.setItem("userEmail", email);

    if (email.endsWith("@education.nsw.gov.au")) {
        window.location.href = "practice homepage.html";
    } else if (email.endsWith("@det.edu.nsw.au")) {
        window.location.href = "adminhomepage.html";
    } else {
        errorMsg.textContent = "Invalid domain.";
    }
});
