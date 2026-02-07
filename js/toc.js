// 무조건 목차 보이게
const box = document.querySelector(".category-aside");
if (box) box.classList.remove("hidden");

// 글이 다 그려질 때까지 기다렸다가 실행
const timer = setInterval(() => {
  const aside = document.querySelector(".category-aside aside");
  const titles = document.querySelectorAll("h2, h3, h4");

  if (!aside || titles.length === 0) return;

  clearInterval(timer);

  aside.innerHTML = "";

  titles.forEach((t, i) => {
    const id = "toc-" + i;
    t.id = id;

    const a = document.createElement("a");
    a.href = "#" + id;
    a.textContent = t.textContent;

    a.style.display = "block";
    a.style.margin = "6px 0";
    a.style.fontSize = "14px";

    if (t.tagName === "H3") a.style.paddingLeft = "16px";
    if (t.tagName === "H4") a.style.paddingLeft = "32px";

    aside.appendChild(a);
  });
}, 300);
