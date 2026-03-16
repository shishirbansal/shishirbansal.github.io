import { javascriptStudyGuideNote } from "./javascript-study-guide-content.js";

const formatTimestamp = (dateValue) => new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short"
}).format(new Date(dateValue));

const renderMethodTable = (items) => `
  <div class="table-shell">
    <table class="command-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>Syntax</th>
          <th>Use</th>
        </tr>
      </thead>
      <tbody>
        ${items.map((item) => `
          <tr>
            <td><strong>${item.name}</strong></td>
            <td><code>${item.syntax}</code></td>
            <td>${item.summary}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  </div>
`;

const renderJavascriptStudyGuideNote = () => {
  const hero = document.getElementById("noteHero");
  const overview = document.getElementById("noteOverview");
  const arrays = document.getElementById("noteArrayMethods");
  const strings = document.getElementById("noteStringMethods");
  const objects = document.getElementById("noteObjectMethods");
  const examples = document.getElementById("noteExamples");
  const cheatSheet = document.getElementById("noteCheatSheet");
  const plan = document.getElementById("notePlan");

  if (!hero || !overview || !arrays || !strings || !objects || !examples || !cheatSheet || !plan) {
    return;
  }

  hero.innerHTML = `
    <div class="page-meta">
      <span class="tag">${javascriptStudyGuideNote.parent}</span>
      <time datetime="${javascriptStudyGuideNote.createdAt}">${formatTimestamp(javascriptStudyGuideNote.createdAt)}</time>
    </div>
    <h1>${javascriptStudyGuideNote.title}</h1>
    <p>${javascriptStudyGuideNote.summary}</p>
  `;

  overview.innerHTML = `
    <div class="summary-grid">
      ${javascriptStudyGuideNote.keyStats.map((stat) => `
        <div class="summary-stat">
          <div class="k">${stat.key}</div>
          <div class="v">${stat.value}</div>
        </div>
      `).join("")}
    </div>
  `;

  arrays.innerHTML = renderMethodTable(javascriptStudyGuideNote.arrayMethods);
  strings.innerHTML = renderMethodTable(javascriptStudyGuideNote.stringMethods);
  objects.innerHTML = renderMethodTable(javascriptStudyGuideNote.objectMethods);

  examples.innerHTML = `
    <div class="example-grid">
      ${javascriptStudyGuideNote.examples.map((example) => `
        <article class="example-card">
          <h3>${example.title}</h3>
          <pre><code>${example.code}</code></pre>
        </article>
      `).join("")}
    </div>
  `;

  cheatSheet.innerHTML = `
    <div class="table-shell">
      <table class="command-table">
        <thead>
          <tr>
            <th>Method</th>
            <th>Returns</th>
            <th>Mutates Original?</th>
          </tr>
        </thead>
        <tbody>
          ${javascriptStudyGuideNote.cheatSheet.map((item) => `
            <tr>
              <td>${item.method}</td>
              <td>${item.returns}</td>
              <td>${item.mutates}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;

  plan.innerHTML = `
    <ul class="tips-list">
      ${javascriptStudyGuideNote.studyPlan.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
};

renderJavascriptStudyGuideNote();
