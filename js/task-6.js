function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector("#controls");

const input = controlsEl.children[0];
const createBtn = controlsEl.children[1];
const destroyBtn = controlsEl.children[2];
// const input = document.querySelector("#controls input");
// const createBtn = document.querySelector("#controls button[data-create]");
// const destroyBtn = document.querySelector("#controls button[data-destroy]");

// console.log(input);
// console.log(createBtn);
// console.log(destroyBtn);

const boxesContainer =
  controlsEl.parentElement.nextElementSibling.firstElementChild;

// console.log(boxesContainer);
// console.dir(boxesContainer);

// console.log(`Start Math.round(input.value):`, Math.round(input.value));

const createBoxes = (amount) => {
  if (input.value >= 1 && input.value <= 100) {
    // console.log(`Create ${amount} boxes`);

    let boxesMarkup = "";
    let boxDimensions = 30;
    // console.log(`First box dimensions: ${boxDimensions} in "px"`);

    for (let i = amount; i > 0; i--) {
      boxesMarkup += `<div 
  style='width: ${boxDimensions}px; height: ${boxDimensions}px; background-color: ${getRandomHexColor()}'>
</div>
`;

      // console.log(boxesMarkup);

      boxDimensions += 10;
      // console.log(`Next box dimensions will be: ${boxDimensions} in "px"`);
    }

    boxesContainer.innerHTML = boxesMarkup;
    // boxesContainer.insertAdjacentHTML("beforeend", boxesMarkup);

    input.value = "";
  }
};

const destroyBoxes = () => {
  boxesContainer.innerHTML = "";
};

createBtn.addEventListener("click", (event) => {
  createBoxes(Math.round(input.value));
});

destroyBtn.addEventListener("click", (event) => {
  destroyBoxes();
});
