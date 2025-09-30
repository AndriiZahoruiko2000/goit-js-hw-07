const body = document.querySelector("body");
const input = document.querySelector('input[data-length="6"]');
const requiredLength = Number(input.dataset.length);
console.log(requiredLength);

input.addEventListener("input", (event) => {
  if (event.currentTarget.value.length > requiredLength) {
    input.style.backgroundColor = "red";
  } else {
    input.style.backgroundColor = "green";
  }
});
