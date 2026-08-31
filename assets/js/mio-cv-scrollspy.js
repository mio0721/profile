(() => {
  const initialize = () => {
    const toc = document.querySelector("#toc-sidebar");
    const sections = Array.from(document.querySelectorAll(".mio-cv-section[id]"));
    if (!toc || !sections.length) return;

    if (window.tocbot && typeof window.tocbot.destroy === "function") {
      window.tocbot.destroy();
    }

    const list = document.createElement("ul");
    list.className = "toc-list";

    const entries = sections.map((section) => {
      const item = document.createElement("li");
      item.className = "toc-list-item";

      const link = document.createElement("a");
      link.className = "toc-link";
      link.href = `#${section.id}`;
      link.textContent = section.dataset.tocText || section.querySelector("h3")?.textContent.trim() || section.id;

      item.appendChild(link);
      list.appendChild(item);
      return { section, item, link };
    });

    toc.replaceChildren(list);

    let scheduled = false;
    const update = () => {
      scheduled = false;
      const activationY = window.scrollY + 110;
      let active = entries[0];

      for (const entry of entries) {
        if (entry.section.getBoundingClientRect().top + window.scrollY <= activationY) active = entry;
        else break;
      }

      for (const entry of entries) {
        const selected = entry === active;
        entry.link.classList.toggle("is-active-link", selected);
        entry.item.classList.toggle("is-active-li", selected);
      }
    };

    const scheduleUpdate = () => {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    document.addEventListener("scroll", scheduleUpdate, { passive: true, capture: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    update();
  };

  window.addEventListener("load", initialize, { once: true });
})();
