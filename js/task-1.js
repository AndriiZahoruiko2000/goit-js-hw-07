const categories = document.querySelectorAll(".list-item");
console.log(`NUmber of categories: ${categories.length}`);

categories.forEach((el, index) => {
  const title = el.querySelector("h2");
  const text = title.textContent;
  console.log(text);

  const items = el.querySelectorAll(".title-list-item");
  console.log(items.length);
});
