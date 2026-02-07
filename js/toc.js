window.addEventListener("load", () => {
  const content = document.getElementById("contents");
  const aside = document.querySelector(".category-aside aside");

  if (!content || !aside) return;

  // 글 안에 있는 제목들 가져오기
  const titles = content.querySelectorAll("h2, h3, h4");
  if (titles.length === 0) return;

  aside.innerHTML = "";

  titles.forEach((title, i) => {
    const id = "toc-title-" + i;
    title.id = id;

    const link = document.createElement("a");
    link.href = "#" + id;
    link.textContent = title.textContent;

    // 들여쓰기만 다르게
    if (title.tagName === "H2") link.style.paddingLeft = "12px";
    if (title.tagName === "H3") link.style.paddingLeft = "24px";
    if (title.tagName === "H4") link.style.paddingLeft = "36px";

    link.style.display = "block";
    link.style.fontSize = "14px";
    link.style.margin = "6px 0";

    aside.appendChild(link);
  });
});
