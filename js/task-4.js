const minus = document.querySelector('button[data-action="decrement"]');
const plus = document.querySelector('button[data-action="increment"]');
const val = document.querySelector("#value");

let counter = 0;

minus.addEventListener("click", (event) => {
  counter -= 1;
  minus.textContent = counter;
});

plus.addEventListener("click", (event) => {
  counter += 1;
  plus.textContent = counter;
});
