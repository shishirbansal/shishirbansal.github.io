import { sharingVisibilityNote } from "./sharing-visibility-content.js";

const formatTimestamp = (dateValue) => new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short"
}).format(new Date(dateValue));

const renderSharingVisibilityNote = () => {
  const hero = document.getElementById("noteHero");
  const curriculum = document.getElementById("noteCurriculum");
  const milestones = document.getElementById("noteMilestones");
  const tips = document.getElementById("noteTips");

  if (!hero || !curriculum || !milestones || !tips) {
    return;
  }

  hero.innerHTML = `
    <div class="page-meta">
      <span class="tag">${sharingVisibilityNote.parent}</span>
      <time datetime="${sharingVisibilityNote.createdAt}">${formatTimestamp(sharingVisibilityNote.createdAt)}</time>
      <a href="${sharingVisibilityNote.trailmix.href}" target="_blank" rel="noopener noreferrer">${sharingVisibilityNote.trailmix.label}</a>
    </div>
    <h1>${sharingVisibilityNote.title}</h1>
    <p>${sharingVisibilityNote.intro}</p>
  `;

  curriculum.innerHTML = `
    <div class="summary-grid">
      <div class="summary-stat">
        <div class="k">Duration</div>
        <div class="v">4 weeks / 28 days</div>
      </div>
      <div class="summary-stat">
        <div class="k">Target Completion</div>
        <div class="v">${sharingVisibilityNote.targetCompletionDate}</div>
      </div>
    </div>
    <div class="curriculum-grid">
      ${sharingVisibilityNote.weeks.map((week) => `
        <article class="curriculum-week">
          <h3>${week.title}</h3>
          <ul class="tracker-list">
            ${week.days.map((day) => `
              <li>
                <span class="tracker-label">${day.label}: ${day.topic}</span>
                <span> - ${day.description}</span>
              </li>
            `).join("")}
          </ul>
        </article>
      `).join("")}
    </div>
  `;

  milestones.innerHTML = `
    <ul class="milestone-list">
      ${sharingVisibilityNote.milestones.map((milestone) => `<li>${milestone}</li>`).join("")}
    </ul>
  `;

  tips.innerHTML = `
    <ul class="tips-list">
      ${sharingVisibilityNote.tips.map((tip) => `<li>${tip}</li>`).join("")}
    </ul>
  `;
};

renderSharingVisibilityNote();
