document.getElementById("login-submit").addEventListener("click", function () {
  // get user email
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  // get user password
  const passwordField = document.getElementById("user-password");
  const userPassoword = passwordField.value;
  // check email and password
  if (userEmail == "hafiz@gmail.com" && userPassoword == "hafiz") {
    window.location.href = "banking.html";
  }
});
