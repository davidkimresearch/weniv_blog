const timer = setInterval(() => {
  const content = document.getElementById("contents");
  const aside = document.querySelector(".category-aside aside");

  if (!content || !aside) return;

  const titles = content.querySelectorAll("h2, h3, h4");
  if (titles.length === 0) return;

  clearInterval(timer); // 글 찾았으니까 이제 그만 반복

  aside.innerHTML = "";

  titles.forEach((title, i) => {
    const id = "toc-" + i;
    title.id = id;

    const link = document.createElement("a");
    link.href = "#" + id;
    link.textContent = title.textContent;

    link.style.display = "block";
    link.style.margin = "6px 0";
    link.style.fontSize = "14px";

    if (title.tagName === "H3") link.style.paddingLeft = "16px";
    if (title.tagName === "H4") link.style.paddingLeft = "32px";

    aside.appendChild(link);
  });
}, 300);
