export const recordLockingNote = {
  title: "Record Locking",
  parent: "Salesforce Technical Architect",
  createdAt: "2026-03-30T10:56:00+05:30",
  intro: "Salesforce uses record and group-table locks to maintain consistency in concurrent transactions. Most operations lock only one or a few rows, but contention rises quickly in high-volume updates to shared parent records, role/group structures, and share tables.",
  sources: ["IMG_20260330_105628.jpg", "IMG_20260330_105638.jpg", "IMG_20260330_105651.jpg"],
  usageGuide: [
    "Review locking behavior per object and operation before finalizing a data model. Parent/related objects can lock even when you update only child records.",
    "Treat lookup relationships, roll-up summary fields, workflow field updates, and sharing recalculation as lock multipliers in large data volumes.",
    "Prioritize transaction design: keep DML batches small, reduce parent hot-spot updates, and avoid long-running synchronous operations around heavily shared records.",
    "When contention is expected, design retry-safe integrations and asynchronous processing patterns for non-critical updates."
  ],
  objectSpecific: [
    { focus: "Any record", operation: "Update", locks: "Updated record and sharing records", detail: "Write operations lock the record and may lock share rows for that record.", risk: "Low" },
    { focus: "Any record", operation: "Delete", locks: "Record being deleted and sharing records", detail: "Delete/undelete can touch both base row and sharing rows.", risk: "Low" },
    { focus: "Account", operation: "Update / Delete", locks: "Group table", detail: "Owner-field changes and delete operations can force role/group maintenance locks.", risk: "High" },
    { focus: "AccountTeamMember / CaseTeamMember / OpportunityTeamMember", operation: "Insert / Delete", locks: "Associated Account / Case / Opportunity and related share rows", detail: "Team updates can add/remove implicit shares and lock parent share structures.", risk: "High" },
    { focus: "CampaignMember", operation: "Insert / Update", locks: "Associated Campaign, Contact or Lead", detail: "Membership changes can lock campaign + member-side rows.", risk: "High" },
    { focus: "Case", operation: "Insert / Update / Delete", locks: "Account, Contact", detail: "Case write activity can lock parent account/contact relationships.", risk: "High" },
    { focus: "Contact", operation: "Insert / Update", locks: "Parent Account", detail: "Contact updates frequently lock account parent row.", risk: "High" },
    { focus: "Event", operation: "Insert / Update / Delete", locks: "Who, What, Account", detail: "Activity relationships can lock related who/what/account records.", risk: "High" },
    { focus: "GroupMember", operation: "Insert / Delete", locks: "Group table", detail: "Role, territory, and queue group changes are common lock-contention hotspots.", risk: "High" },
    { focus: "Opportunity", operation: "Insert / Update / Delete", locks: "Parent Account", detail: "High-frequency opportunity writes can create account hot-row contention.", risk: "High" },
    { focus: "Task", operation: "Insert / Update / Delete", locks: "Who, What, Account", detail: "Task activity locks can chain into related account/contact/opportunity records.", risk: "High" },
    { focus: "Territory", operation: "Insert / Delete / Reparent", locks: "Group table", detail: "Territory hierarchy edits force group lock activity.", risk: "High" },
    { focus: "User", operation: "Insert / Update", locks: "Group table", detail: "User provisioning and role assignment trigger group membership recalculation.", risk: "High" },
    { focus: "UserRole", operation: "Insert / Delete / Update", locks: "Group table", detail: "Role hierarchy changes are lock-heavy and should be carefully sequenced.", risk: "High" }
  ],
  customConfig: [
    { focus: "Any record", operation: "SELECT ... FOR UPDATE", locks: "Selected rows", detail: "Explicit row locking serializes concurrent updates to the selected records.", risk: "High" },
    { focus: "Master-detail child record", operation: "Insert / Delete", locks: "Master record", detail: "Child changes can lock the master for referential consistency and summaries.", risk: "High" },
    { focus: "Master-detail child record", operation: "Update master record Id", locks: "Master record", detail: "Reparent operations lock the target master row.", risk: "High" },
    { focus: "Lookup child record", operation: "Insert child with lookup value", locks: "Lookup parent", detail: "New child assignment can lock the referenced lookup parent.", risk: "High" },
    { focus: "Lookup child record", operation: "Update child and change lookup value", locks: "Lookup parent", detail: "Lookup re-assignment can lock old/new parent rows depending on config.", risk: "High" },
    { focus: "Record with roll-up summary field", operation: "Insert / Update / Delete detail record", locks: "Master record", detail: "Any detail DML can lock the master to maintain aggregate values.", risk: "High" },
    { focus: "Workflow", operation: "Workflow field update", locks: "Record being updated", detail: "Only workflow rules that execute field updates trigger additional write locks.", risk: "High" }
  ],
  sharingOps: [
    { focus: "Sharing rule", operation: "Modify sharing rule", locks: "Object share records", detail: "Share recalculation can update many rows in share objects.", risk: "Low to Medium" },
    { focus: "Org-wide defaults", operation: "Modify OWD", locks: "Object share records", detail: "Changing baseline visibility can cause broad share recomputation.", risk: "Low to Medium" },
    { focus: "Account assignment rules", operation: "Run assignment rules", locks: "AccountShare / CaseShare / ContactShare / OpportunityShare", detail: "Assignment actions may refresh parent/child share records.", risk: "Low" },
    { focus: "AccountShare / CaseShare / ContactShare / OpportunityShare", operation: "Insert / Update / Delete", locks: "Related share rows and sometimes parent implicit shares", detail: "Share-table writes usually avoid direct object row locks but can still contend under volume.", risk: "Low" },
    { focus: "Role / portal / internal user provisioning", operation: "Membership or ownership changes", locks: "Group table", detail: "Group membership operations are the most frequent cause of lock spikes in complex orgs.", risk: "High" }
  ],
  designPractices: [
    "Sequence high-risk operations: avoid running role/group maintenance alongside large account/opportunity upserts.",
    "Reduce hot parents: distribute high-write children across more parent records where possible.",
    "Use selective SOQL and short transactions. Avoid callouts and expensive CPU in the same transaction as heavy DML.",
    "Prefer async processing for non-blocking writes (Queueable/Batch/Scheduled) when lock contention is likely.",
    "Implement retry with backoff for `UNABLE_TO_LOCK_ROW` in integrations and batch frameworks."
  ]
};
