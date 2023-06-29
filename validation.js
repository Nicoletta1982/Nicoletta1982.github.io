// Function to validate the form
function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var message = document.forms["myForm"]["message"].value;

  var nameRegex = /^[a-zA-Z\s]+$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nameRegex.test(name)) {
    alert("Please enter a valid name");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  if (message === "") {
    alert("Please enter a message");
    return false;
  }

  // Form is valid, continue with submission
  return true;
}