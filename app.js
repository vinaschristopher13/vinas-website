function validation() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
}

  if (name === "" || email === "" || message === "") {
    alert("All fields are required!");
    return false; // stop form submission
  }

  // Optional: add regex for email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true; // allow form submission
