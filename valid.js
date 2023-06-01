
var emailInput = "test@example.com";
var passwordInput = "password123";

if (validateEmail(emailInput) && validatePassword(passwordInput)) {
  console.log("Email and password are valid.");
} else {
  console.log("Email or password is invalid.");
}