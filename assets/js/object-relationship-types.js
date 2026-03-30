import { objectRelationshipTypesNote } from "./object-relationship-types-content.js";

const formatTimestamp = (dateValue) => new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short"
}).format(new Date(dateValue));

const renderObjectRelationshipTypes = () => {
  const hero = document.getElementById("objectRelationshipHero");
  const types = document.getElementById("objectRelationshipTypes");

  if (!hero || !types) {
    return;
  }

  hero.innerHTML = `
    <div class="page-meta">
      <span class="tag">${objectRelationshipTypesNote.parent}</span>
      <time datetime="${objectRelationshipTypesNote.createdAt}">${formatTimestamp(objectRelationshipTypesNote.createdAt)}</time>
      <span class="muted">Source: ${objectRelationshipTypesNote.source}</span>
    </div>
    <h1>${objectRelationshipTypesNote.title}</h1>
    <p>${objectRelationshipTypesNote.intro}</p>
  `;

  types.innerHTML = `
    <div class="relationship-grid">
      ${objectRelationshipTypesNote.relationships.map((type) => `
        <article class="relationship-card">
          <h3>${type.name}</h3>
          <ul class="tips-list">
            ${type.points.map((point) => `<li>${point}</li>`).join("")}
          </ul>
        </article>
      `).join("")}
    </div>
  `;
};

renderObjectRelationshipTypes();
