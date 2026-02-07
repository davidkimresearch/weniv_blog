const target = document.getElementById("contents");

if (!target) {
  console.log("contents 없음");
} else {
  const observer = new MutationObserver(() => {
    const headings = target.querySelectorAll("h2, h3, h4");
    if (headings.length === 0) return;

    observer.disconnect();

    const toc = document.createElement("div");
    toc.id = "toc";
    toc.innerHTML = "<strong>목차</strong>";

    const ul = document.createElement("ul");

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

      li.appendChild(a);
      ul.appendChild(li);
    });

    toc.appendChild(ul);
    document.body.appendChild(toc);
  });

  observer.observe(target, {
    childList: true,
    subtree: true,
  });
}
