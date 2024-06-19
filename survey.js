document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("rate").addEventListener("input", clearRatingError);
  document
    .getElementById("feedback")
    .addEventListener("input", clearFeedbackError);
  document.getElementById("email").addEventListener("input", clearEmailError);

  document.getElementById("age").addEventListener("input", clearAgeError);
  const rating = document.getElementById("rating");

  rating.addEventListener("input", () => clearError("ratingError"));
});

function clearError(errorId) {
  document.getElementById(errorId).textContent = "";
}

function clearRatingError() {
  const rate = document.getElementById("rate").value;
  const ratingError = document.getElementById("ratingError");
  if (rate >= 1 && rate <= 5) {
    clearError("ratingError");
  }
}

function clearFeedbackError() {
  const feedback = document.getElementById("feedback").value;
  const feedbackError = document.getElementById("feedbackError");
  const feedbackPattern = /^[a-zA-Z0-9\s]+$/;
  if (feedbackPattern.test(feedback)) {
    clearError("feedbackError");
  }
}

function clearEmailError() {
  const email = document.getElementById("email").value;
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(email)) {
    clearError("emailError");
  }
}

function clearAgeError() {
  const age = document.getElementById("age").value;
  if (age >= 18 && age <= 100) {
    clearError("ageError");
  }
}

function validateForm() {
  let valid = true;

  const rate = document.getElementById("rate").value;
  const feedback = document.getElementById("feedback").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("surveyDate").value;
  const age = document.getElementById("age").value;

  const ratingError = document.getElementById("ratingError");
  const feedbackError = document.getElementById("feedbackError");
  const emailError = document.getElementById("emailError");
  const dateError = document.getElementById("surveyDateError");
  const ageError = document.getElementById("ageError");

  ratingError.textContent = "";
  feedbackError.textContent = "";
  emailError.textContent = "";
  ageError.textContent = "";

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Invalid email address.";
    valid = false;
  }

  const feedbackPattern = /^[a-zA-Z0-9\s]+$/;
  if (!feedbackPattern.test(feedback)) {
    feedbackError.textContent =
      "Feedback can only contain letters, numbers, and spaces.";
    valid = false;
  }

  if (rate < 1 || rate > 5) {
    ratingError.textContent = "Rating is required and must be between 1 and 5.";
    valid = false;
  }

  const datePattern =
    /^(?:(?:19|20)\d{2})-(?:(?:(?:0[13578]|1[02])-(?:0[1-9]|[12][0-9]|3[01]))|(?:(?:0[469]|11)-(?:0[1-9]|[12][0-9]|30))|(?:02-(?:0[1-9]|1[0-9]|2[0-8]))|(?:02-29))$/;
  if (!datePattern.test(date)) {
    dateError.textContent =
      "Date is required and must be in the format YYYY-MM-DD.";
    valid = false;
  }

  if (!age) {
    ageError.textContent = "Age is required";
  } else {
    if (age < 18 || age > 100) {
      ageError.textContent = `${age} is not valid.\ Age must be between 18 and 100.`;
      valid = false;
    }
  }

  return valid;
}
