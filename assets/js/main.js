import {
  currentFocus,
  dailyLogEntries,
  notes,
  siteHighlights
} from "./site-content.js";

const renderSiteHighlights = () => {
  const siteHighlightsElement = document.getElementById("siteHighlights");

  if (!siteHighlightsElement) {
    return;
  }

  siteHighlightsElement.innerHTML = siteHighlights.map(({ key, value }) => `
    <div class="stat">
      <div class="k">${key}</div>
      <div class="v">${value}</div>
    </div>
  `).join("");
};

const renderNotes = () => {
  const notesGrid = document.getElementById("notesGrid");

  if (!notesGrid) {
    return;
  }

  notesGrid.innerHTML = notes.map(({ label, status, tag, title }) => `
    <article class="note" data-tag="${tag}">
      <span class="tag">${label}</span>
      <strong>${title}</strong>
      <span class="muted">${status}</span>
    </article>
  `).join("");
};

const renderDailyLog = () => {
  const dailyLogList = document.getElementById("dailyLogList");

  if (!dailyLogList) {
    return;
  }

  dailyLogList.innerHTML = dailyLogEntries.map(({ text, time }) => `
    <li>
      <time>${time}</time>
      <span>${text}</span>
    </li>
  `).join("");
};

const renderCurrentFocus = () => {
  const currentFocusElement = document.getElementById("currentFocus");

  if (!currentFocusElement) {
    return;
  }

  currentFocusElement.innerHTML = `
    <details open>
      <summary>${currentFocus.summary}</summary>
      <p class="muted">${currentFocus.text}</p>
    </details>
  `;
};

renderSiteHighlights();
renderNotes();
renderDailyLog();
renderCurrentFocus();

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  });
}

const filterButtons = document.querySelectorAll(".filter-btn");
const noteCards = document.querySelectorAll(".note");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    noteCards.forEach((note) => {
      const isVisible = selectedFilter === "all" || note.dataset.tag === selectedFilter;
      note.style.display = isVisible ? "grid" : "none";
    });
  });
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("show"));
}
