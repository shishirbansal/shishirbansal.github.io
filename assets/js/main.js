import {
  currentFocus,
  dailyLogEntries,
  notes,
  siteHighlights,
  technicalNotes
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

const formatTimestamp = (dateValue) => {
  const timestamp = new Date(dateValue);

  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(timestamp);
};

const renderTechnicalNotes = () => {
  const technicalNotesList = document.getElementById("technicalNotesList");

  if (!technicalNotesList) {
    return;
  }

  technicalNotesList.innerHTML = technicalNotes.map(({ children, createdAt, parent }) => `
    <article class="technical-note">
      <div class="technical-note-meta">
        <span class="tag">Technical Note</span>
        <time datetime="${createdAt}">${formatTimestamp(createdAt)}</time>
      </div>
      <h3>${parent}</h3>
      <ol class="technical-note-children">
        ${children.map((child) => `<li>${child}</li>`).join("")}
      </ol>
    </article>
  `).join("");
};

renderSiteHighlights();
renderNotes();
renderTechnicalNotes();
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
