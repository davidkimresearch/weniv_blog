const box = document.querySelector(".category-aside");
const aside = document.querySelector(".category-aside aside");
const contents = document.querySelector("#contents");

if (!box || !aside || !contents) return;

box.classList.remove("hidden");
aside.innerHTML = "";

const titles = contents.querySelectorAll("h2, h3, h4");

titles.forEach((t, i) => {
  if (!t.id) t.id = "toc-" + i;

  const item = document.createElement("div");
  item.textContent = t.textContent;
  item.style.cursor = "pointer";
  item.style.padding = "6px 10px";

  item.onclick = () => {
    contents.scrollTo({
      top: t.offsetTop - 20,
      behavior: "smooth",
    });
  };

  aside.appendChild(item);
});
