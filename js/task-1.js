const categories = document.querySelectorAll(".list-item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((element, index) => {
  const title = element.querySelector("h2");
  const text = title.textContent;
  console.log(`Category: ${text}`);
  const item = element.querySelectorAll("li");
  console.log(`Elements ${item.length}`);
});
