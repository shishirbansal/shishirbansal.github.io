export const objectRelationshipTypesNote = {
  title: "Object Relationship Types",
  parent: "Salesforce Technical Architect",
  createdAt: "2026-03-30T10:46:00+05:30",
  intro: "This reference summarizes common Salesforce object relationship types and how they behave for ownership, security inheritance, and delete behavior.",
  source: "IMG_20260330_104633.jpg",
  relationships: [
    {
      name: "Master-detail",
      points: [
        "Closely links objects such that the master record controls key behavior of detail and subdetail records.",
        "Detail and subdetail records inherit security settings and permissions from the master record; you cannot set detail-level permissions independently.",
        "The Owner field on detail and subdetail records is not available and is automatically set to the owner of the master record.",
        "Custom objects on the detail side that rely on owner-based features (sharing rules, manual sharing, queues) require the Owner field.",
        "The master-detail relationship field (the field linking the objects) is required on the page layout of detail and subdetail records.",
        "Deleting a detail record moves it to the Recycle Bin and keeps the master record intact; deleting a master record also deletes related detail and subdetail records.",
        "Undeleting a detail record restores it, and undeleting a master record restores related detail and subdetail records. If the detail was deleted and the master was later deleted separately, the detail record can no longer be undeleted because there is no master to relate to."
      ]
    },
    {
      name: "Lookup",
      points: [
        "Links two objects together. It is similar to master-detail but does not support sharing or roll-up summary fields.",
        "Can be required and can be configured with delete options such as prevent deletion and cascade delete."
      ]
    },
    {
      name: "External lookup",
      points: [
        "Links a child standard, custom, or external object to a parent external object.",
        "The standard External ID field on the parent external object is matched against the child external lookup relationship field. External object field values come from an external data source."
      ]
    },
    {
      name: "Indirect lookup",
      points: [
        "Links a child external object to a parent standard or custom object.",
        "When creating an indirect lookup relationship field on an external object, specify the parent object field and child object field to match and associate records. Typically, a custom unique External ID field on the parent is matched against the child's indirect lookup relationship field value from an external source."
      ]
    },
    {
      name: "Hierarchical",
      points: [
        "A special lookup relationship available only for the User object.",
        "It lets users associate one user with another that does not directly or indirectly refer to itself (for example, storing each user's direct manager)."
      ]
    },
    {
      name: "Many-to-many",
      points: [
        "Created by creating a junction object with two master-detail or lookup relationships."
      ]
    }
  ]
};
