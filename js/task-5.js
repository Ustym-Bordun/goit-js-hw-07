function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", () => {
  const randomBgColor = getRandomHexColor();
  console.log(randomBgColor);

  changeColorBtn.parentElement.parentElement.parentElement.style.backgroundColor =
    randomBgColor;
  changeColorBtn.previousElementSibling.firstElementChild.textContent =
    randomBgColor;
});
