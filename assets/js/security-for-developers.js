import { securityForDevelopersNote } from "./security-for-developers-content.js";

const formatTimestamp = (dateValue) => new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short"
}).format(new Date(dateValue));

const renderTable = (headers, rows) => `
  <div class="table-shell">
    <table class="command-table">
      <thead>
        <tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr>
      </thead>
      <tbody>
        ${rows.join("")}
      </tbody>
    </table>
  </div>
`;

const renderSecurityForDevelopers = () => {
  const hero = document.getElementById("securityDevelopersHero");
  const priorities = document.getElementById("securityDevelopersPriorities");
  const access = document.getElementById("securityDevelopersAccess");
  const crudFls = document.getElementById("securityDevelopersCrudFls");
  const esapi = document.getElementById("securityDevelopersEsapi");
  const runtime = document.getElementById("securityDevelopersRuntime");

  if (!hero || !priorities || !access || !crudFls || !esapi || !runtime) {
    return;
  }

  hero.innerHTML = `
    <div class="page-meta">
      <span class="tag">${securityForDevelopersNote.parent}</span>
      <time datetime="${securityForDevelopersNote.createdAt}">${formatTimestamp(securityForDevelopersNote.createdAt)}</time>
    </div>
    <h1>${securityForDevelopersNote.title}</h1>
    <p>${securityForDevelopersNote.intro}</p>
  `;

  priorities.innerHTML = `
    <ul class="tips-list">
      ${securityForDevelopersNote.priorities.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;

  access.innerHTML = `
    <div class="security-topic-grid">
      <article class="security-topic-card">
        <h3>Sharing Keywords</h3>
        ${renderTable(
          ["Keyword", "How to use it"],
          securityForDevelopersNote.sharingKeywords.map((row) => `
            <tr>
              <td><code>${row.keyword}</code></td>
              <td>${row.guidance}</td>
            </tr>
          `)
        )}
      </article>

      <article class="security-topic-card">
        <h3>Visualforce Escaping Functions</h3>
        ${renderTable(
          ["Function", "Context"],
          securityForDevelopersNote.escapingFunctions.map((row) => `
            <tr>
              <td><code>${row.fn}</code></td>
              <td>${row.usage}</td>
            </tr>
          `)
        )}
      </article>
    </div>
  `;

  crudFls.innerHTML = `
    <div class="security-topic-grid">
      <article class="security-topic-card">
        <h3>CRUD (Object-level) Checks</h3>
        ${renderTable(
          ["Describe method", "What it verifies"],
          securityForDevelopersNote.crudChecks.map((row) => `
            <tr>
              <td><code>${row.method}</code></td>
              <td>${row.meaning}</td>
            </tr>
          `)
        )}
      </article>
      <article class="security-topic-card">
        <h3>FLS (Field-level) Checks</h3>
        ${renderTable(
          ["DescribeFieldResult method", "What it verifies"],
          securityForDevelopersNote.flsChecks.map((row) => `
            <tr>
              <td><code>${row.method}</code></td>
              <td>${row.meaning}</td>
            </tr>
          `)
        )}
      </article>
    </div>
  `;

  esapi.innerHTML = `
    <p class="muted">${securityForDevelopersNote.esapi.intro}</p>
    <div class="security-topic-grid">
      <article class="security-topic-card">
        <h3>Access-Control Methods</h3>
        ${renderTable(
          ["Method", "Purpose"],
          securityForDevelopersNote.esapi.accessControlMethods.map((row) => `
            <tr>
              <td><code>${row.method}</code></td>
              <td>${row.reason}</td>
            </tr>
          `)
        )}
      </article>
      <article class="security-topic-card">
        <h3>Escaping Constants/Helpers</h3>
        ${renderTable(
          ["Name", "Purpose"],
          securityForDevelopersNote.esapi.constants.map((row) => `
            <tr>
              <td><code>${row.key}</code></td>
              <td>${row.detail}</td>
            </tr>
          `)
        )}
      </article>
    </div>
  `;

  runtime.innerHTML = `
    <div class="security-topic-grid">
      <article class="security-topic-card">
        <h3>Custom Settings Methods</h3>
        ${renderTable(
          ["Method", "Usage"],
          securityForDevelopersNote.customSettingsMethods.map((row) => `
            <tr>
              <td><code>${row.method}</code></td>
              <td>${row.usage}</td>
            </tr>
          `)
        )}
      </article>
      <article class="security-topic-card">
        <h3>Crypto Class Methods</h3>
        ${renderTable(
          ["Method", "Purpose"],
          securityForDevelopersNote.cryptoMethods.map((row) => `
            <tr>
              <td><code>${row.method}</code></td>
              <td>${row.purpose}</td>
            </tr>
          `)
        )}
      </article>
    </div>
  `;
};

renderSecurityForDevelopers();
