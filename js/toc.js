const box = document.querySelector(".category-aside");
if (box) box.classList.remove("hidden");

const timer = setInterval(() => {
  const aside = document.querySelector(".category-aside aside");
  const titles = document.querySelectorAll("h2, h3, h4");

  if (!aside || titles.length === 0) return;

  clearInterval(timer);
  aside.innerHTML = "";

  titles.forEach((t) => {
    const item = document.createElement("div");
    item.textContent = t.textContent;

    item.style.cursor = "pointer";
    item.style.margin = "6px 0";
    item.style.fontSize = "14px";

    if (t.tagName === "H3") item.style.paddingLeft = "16px";
    if (t.tagName === "H4") item.style.paddingLeft = "32px";

    // 🔥 핵심: 클릭하면 강제로 그 제목으로 이동
    item.onclick = () => {
      t.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    aside.appendChild(item);
  });
}, 300);
