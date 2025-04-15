document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();  
  
    const email = document.getElementById("email").value.trim().toLowerCase();
    const errorMsg = document.getElementById("error-message");

    errorMsg.textContent = "";  

    console.log("Entered email:", email);
    console.log("Email length:", email.length);

    const educationDomain = "@education.nsw.gov.au";
    const adminDomain = "@det.edu.nsw.au";

    console.log("Checking if email ends with:", educationDomain);
    console.log("Ends with Education:", email.endsWith(educationDomain)); 

    if (email.endsWith(educationDomain)) {
        console.log("Valid Education email detected.");  
        document.getElementById("educationLink").click();  
    } else if (email.endsWith(adminDomain)) {
        console.log("Valid Admin email detected.");  
        document.getElementById("adminLink").click(); 
    } else {
        errorMsg.textContent = "Invalid email domain. Please use a valid NSW Education email.";
    }
});

  