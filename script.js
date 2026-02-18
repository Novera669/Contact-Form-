const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");
const button = form.querySelector("button");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;
  successMsg.innerText = "";

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  clearStates();

  if (name.value.trim() === "") {
    setError(name, "Name is required");
    isValid = false;
  } else {
    setSuccess(name);
  }

  if (email.value.trim() === "") {
    setError(email, "Email is required");
    isValid = false;
  } else if (!validateEmail(email.value)) {
    setError(email, "Enter a valid email");
    isValid = false;
  } else {
    setSuccess(email);
  }

  if (subject.value.trim() === "") {
    setError(subject, "Subject is required");
    isValid = false;
  } else {
    setSuccess(subject);
  }

  if (message.value.trim() === "") {
    setError(message, "Message is required");
    isValid = false;
  } else {
    setSuccess(message);
  }

  if (isValid) {
    button.classList.add("loading");
    button.innerText = "Sending...";

    setTimeout(() => {
      successMsg.innerText = "Your message has been sent successfully!";
      form.reset();
      button.classList.remove("loading");
      button.innerText = "Send Message";
      clearBorders();
    }, 1200);
  }
});

function setError(input, message) {
  input.classList.add("error-border");
  input.nextElementSibling.innerText = message;
}

function setSuccess(input) {
  input.classList.add("success-border");
}

function clearStates() {
  document.querySelectorAll(".error").forEach(el => el.innerText = "");
  clearBorders();
}

function clearBorders() {
  document.querySelectorAll("input, textarea").forEach(el => {
    el.classList.remove("error-border", "success-border");
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
