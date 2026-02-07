setTimeout(() => {
  const headings = document.querySelectorAll("h2, h3, h4");
  if (headings.length === 0) return;

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
}, 500);
