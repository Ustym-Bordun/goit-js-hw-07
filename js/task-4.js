const logInForm = document.querySelector(".login-form");

logInForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (
    !logInForm.elements.email.value.trim() ||
    !logInForm.elements.password.value.trim()
  ) {
    alert("All form fields must be filled in");
  }

  const formData = {
    [logInForm.elements.email.name]: logInForm.elements.email.value.trim(),
    [logInForm.elements.password.name]:
      logInForm.elements.password.value.trim(),
  };

  console.log(formData);

  logInForm.reset();
});
