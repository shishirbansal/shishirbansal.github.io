import { javascriptStringStudyGuideNote } from "./javascript-string-study-guide-content.js";

const formatTimestamp = (dateValue) => new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short"
}).format(new Date(dateValue));

const renderMethodCard = (method) => `
  <article class="array-method-card">
    <div class="array-method-top">
      <h3>${method.name}</h3>
      <span class="mutate-badge safe">No Mutation</span>
    </div>
    <p class="array-method-purpose">${method.purpose}</p>
    <dl class="method-facts">
      <div>
        <dt>Syntax</dt>
        <dd><code>${method.syntax}</code></dd>
      </div>
      <div>
        <dt>Parameters</dt>
        <dd>${method.parameters}</dd>
      </div>
      <div>
        <dt>Returns</dt>
        <dd>${method.returns}</dd>
      </div>
    </dl>
    <details class="method-examples">
      <summary>Show worked examples</summary>
      <div class="method-example">
        <h4>Simple</h4>
        <pre><code>${method.simpleExample}</code></pre>
      </div>
      <div class="method-example">
        <h4>Practical</h4>
        <pre><code>${method.practicalExample}</code></pre>
      </div>
    </details>
  </article>
`;

const renderJavascriptStringStudyGuideNote = () => {
  const hero = document.getElementById("noteHero");
  const start = document.getElementById("noteStart");
  const includes = document.getElementById("noteIncludes");
  const methods = document.getElementById("noteMethods");
  const table = document.getElementById("noteComparisonTable");
  const notes = document.getElementById("noteInterviewNotes");
  const practice = document.getElementById("notePractice");
  const revision = document.getElementById("noteRevisionOrder");

  if (!hero || !start || !includes || !methods || !table || !notes || !practice || !revision) {
    return;
  }

  hero.innerHTML = `
    <div class="page-meta">
      <span class="tag">${javascriptStringStudyGuideNote.parent}</span>
      <time datetime="${javascriptStringStudyGuideNote.createdAt}">${formatTimestamp(javascriptStringStudyGuideNote.createdAt)}</time>
    </div>
    <h1>${javascriptStringStudyGuideNote.title}</h1>
    <p>${javascriptStringStudyGuideNote.subtitle}</p>
  `;

  start.innerHTML = `
    <ul class="tips-list">
      ${javascriptStringStudyGuideNote.startHere.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;

  includes.innerHTML = `
    <ul class="tips-list">
      ${javascriptStringStudyGuideNote.includes.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;

  methods.innerHTML = javascriptStringStudyGuideNote.sections.map((section) => `
    <section class="array-method-section">
      <div class="array-method-section-head">
        <h3>${section.title}</h3>
      </div>
      <div class="array-method-grid">
        ${section.methods.map((method) => renderMethodCard(method)).join("")}
      </div>
    </section>
  `).join("");

  table.innerHTML = `
    <div class="table-shell">
      <table class="command-table">
        <thead>
          <tr>
            <th>Method</th>
            <th>Main purpose</th>
            <th>Returns</th>
            <th>Mutates?</th>
          </tr>
        </thead>
        <tbody>
          ${javascriptStringStudyGuideNote.quickComparison.map((item) => `
            <tr>
              <td><code>${item.method}</code></td>
              <td>${item.purpose}</td>
              <td>${item.returns}</td>
              <td>${item.mutates}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;

  notes.innerHTML = `
    <ul class="milestone-list">
      ${javascriptStringStudyGuideNote.interviewNotes.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;

  practice.innerHTML = `
    <ul class="tips-list">
      ${javascriptStringStudyGuideNote.practiceTasks.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;

  revision.innerHTML = `
    <div class="revision-chip-wrap">
      ${javascriptStringStudyGuideNote.revisionOrder.map((item) => `<span class="revision-chip">${item}</span>`).join("")}
    </div>
  `;
};

renderJavascriptStringStudyGuideNote();
