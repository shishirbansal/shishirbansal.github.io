<div class="theme-toggle-bar">
  <div class="theme-toggle-wrapper">
    <span id="themeLabel">Light</span>
    <button
      id="themeToggle"
      class="theme-toggle-button"
      type="button"
      aria-label="Toggle light or dark theme"
    >
      <span class="theme-toggle-thumb" id="themeThumb">🌙</span>
    </button>
  </div>
</div>



# Your Name

**Technical Architect · Salesforce | Location**

- Email: shishirbansal91@gmail.com 
- GitHub: [shishirbansal](https://github.com/shishirbansal)  
- LinkedIn: [your-link](https://www.linkedin.com/in/shishirbansal/)

---

## Summary

2–4 lines about your experience, strengths, and what roles you’re targeting.

## Experience

**Senior Technical Architect – Company Name**  
_2021 – Present · Location_

- Bullet about a key project and impact.
- Bullet with metrics (e.g., reduced processing time by 40%).
- Bullet with stack / technologies (Salesforce, Apex, LWC, etc.).

## Education

**Degree – Institute**  
Year

## Skills

Salesforce · Apex · LWC · Integration · JavaScript · etc.

---

<style>
  :root {
    /* Light theme (default) */
    --bg: #f5f5f5;
    --text: #0f172a;
    --text-muted: #64748b;
    --accent: #2563eb;
    --card-bg: #ffffff;
    --border: #e2e8f0;
    --shadow-soft: 0 10px 30px rgba(15, 23, 42, 0.08);
  }

  body[data-theme="dark"] {
    --bg: #020617;
    --text: #e5e7eb;
    --text-muted: #9ca3af;
    --accent: #38bdf8;
    --card-bg: #020617;
    --border: #1f2937;
    --shadow-soft: 0 10px 30px rgba(0, 0, 0, 0.6);
  }

  body {
    margin: 0;
    padding: 2rem 1.5rem 3rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background-color: var(--bg);
    color: var(--text);
    line-height: 1.7;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 640px) {
    body {
      padding: 1.5rem 1.1rem 2.5rem;
    }
  }

  body > *:not(style):not(script) {
    /* Fake "card" look for the page content */
    background-color: var(--card-bg);
    border-radius: 18px;
    padding: 2rem 2.1rem 2.3rem;
    box-shadow: var(--shadow-soft);
    border: 1px solid var(--border);
  }

  body > .theme-toggle-bar + * {
    /* First markdown block after the toggle gets the card styling instead */
    margin-top: 0;
  }

  .theme-toggle-bar {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.75rem;
  }

  .theme-toggle-wrapper {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8rem;
    color: var(--text-muted);
    background-color: var(--card-bg);
    border-radius: 999px;
    padding: 0.35rem 0.75rem;
    border: 1px solid var(--border);
    box-shadow: var(--shadow-soft);
  }

  .theme-toggle-button {
    position: relative;
    width: 3rem;
    height: 1.6rem;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: rgba(148, 163, 184, 0.2);
    cursor: pointer;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    transition: background 0.2s ease, border-color 0.2s ease;
  }

  .theme-toggle-thumb {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 999px;
    background: #f9fafb;
    box-shadow: 0 2px 6px rgba(15, 23, 42, 0.4);
    margin-left: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    transition: transform 0.22s ease;
  }

  body[data-theme="dark"] .theme-toggle-button {
    background: rgba(15, 23, 42, 0.7);
    border-color: #334155;
  }

  body[data-theme="dark"] .theme-toggle-thumb {
    transform: translateX(1.2rem);
    background: #020617;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.9);
  }

  h1 {
    margin-top: 0.3rem;
    margin-bottom: 0.2rem;
    font-size: 2rem;
  }

  h2 {
    margin-top: 1.8rem;
    margin-bottom: 0.4rem;
    font-size: 1.15rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--text-muted);
  }

  p {
    margin-top: 0.2rem;
    margin-bottom: 0.4rem;
  }

  ul {
    margin-top: 0.2rem;
    margin-bottom: 0.8rem;
    padding-left: 1.2rem;
  }

  li {
    margin-bottom: 0.2rem;
  }

  strong {
    font-weight: 600;
  }

  em {
    color: var(--text-muted);
  }

  a {
    color: var(--accent);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  hr {
    border: 0;
    border-top: 1px solid var(--border);
    margin: 1.2rem 0;
  }
</style>

<script>
  (function () {
    const body = document.body;
    const toggleButton = document.getElementById("themeToggle");
    const themeLabel = document.getElementById("themeLabel");
    const themeThumb = document.getElementById("themeThumb");

    if (!toggleButton || !themeLabel || !themeThumb) {
      return;
    }

    const storedTheme = localStorage.getItem("resume-theme");
    let theme;

    if (storedTheme === "light" || storedTheme === "dark") {
      theme = storedTheme;
    } else {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      theme = prefersDark ? "dark" : "light";
    }

    function applyTheme(nextTheme) {
      if (nextTheme === "dark") {
        body.setAttribute("data-theme", "dark");
        themeLabel.textContent = "Dark";
        themeThumb.textContent = "🌙";
      } else {
        body.setAttribute("data-theme", "light");
        themeLabel.textContent = "Light";
        themeThumb.textContent = "☀️";
      }
      localStorage.setItem("resume-theme", nextTheme);
    }

    applyTheme(theme);

    toggleButton.addEventListener("click", function () {
      const current = body.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
    });
  })();
</script>
