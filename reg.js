function register() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value; 
  var  register = document.getElementById("register").value;
  if (username === "" || email === "" || password === "" || confirmPassword === "") {
    alert("Please fill in all fields");
  } else if (password !== confirmPassword) {
    alert("Passwords do not match");
  } else {
    alert("Registration successful");
  }
}