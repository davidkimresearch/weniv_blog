const aside = document.querySelector(".category-aside aside");

const titles = document.querySelectorAll("h2, h3, h4");

aside.innerHTML = "목차 테스트";

titles.forEach((t) => {
  const div = document.createElement("div");
  div.textContent = t.textContent;
  aside.appendChild(div);
});