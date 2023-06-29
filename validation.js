// Function to validate the form
function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var message = document.forms["myForm"]["message"].value;

  var nameRegex = /^[a-zA-Z\s]+$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var errorMessages = "";

  if (name.trim() === "") {
    errorMessages += "Please enter your name\n";
  }

  if (!nameRegex.test(name)) {
    errorMessages += "Please enter a valid name (only letters and spaces are allowed)\n";
  }

  if (email.trim() === "") {
    errorMessages += "Please enter your email address\n";
  }

  if (!emailRegex.test(email)) {
    errorMessages += "Please enter a valid email address\n";
  }

  if (message.trim() === "") {
    errorMessages += "Please enter a message\n";
  }

  if (errorMessages !== "") {
    document.getElementById("errorMessages").textContent = errorMessages;
    return false;
  }

  // Form is valid, continue with submission
  return true;
}
