import { recordLockingNote } from "./record-locking-content.js";

const formatTimestamp = (dateValue) => new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short"
}).format(new Date(dateValue));

const renderMatrix = (rows) => `
  <div class="table-shell">
    <table class="command-table">
      <thead>
        <tr>
          <th>Focus</th>
          <th>Operation</th>
          <th>Locks</th>
          <th>Detail</th>
          <th>Risk</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map((row) => `
          <tr>
            <td>${row.focus}</td>
            <td>${row.operation}</td>
            <td>${row.locks}</td>
            <td>${row.detail}</td>
            <td><span class="lock-risk-chip">${row.risk}</span></td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  </div>
`;

const renderRecordLocking = () => {
  const hero = document.getElementById("recordLockingHero");
  const guide = document.getElementById("recordLockingGuide");
  const objectSpecific = document.getElementById("recordLockingObjectSpecific");
  const config = document.getElementById("recordLockingConfig");
  const sharing = document.getElementById("recordLockingSharing");

  if (!hero || !guide || !objectSpecific || !config || !sharing) {
    return;
  }

  hero.innerHTML = `
    <div class="page-meta">
      <span class="tag">${recordLockingNote.parent}</span>
      <time datetime="${recordLockingNote.createdAt}">${formatTimestamp(recordLockingNote.createdAt)}</time>
      <span class="muted">Sources: ${recordLockingNote.sources.join(", ")}</span>
    </div>
    <h1>${recordLockingNote.title}</h1>
    <p>${recordLockingNote.intro}</p>
  `;

  guide.innerHTML = `
    <div class="summary-grid">
      <div class="summary-stat">
        <div class="k">Core Idea</div>
        <div class="v">One transaction can lock multiple related records, not only the row you update.</div>
      </div>
      <div class="summary-stat">
        <div class="k">Frequent Hotspots</div>
        <div class="v">Group table, parent account rows, share table recalculations, and roll-up summary masters.</div>
      </div>
    </div>
    <ul class="tips-list section-note">
      ${recordLockingNote.usageGuide.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    <h3 class="section-note">Design Practices</h3>
    <ul class="tips-list">
      ${recordLockingNote.designPractices.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;

  objectSpecific.innerHTML = renderMatrix(recordLockingNote.objectSpecific);
  config.innerHTML = renderMatrix(recordLockingNote.customConfig);
  sharing.innerHTML = renderMatrix(recordLockingNote.sharingOps);
};

renderRecordLocking();
