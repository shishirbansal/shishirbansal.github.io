import { codexCommandsNote } from "./codex-commands-content.js";

const formatTimestamp = (dateValue) => new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short"
}).format(new Date(dateValue));

const renderCommandTable = (items) => `
  <div class="table-shell">
    <table class="command-table">
      <thead>
        <tr>
          <th>Command</th>
          <th>What it does</th>
          <th>When to use</th>
        </tr>
      </thead>
      <tbody>
        ${items.map((item) => `
          <tr>
            <td><code>${item.command}</code></td>
            <td>${item.whatItDoes}</td>
            <td>${item.whenToUse}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  </div>
`;

const renderCodexCommandsNote = () => {
  const hero = document.getElementById("noteHero");
  const quickStart = document.getElementById("noteQuickStart");
  const cliCommands = document.getElementById("noteCliCommands");
  const ideCommands = document.getElementById("noteIdeCommands");
  const appCommands = document.getElementById("noteAppCommands");
  const recipes = document.getElementById("noteRecipes");
  const caveats = document.getElementById("noteCaveats");
  const sources = document.getElementById("noteSources");

  if (!hero || !quickStart || !cliCommands || !ideCommands || !appCommands || !recipes || !caveats || !sources) {
    return;
  }

  hero.innerHTML = `
    <div class="page-meta">
      <span class="tag">${codexCommandsNote.parent}</span>
      <time datetime="${codexCommandsNote.createdAt}">${formatTimestamp(codexCommandsNote.createdAt)}</time>
    </div>
    <h1>${codexCommandsNote.title}</h1>
    <p>${codexCommandsNote.summary}</p>
    <p class="muted">Prepared for ${codexCommandsNote.preparedFor} | Current to ${codexCommandsNote.currentAsOf}</p>
    <p class="muted"><strong>Important:</strong> ${codexCommandsNote.importantNote}</p>
  `;

  quickStart.innerHTML = `
    <div class="summary-grid">
      <div class="summary-stat">
        <div class="k">CLI first</div>
        <div class="v">${codexCommandsNote.fastestToLearn.cli.join(", ")}</div>
      </div>
      <div class="summary-stat">
        <div class="k">IDE first</div>
        <div class="v">${codexCommandsNote.fastestToLearn.ide.join(", ")}</div>
      </div>
      <div class="summary-stat">
        <div class="k">App first</div>
        <div class="v">${codexCommandsNote.fastestToLearn.app.join(", ")}</div>
      </div>
    </div>
  `;

  cliCommands.innerHTML = `
    ${renderCommandTable(codexCommandsNote.cliCommands)}
    <p class="muted section-note">${codexCommandsNote.cliAliasNote}</p>
  `;

  ideCommands.innerHTML = renderCommandTable(codexCommandsNote.ideCommands);
  appCommands.innerHTML = renderCommandTable(codexCommandsNote.appCommands);

  recipes.innerHTML = `
    <ul class="tips-list">
      ${codexCommandsNote.recipes.map((recipe) => `<li>${recipe}</li>`).join("")}
    </ul>
  `;

  caveats.innerHTML = `
    <ul class="milestone-list">
      ${codexCommandsNote.caveats.map((caveat) => `<li>${caveat}</li>`).join("")}
    </ul>
  `;

  sources.innerHTML = `
    <ul class="tips-list">
      ${codexCommandsNote.sources.map((source) => `
        <li><a href="${source.href}" target="_blank" rel="noopener noreferrer">${source.label}</a></li>
      `).join("")}
    </ul>
  `;
};

renderCodexCommandsNote();
