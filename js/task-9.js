function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const input = document.querySelector(".inp");
const listBox = document.querySelector("#boxes");

create.addEventListener("click", () => {
  const amount = Number(input.value);
  for (let i = 0; i < amount; i += 1) {
    const cube = document.createElement("div");
    const size = 30 + i * 10;
    cube.style.width = `${size}px`;
    cube.style.height = `${size}px`;
    cube.style.backgroundColor = getRandomHexColor();
    listBox.append(cube);
  }
});

destroy.addEventListener("click", () => {
  listBox.innerHTML = "";
});
