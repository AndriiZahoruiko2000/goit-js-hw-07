const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((el, index) => {
  const title = el.querySelector("h2");
  const text = title.textContent;
  console.log(text);

  const items = el.querySelectorAll("li");
  console.log(items.length);
});
