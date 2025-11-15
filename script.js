if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

document.addEventListener("DOMContentLoaded", () => {
  const listEl = document.getElementById("glossaryList");
  const searchInput = document.getElementById("searchInput");
  const resultsCountEl = document.getElementById("resultsCount");
  const filterChips = document.querySelectorAll(".filter-chip");

  if (!Array.isArray(glossary)) {
    console.error("glossary is not defined or not an array");
    return;
  }

  let currentCategory = "all";
  let currentSearch = "";
  let filteredItems = glossary.slice();

  function normalize(text) {
    return text.toLowerCase();
  }

  function getCategoryColor(category) {
    switch (category) {
      case "Web":
        return "linear-gradient(135deg, #22c55e, #14b8a6)";
      case "Hardware":
        return "linear-gradient(135deg, #f97316, #facc15)";
      case "UI":
        return "linear-gradient(135deg, #38bdf8, #6366f1)";
      case "Word processing":
        return "linear-gradient(135deg, #ec4899, #f97316)";
      case "Databases":
        return "linear-gradient(135deg, #22c55e, #4ade80)";
      case "Graphics":
        return "linear-gradient(135deg, #a855f7, #6366f1)";
      case "Security":
        return "linear-gradient(135deg, #ef4444, #f97316)";
      case "Programming":
        return "linear-gradient(135deg, #0ea5e9, #22c55e)";
      case "Tools":
        return "linear-gradient(135deg, #8b5cf6, #ec4899)";
      default:
        return "linear-gradient(135deg, #6b7280, #4b5563)";
    }
  }

  let currentPage = 1;
  const itemsPerPage = 9;

  function paginate(items) {
    const start = (currentPage - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  }

  function applyFilters() {
    const q = normalize(currentSearch.trim());

    filteredItems = glossary.filter((item) => {
      const categoryMatch =
        currentCategory === "all" || item.category === currentCategory;

      if (!categoryMatch) return false;

      if (!q) return true;

      const term = normalize(item.term || "");
      const translation = normalize(item.translation || "");
      const definition = normalize(item.definition || "");

      return (
        term.includes(q) ||
        translation.includes(q) ||
        definition.includes(q)
      );
    });

    currentPage = 1; 
    renderList(paginate(filteredItems));
    renderPagination(filteredItems.length);
  }

  function renderList(items) {
  listEl.innerHTML = "";

  items.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "card card-enter";

    card.style.animationDelay = `${index * 40}ms`;

      const header = document.createElement("div");
      header.className = "card-header";

      const termBlock = document.createElement("div");
      termBlock.className = "term-block";

      const termEl = document.createElement("h2");
      termEl.className = "term";
      termEl.textContent = item.term;
      termBlock.appendChild(termEl);

      if (item.translation && item.translation.trim() !== "") {
        const translationEl = document.createElement("p");
        translationEl.className = "translation";
        translationEl.textContent = item.translation;
        termBlock.appendChild(translationEl);
      }

      const rightTop = document.createElement("div");
      rightTop.style.display = "flex";
      rightTop.style.flexDirection = "column";
      rightTop.style.alignItems = "flex-end";
      rightTop.style.gap = "0.25rem";

      const badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = "EN • IT";

      const categoryTag = document.createElement("span");
      categoryTag.className = "category-tag";
      categoryTag.textContent = item.category;
      categoryTag.style.backgroundImage = getCategoryColor(item.category);

      rightTop.appendChild(categoryTag);
      rightTop.appendChild(badge);

      header.appendChild(termBlock);
      header.appendChild(rightTop);

      const defEl = document.createElement("p");
      defEl.className = "definition";
      defEl.textContent = item.definition;

      const button = document.createElement("button");
      button.className = "speak-btn";
      button.type = "button";
      button.innerHTML = `<span>🔊</span><span>Speak</span>`;
      button.addEventListener("click", () => {
        speakTerm(item.term);
      });

      card.appendChild(header);
      card.appendChild(defEl);
      card.appendChild(button);

      listEl.appendChild(card);
    });

    resultsCountEl.textContent = `${filteredItems.length} term(s) found`;
  }

  function renderPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginationEl = document.getElementById("pagination");

    paginationEl.innerHTML = "";

    if (totalPages <= 1) return;

    const prevBtn = document.createElement("button");
    prevBtn.textContent = "‹ Prev";
    prevBtn.className = "page-btn" + (currentPage === 1 ? " disabled" : "");
    prevBtn.onclick = () => {
      if (currentPage > 1) {
        currentPage--;
        renderList(paginate(filteredItems));
        renderPagination(filteredItems.length);
        window.scrollTo(0, 0);
      }
    };
    paginationEl.appendChild(prevBtn);

    for (let p = 1; p <= totalPages; p++) {
      const btn = document.createElement("button");
      btn.textContent = p;
      btn.className = "page-btn" + (p === currentPage ? " active" : "");
      btn.onclick = () => {
        currentPage = p;
        renderList(paginate(filteredItems));
        renderPagination(filteredItems.length);
        window.scrollTo(0, 0);
      };
      paginationEl.appendChild(btn);
    }

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next ›";
    nextBtn.className = "page-btn" + (currentPage === totalPages ? " disabled" : "");
    nextBtn.onclick = () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderList(paginate(filteredItems));
        renderPagination(filteredItems.length);
        window.scrollTo(0, 0);
      }
    };
    paginationEl.appendChild(nextBtn);
  }


  function speakTerm(rawTerm) {
    if (!("speechSynthesis" in window)) {
      alert("Speech synthesis is not supported in this browser.");
      return;
    }

    const englishPart = rawTerm.split("(")[0].trim();

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(englishPart);
    utterance.lang = "en-US";

    const voices = window.speechSynthesis.getVoices();
    const englishVoice =
      voices.find((v) => v.lang && v.lang.startsWith("en")) || null;
    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    window.speechSynthesis.speak(utterance);
  }

  searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value;
    currentPage = 1;
  applyFilters();
  });

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      filterChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      currentCategory = chip.dataset.category || "all";
      currentPage = 1;
      applyFilters();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  });

  applyFilters();
});
