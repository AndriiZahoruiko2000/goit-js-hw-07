const categroies = document.querySelectorAll(".menu-item");
console.log(`Number of categories ${categroies.length}`);

categroies.forEach((element) => {
  const title = element.querySelector("h2");
  console.log(title.textContent);
  const elements = element.querySelectorAll("li");
  console.log(elements.length);
});
