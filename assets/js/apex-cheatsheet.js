import { apexCheatSheetNote } from "./apex-cheatsheet-content.js";

const formatTimestamp = (dateValue) => new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short"
}).format(new Date(dateValue));

const renderList = (items) => `
  <ul class="tips-list">
    ${items.map((item) => `<li>${item}</li>`).join("")}
  </ul>
`;

const renderApexCheatSheet = () => {
  const hero = document.getElementById("apexHero");
  const quickStart = document.getElementById("apexQuickStart");
  const coreBlocks = document.getElementById("apexCoreBlocks");
  const triggerContext = document.getElementById("apexTriggerContext");
  const dml = document.getElementById("apexDml");
  const runtime = document.getElementById("apexRuntime");
  const interfaces = document.getElementById("apexInterfaces");
  const checklist = document.getElementById("apexChecklist");

  if (!hero || !quickStart || !coreBlocks || !triggerContext || !dml || !runtime || !interfaces || !checklist) {
    return;
  }

  hero.innerHTML = `
    <div class="page-meta">
      <span class="tag">${apexCheatSheetNote.parent}</span>
      <time datetime="${apexCheatSheetNote.createdAt}">${formatTimestamp(apexCheatSheetNote.createdAt)}</time>
      <a href="${apexCheatSheetNote.sourceHref}" target="_blank" rel="noopener noreferrer">${apexCheatSheetNote.sourceTitle}</a>
    </div>
    <h1>${apexCheatSheetNote.title}</h1>
    <p>${apexCheatSheetNote.intro}</p>
  `;

  quickStart.innerHTML = `
    <div class="apex-principles-grid">
      ${apexCheatSheetNote.quickStart.map((item) => `
        <article class="apex-principle-card">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `).join("")}
    </div>
  `;

  coreBlocks.innerHTML = `
    <div class="apex-core-grid">
      <article class="apex-pill-card">
        <h3>Important Reserved Words</h3>
        <div class="table-shell">
          <table class="command-table">
            <thead>
              <tr>
                <th>Keyword</th>
                <th>Concept</th>
                <th>When to use</th>
              </tr>
            </thead>
            <tbody>
              ${apexCheatSheetNote.coreBlocks.keywords.map((item) => `
                <tr>
                  <td><code>${item.keyword}</code></td>
                  <td>${item.concept}</td>
                  <td>${item.usage}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </article>

      <article class="apex-pill-card">
        <h3>Annotations</h3>
        <ul class="tips-list">
          ${apexCheatSheetNote.coreBlocks.annotations.map((item) => `<li><code>${item.name}</code>: ${item.why}</li>`).join("")}
        </ul>
      </article>

      <article class="apex-pill-card">
        <h3>Primitive Types</h3>
        ${renderList(apexCheatSheetNote.coreBlocks.primitives)}
      </article>

      <article class="apex-pill-card">
        <h3>Collection Types</h3>
        <ul class="tips-list">
          ${apexCheatSheetNote.coreBlocks.collections.map((item) => `<li><code>${item.name}</code>: ${item.detail}</li>`).join("")}
        </ul>
      </article>
    </div>
  `;

  triggerContext.innerHTML = `
    <div class="table-shell">
      <table class="command-table">
        <thead>
          <tr>
            <th>Variable</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          ${apexCheatSheetNote.triggerContext.map((row) => `
            <tr>
              <td><code>${row.variable}</code></td>
              <td>${row.meaning}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;

  dml.innerHTML = `
    <div class="example-grid">
      ${apexCheatSheetNote.dmlPatterns.map((item) => `
        <article class="example-card">
          <h3><code>${item.operation}</code></h3>
          <p class="muted">${item.when}</p>
          <pre><code>${item.sample}</code></pre>
        </article>
      `).join("")}
    </div>
  `;

  runtime.innerHTML = `
    <div class="summary-grid">
      <div class="summary-stat">
        <div class="k">System</div>
        <div class="v">${apexCheatSheetNote.runtimeUtilities.system.join(", ")}</div>
      </div>
      <div class="summary-stat">
        <div class="k">Math</div>
        <div class="v">${apexCheatSheetNote.runtimeUtilities.math.join(", ")}</div>
      </div>
      <div class="summary-stat">
        <div class="k">Describe</div>
        <div class="v">${apexCheatSheetNote.runtimeUtilities.describe.join(" ")}</div>
      </div>
      <div class="summary-stat">
        <div class="k">Limits</div>
        <div class="v">${apexCheatSheetNote.runtimeUtilities.limits.join(" ")}</div>
      </div>
      <div class="summary-stat">
        <div class="k">UserInfo</div>
        <div class="v">${apexCheatSheetNote.runtimeUtilities.userInfo.join(", ")}</div>
      </div>
    </div>
  `;

  interfaces.innerHTML = `
    <div class="table-shell">
      <table class="command-table">
        <thead>
          <tr>
            <th>Interface</th>
            <th>Core signature</th>
          </tr>
        </thead>
        <tbody>
          ${apexCheatSheetNote.interfaces.map((item) => `
            <tr>
              <td><code>${item.name}</code></td>
              <td><code>${item.signature}</code></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;

  checklist.innerHTML = renderList(apexCheatSheetNote.checklist);
};

renderApexCheatSheet();
