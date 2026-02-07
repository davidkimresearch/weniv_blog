const aside = document.querySelector(".category-aside");
const target = document.getElementById("contents");

if (!aside || !target) {
  console.log("aside or contents 없음");
} else {
  const observer = new MutationObserver(() => {
    const headings = target.querySelectorAll("h2, h3, h4");
    if (headings.length === 0) return;

    observer.disconnect();

    const toc = document.createElement("div");
    toc.innerHTML = "<div style='font-weight:600;margin-bottom:8px'>목차</div>";

    const ul = document.createElement("ul");
    ul.style.fontSize = "14px";
    ul.style.lineHeight = "1.6";

    headings.forEach((h, i) => {
      const id = "toc-" + i;
      h.id = id;

      const li = document.createElement("li");
      li.style.marginLeft =
        h.tagName === "H3" ? "10px" :
        h.tagName === "H4" ? "20px" : "0px";

      const a = document.createElement("a");
      a.href = "#" + id;
      a.innerText = h.innerText;
      a.style.textDecoration = "none";

      li.appendChild(a);
      ul.appendChild(li);
    });

    toc.appendChild(ul);
    aside.appendChild(toc);
  });

  observer.observe(target, {
    childList: true,
    subtree: true,
  });
}

