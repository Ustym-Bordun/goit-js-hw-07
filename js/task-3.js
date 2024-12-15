const nameInput = document.querySelector("input#name-input");

nameInput.addEventListener("input", (event) => {
  const massage = event.currentTarget.value.trim();

  massage
    ? (nameInput.nextElementSibling.firstElementChild.textContent =
        event.currentTarget.value)
    : (nameInput.nextElementSibling.firstElementChild.textContent =
        "Anonymous");
});
