// Select form elements
const form = document.querySelector("form");
const passwordInput = document.querySelector("input[type='password']");
const emailDisplay = document.querySelector(".email");

//  for the email address and password for demonstration
const correctEmail = "igbinobaqueen4@gmail.com";
const correctPassword = "password123";

//  setting the email display (this is hardcoded but can be dynamic)
emailDisplay.textContent = correctEmail;

// Function to handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting the default way

    const enteredPassword = passwordInput.value;

    // Check if the entered password matches the correct password
    if (enteredPassword === correctPassword) {
        alert("Login successful!");
        // You could redirect the user to another page here
        window.location.href = "dashboard.html"; // Example of a dashboard redirection
    } else {
        alert("Incorrect password. Please try again.");
        passwordInput.value = ""; // Clear the password field
    }
});
