function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const output = document.querySelector(".change-color");

btn.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  output.textContent = color;
});
