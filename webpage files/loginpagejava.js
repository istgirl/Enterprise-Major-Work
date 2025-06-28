// Utility: show one form, hide others
function toggleForm(form) {
  document.getElementById("login-section").style.display = form === "login" ? "block" : "none";
  document.getElementById("signup-section").style.display = form === "signup" ? "block" : "none";
  document.getElementById("forgot-section").style.display = form === "forgot" ? "block" : "none";

  // Reset forgot form states when toggling
  document.getElementById("forgotForm").style.display = "block";
  document.getElementById("resetForm").style.display = "none";

  clearErrors();
}

function clearErrors() {
  document.getElementById("error-message").textContent = "";
  document.getElementById("signup-error-message").textContent = "";
  document.getElementById("forgot-error-message").textContent = "";
  document.getElementById("reset-error-message").textContent = "";
}


function getUsers() {
  return JSON.parse(localStorage.getItem("users") || "{}");
}


function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// Check valid email domain
function validEmailDomain(email) {
  return (
    email.endsWith("@education.nsw.gov.au") ||
    email.endsWith("@det.nsw.edu.au")
  );
}

// LOGIN
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-message");

  clearErrors();

  if (!validEmailDomain(email)) {
    errorMsg.textContent = "Invalid email domain. Please use a valid NSW Education email.";
    return;
  }

  const users = getUsers();
  if (!users[email]) {
    errorMsg.textContent = "User not found. Please sign up first.";
    return;
  }

  if (users[email] !== password) {
    errorMsg.textContent = "Incorrect password.";
    return;
  }


  localStorage.setItem("userEmail", email);
  if (email.endsWith("@education.nsw.gov.au")) {
    window.location.href = "studenthomepage.html";
  } else {
    window.location.href = "adminhomepage.html";
  }
});

// SIGNUP
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("signupEmail").value.trim().toLowerCase();
  const password = document.getElementById("signupPassword").value;
  const errorMsg = document.getElementById("signup-error-message");

  clearErrors();

  if (!validEmailDomain(email)) {
    errorMsg.textContent = "Invalid email domain. Please use a valid NSW Education email.";
    return;
  }

  if (password.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters.";
    return;
  }

  const users = getUsers();
  if (users[email]) {
    errorMsg.textContent = "User already exists. Please login.";
    return;
  }

  // Save user
  users[email] = password;
  saveUsers(users);

  alert("Sign up successful! Please login.");
  toggleForm("login");
});

// FORGOT PASSWORD - Step 1: Enter email
document.getElementById("forgotForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("forgotEmail").value.trim().toLowerCase();
  const errorMsg = document.getElementById("forgot-error-message");

  clearErrors();

  if (!validEmailDomain(email)) {
    errorMsg.textContent = "Invalid email domain. Please use a valid NSW Education email.";
    return;
  }

  const users = getUsers();
  if (!users[email]) {
    errorMsg.textContent = "User not found.";
    return;
  }

  // Show reset password form
  document.getElementById("forgotForm").style.display = "none";
  document.getElementById("resetForm").style.display = "block";

  // Save email temporarily for reset
  sessionStorage.setItem("resetEmail", email);
});

// FORGOT PASSWORD - Step 2: Reset password
document.getElementById("resetForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const newPassword = document.getElementById("newPassword").value;
  const errorMsg = document.getElementById("reset-error-message");

  clearErrors();

  if (newPassword.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters.";
    return;
  }

  const email = sessionStorage.getItem("resetEmail");
  if (!email) {
    errorMsg.textContent = "Session expired. Please try again.";
    return;
  }

  const users = getUsers();
  users[email] = newPassword;
  saveUsers(users);

  alert("Password reset successful! Please login.");
  sessionStorage.removeItem("resetEmail");
  toggleForm("login");
});
