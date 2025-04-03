document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        let errorMessage = document.getElementById("errorMessage");
        
        if (name === "" || email === "" || password === "" || confirmPassword === "") {
            errorMessage.innerText = "All fields are required.";
            return;
        }
        
        if (password.length < 6) {
            errorMessage.innerText = "Password must be at least 6 characters long.";
            return;
        }
        
        if (password !== confirmPassword) {
            errorMessage.innerText = "Passwords do not match.";
            return;
        }
        
        alert("Registration Successful!");
        this.reset();
        errorMessage.innerText = "";
    });
});
