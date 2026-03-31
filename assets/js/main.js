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

  const formatDay = (dateValue) => new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date(dateValue));

  const renderDay = (selectedDate) => {
    const selectedDay = dailyLogEntries.find(({ date }) => date === selectedDate) || dailyLogEntries[0];
    const formattedDate = formatDay(selectedDay.date);

    return `
      <section class="daily-journal-shell">
        <div class="daily-log-filter-bar">
          <div class="daily-log-filter-copy">
            <p class="daily-journal-kicker">Browse by date</p>
            <p class="muted">Pick any day to reopen that notebook entry later.</p>
          </div>
          <div class="daily-log-filter-buttons" role="tablist" aria-label="Daily log by date">
            ${dailyLogEntries.map(({ date }) => `
              <button class="daily-log-filter-btn${date === selectedDay.date ? " active" : ""}" type="button" data-log-date="${date}">
                ${new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(new Date(date))}
              </button>
            `).join("")}
          </div>
        </div>

        <div class="daily-journal-intro">
          <div>
            <p class="daily-journal-kicker">${selectedDay.label}</p>
            <h3>${formattedDate}</h3>
          </div>
          <p class="muted">${selectedDay.intro}</p>
        </div>

        <div class="daily-journal-summary">
          <div>
            <span>Entries</span>
            <strong>${selectedDay.entries.length}</strong>
          </div>
          <div>
            <span>First note</span>
            <strong>${selectedDay.entries[0]?.time || "N/A"}</strong>
          </div>
          <div>
            <span>Last note</span>
            <strong>${selectedDay.entries[selectedDay.entries.length - 1]?.time || "N/A"}</strong>
          </div>
        </div>

        <ol class="daily-journal-list construction-log-list">
          ${selectedDay.entries.map(({ tag, text, time }, index) => `
            <li class="daily-journal-entry construction-log-entry">
              <div class="daily-journal-time construction-log-cell">
                <span class="construction-log-label">Time</span>
                <time>${time}</time>
              </div>
              <div class="daily-journal-content construction-log-cell">
                <span class="construction-log-label">Type</span>
                <span class="daily-journal-tag">${tag}</span>
              </div>
              <div class="daily-journal-note construction-log-cell">
                <span class="construction-log-label">Log entry ${String(index + 1).padStart(2, "0")}</span>
                <p>${text}</p>
              </div>
            </li>
          `).join("")}
        </ol>
      </section>
    `;
  };

  const initialDate = dailyLogEntries[0]?.date;
  dailyLogList.innerHTML = renderDay(initialDate);

  const bindFilterEvents = () => {
    const filterButtons = dailyLogList.querySelectorAll("[data-log-date]");

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        dailyLogList.innerHTML = renderDay(button.dataset.logDate);
        bindFilterEvents();
      });
    });
  };

  bindFilterEvents();
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

  const totalCollections = technicalNotes.length;
  const totalEntries = technicalNotes.reduce((sum, { children }) => sum + children.length, 0);
  const latestUpdate = technicalNotes
    .flatMap(({ children }) => children.map(({ updatedAt }) => updatedAt))
    .sort((left, right) => new Date(right) - new Date(left))[0];

  technicalNotesList.innerHTML = `
    <section class="technical-library-shell">
      <div class="technical-library-intro">
        <div class="technical-library-copy">
          <p class="technical-library-kicker">Editorial Library</p>
          <h3>Readable collections for concepts that should stay easy to find later.</h3>
          <p class="muted">
            The archive is grouped by subject instead of stacked as equal cards, so it feels closer to a study shelf:
            clearer families, stronger timestamps, and less distance between the title and the note itself.
          </p>
        </div>
        <div class="technical-library-meta">
          <span>${totalCollections} collections</span>
          <span>${totalEntries} notes</span>
          <span>Latest update ${formatTimestamp(latestUpdate)}</span>
        </div>
      </div>

      <div class="technical-library-layout">
        <aside class="technical-library-index">
          ${technicalNotes.map(({ children, parent }, index) => `
            <a class="technical-library-index-link" href="#technical-note-${index + 1}">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <strong>${parent}</strong>
              <small>${children.length} notes</small>
            </a>
          `).join("")}
        </aside>

        <div class="technical-library-groups">
          ${technicalNotes.map(({ children, createdAt, parent }, index) => `
            <article class="technical-note" id="technical-note-${index + 1}">
              <div class="technical-note-meta">
                <div>
                  <p class="technical-library-kicker">Collection ${String(index + 1).padStart(2, "0")}</p>
                  <h3>${parent}</h3>
                </div>
                <time datetime="${createdAt}">${formatTimestamp(createdAt)}</time>
              </div>
              <ol class="technical-note-children">
                ${children.map((child) => `
                  <li>
                    <a class="technical-note-link" href="${child.href}" target="_blank" rel="noopener noreferrer">${child.title}</a>
                    <time datetime="${child.updatedAt}">${formatTimestamp(child.updatedAt)}</time>
                  </li>
                `).join("")}
              </ol>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
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
