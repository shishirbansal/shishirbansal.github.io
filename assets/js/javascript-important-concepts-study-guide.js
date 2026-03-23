import { javascriptImportantConceptsStudyGuideNote } from "./javascript-important-concepts-study-guide-content.js";

const formatTimestamp = (dateValue) => new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short"
}).format(new Date(dateValue));

const getBadgeClass = (kind) => {
  if (kind === "Keyword" || kind === "Syntax") {
    return "safe";
  }

  if (kind === "Async Feature" || kind === "Runtime Behavior") {
    return "mutates";
  }

  return "safe";
};

const renderConceptCard = (concept) => `
  <article class="array-method-card">
    <div class="array-method-top">
      <h3>${concept.name}</h3>
      <span class="mutate-badge ${getBadgeClass(concept.kind)}">${concept.kind}</span>
    </div>
    <p class="array-method-purpose">${concept.purpose}</p>
    <dl class="method-facts">
      <div>
        <dt>Syntax</dt>
        <dd><code>${concept.syntax}</code></dd>
      </div>
      <div>
        <dt>Parameters</dt>
        <dd>${concept.parameters}</dd>
      </div>
      <div>
        <dt>Returns</dt>
        <dd>${concept.returns}</dd>
      </div>
      <div>
        <dt>Mutation / State</dt>
        <dd>${concept.mutates}</dd>
      </div>
    </dl>
    <details class="method-examples">
      <summary>Show worked examples</summary>
      <div class="method-example">
        <h4>Simple</h4>
        <pre><code>${concept.simpleExample}</code></pre>
      </div>
      <div class="method-example">
        <h4>Practical</h4>
        <pre><code>${concept.practicalExample}</code></pre>
      </div>
    </details>
  </article>
`;

const renderJavascriptImportantConceptsStudyGuideNote = () => {
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
      <span class="tag">${javascriptImportantConceptsStudyGuideNote.parent}</span>
      <time datetime="${javascriptImportantConceptsStudyGuideNote.createdAt}">${formatTimestamp(javascriptImportantConceptsStudyGuideNote.createdAt)}</time>
    </div>
    <h1>${javascriptImportantConceptsStudyGuideNote.title}</h1>
    <p>${javascriptImportantConceptsStudyGuideNote.subtitle}</p>
  `;

  start.innerHTML = `
    <ul class="tips-list">
      ${javascriptImportantConceptsStudyGuideNote.startHere.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;

  includes.innerHTML = `
    <ul class="tips-list">
      ${javascriptImportantConceptsStudyGuideNote.includes.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;

  methods.innerHTML = javascriptImportantConceptsStudyGuideNote.sections.map((section) => `
    <section class="array-method-section">
      <div class="array-method-section-head">
        <h3>${section.title}</h3>
      </div>
      <div class="array-method-grid">
        ${section.methods.map((method) => renderConceptCard(method)).join("")}
      </div>
    </section>
  `).join("");

  table.innerHTML = `
    <div class="table-shell">
      <table class="command-table">
        <thead>
          <tr>
            <th>Concept</th>
            <th>Main purpose</th>
            <th>Returns</th>
            <th>Mutation / state</th>
          </tr>
        </thead>
        <tbody>
          ${javascriptImportantConceptsStudyGuideNote.quickComparison.map((item) => `
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
      ${javascriptImportantConceptsStudyGuideNote.interviewNotes.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;

  practice.innerHTML = `
    <ul class="tips-list">
      ${javascriptImportantConceptsStudyGuideNote.practiceTasks.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;

  revision.innerHTML = `
    <div class="revision-chip-wrap">
      ${javascriptImportantConceptsStudyGuideNote.revisionOrder.map((item) => `<span class="revision-chip">${item}</span>`).join("")}
    </div>
  `;
};

renderJavascriptImportantConceptsStudyGuideNote();
