const box = document.querySelector(".category-aside");
const aside = document.querySelector(".category-aside aside");
if (!box || !aside) return;

box.classList.remove("hidden");

const titles = document.querySelectorAll("h2, h3, h4");
if (titles.length === 0) return;

aside.innerHTML = "목차 테스트";

titles.forEach((t) => {
  const div = document.createElement("div");
  div.textContent = t.textContent;
  aside.appendChild(div);
});
