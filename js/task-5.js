function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector("button");
const spanColor = document.querySelector(".color");

console.log(spanColor.textContent);

btn.addEventListener("click", (event) => {
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;
  spanColor.textContent = color;
});
