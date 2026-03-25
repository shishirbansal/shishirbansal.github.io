import {
  currentFocus,
  dailyQuotes,
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

const getLocalDayKey = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const getQuoteIndexForToday = (itemsCount) => {
  const dayKey = getLocalDayKey();
  let hash = 0;

  for (let index = 0; index < dayKey.length; index += 1) {
    hash = (hash * 31 + dayKey.charCodeAt(index)) % 2147483647;
  }

  return hash % itemsCount;
};

let currentQuoteIndex = 0;

const renderDailyQuote = (quoteIndex = getQuoteIndexForToday(dailyQuotes.length)) => {
  const quoteBanner = document.getElementById("quoteBanner");
  const dailyQuoteItems = document.querySelectorAll("[data-quote-item]");
  const dailyQuoteMeta = document.getElementById("dailyQuoteMeta");
  const dailyQuoteAuthor = document.getElementById("dailyQuoteAuthor");
  const dailyQuoteTrack = document.getElementById("dailyQuoteTrack");

  if (!quoteBanner || !dailyQuoteItems.length || !dailyQuoteMeta || !dailyQuoteAuthor || !dailyQuoteTrack || !dailyQuotes.length) {
    return;
  }

  currentQuoteIndex = quoteIndex;
  const selectedQuote = dailyQuotes[currentQuoteIndex];
  dailyQuoteItems.forEach((item) => {
    item.textContent = `"${selectedQuote.text}"`;
  });
  dailyQuoteMeta.textContent = selectedQuote.theme;
  dailyQuoteAuthor.textContent = selectedQuote.author || "Unknown";

  dailyQuoteTrack.classList.remove("marquee-animate");
  void dailyQuoteTrack.offsetWidth;
  dailyQuoteTrack.classList.add("marquee-animate");
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
        ${children.map((child) => `
          <li>
            <a class="technical-note-link" href="${child.href}" target="_blank" rel="noopener noreferrer">${child.title}</a>
            <time datetime="${child.updatedAt}">${formatTimestamp(child.updatedAt)}</time>
          </li>
        `).join("")}
      </ol>
    </article>
  `).join("");
};

const setupHeroParallax = () => {
  const panels = document.querySelectorAll(".parallax-panel");

  if (!panels.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  let mouseOffsetX = 0;
  let mouseOffsetY = 0;
  let scrollOffsetY = 0;
  let isTicking = false;

  const applyParallax = () => {
    panels.forEach((panel, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const x = (mouseOffsetX * 10 * direction).toFixed(2);
      const y = ((mouseOffsetY * 8 * direction) + (scrollOffsetY * (direction * 0.6))).toFixed(2);
      panel.style.setProperty("--parallax-x", `${x}px`);
      panel.style.setProperty("--parallax-y", `${y}px`);
    });

    isTicking = false;
  };

  const requestParallaxFrame = () => {
    if (isTicking) {
      return;
    }

    isTicking = true;
    window.requestAnimationFrame(applyParallax);
  };

  window.addEventListener("mousemove", (event) => {
    mouseOffsetX = (event.clientX / window.innerWidth) - 0.5;
    mouseOffsetY = (event.clientY / window.innerHeight) - 0.5;
    requestParallaxFrame();
  }, { passive: true });

  window.addEventListener("scroll", () => {
    scrollOffsetY = Math.min(window.scrollY * 0.015, 12);
    requestParallaxFrame();
  }, { passive: true });
};

renderSiteHighlights();
renderDailyQuote();
renderNotes();
renderTechnicalNotes();
renderDailyLog();
renderCurrentFocus();
setupHeroParallax();

const refreshQuoteButton = document.getElementById("refreshQuoteBtn");

if (refreshQuoteButton && dailyQuotes.length > 1) {
  refreshQuoteButton.addEventListener("click", () => {
    const nextQuoteIndex = (currentQuoteIndex + 1) % dailyQuotes.length;
    renderDailyQuote(nextQuoteIndex);
  });
}

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
