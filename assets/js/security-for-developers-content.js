export const securityForDevelopersNote = {
  title: "Security for Developers",
  parent: "Salesforce Technical Architect",
  createdAt: "2026-03-30T10:55:00+05:30",
  intro: "This page consolidates your Salesforce Security for Developers cheatsheet screenshots into an implementation-first guide. It focuses on how to enforce sharing, object/field permissions, safe output encoding, and secure runtime operations.",
  priorities: [
    "Always validate access at three layers: record-level sharing, object-level CRUD, and field-level security.",
    "Always encode user-controlled output for the target context (HTML, JavaScript, URL, or mixed contexts).",
    "Use centralized helper classes or wrappers so security decisions are consistent across controllers and services.",
    "Store sensitive defaults in protected custom settings/custom metadata and use Crypto methods for confidentiality and integrity where needed."
  ],
  sharingKeywords: [
    { keyword: "with sharing", guidance: "Enforces the current user's record-level sharing rules." },
    { keyword: "without sharing", guidance: "Runs in system context for record visibility. Use only when intentionally required and compensating controls exist." },
    { keyword: "inherited sharing / omitted sharing clause", guidance: "Inherits sharing mode from the entry context. Prefer explicit sharing mode in core services for clarity." }
  ],
  escapingFunctions: [
    { fn: "HTMLENCODE()", usage: "Escapes text for safe rendering in HTML." },
    { fn: "JSENCODE()", usage: "Escapes text for JavaScript string contexts." },
    { fn: "JSINHTMLENCODE()", usage: "Escapes JavaScript text embedded inside HTML." },
    { fn: "URLENCODE()", usage: "Escapes values used in URL parameters." }
  ],
  crudChecks: [
    { method: "isCreateable()", meaning: "Checks whether records of the object can be created by the current user." },
    { method: "isAccessible()", meaning: "Checks whether records of the object can be read by the current user." },
    { method: "isUpdateable()", meaning: "Checks whether records of the object can be updated by the current user." },
    { method: "isDeletable()", meaning: "Checks whether records of the object can be deleted by the current user." }
  ],
  flsChecks: [
    { method: "isCreateable()", meaning: "Checks whether the field can be set during record creation." },
    { method: "isAccessible()", meaning: "Checks whether the field can be read." },
    { method: "isUpdateable()", meaning: "Checks whether the field can be edited." }
  ],
  esapi: {
    intro: "The screenshot references Force.com ESAPI helper patterns and an access-control wrapper class for enforcing CRUD/FLS and operation mode at runtime.",
    accessControlMethods: [
      { method: "setSharingMode(...)", reason: "Configures whether operations run with sharing or inherited mode." },
      { method: "setOperationMode(...)", reason: "Controls whether reads/writes are allowed under the current context." },
      { method: "insertAsUser(...)", reason: "Insert while enforcing current-user access checks." },
      { method: "updateAsUser(...)", reason: "Update while enforcing current-user access checks." },
      { method: "deleteAsUser(...)", reason: "Delete while enforcing current-user access checks." },
      { method: "getViewableFields(...)", reason: "Returns fields the current user can read." },
      { method: "getUpdateableFields(...)", reason: "Returns fields the current user can edit." },
      { method: "getCreateableFields(...)", reason: "Returns fields the current user can set on create." },
      { method: "isAuthorizedToView(...)", reason: "Checks record-level read authorization." },
      { method: "isAuthorizedToCreate(...)", reason: "Checks object/record create authorization." },
      { method: "isAuthorizedToUpdate(...)", reason: "Checks object/record update authorization." },
      { method: "isAuthorizedToDelete(...)", reason: "Checks object/record delete authorization." }
    ],
    constants: [
      { key: "SFDC_HTMLENCODE", detail: "Escaping constant/helper for HTML output contexts." },
      { key: "SFDC_JSENCODE", detail: "Escaping constant/helper for JavaScript output contexts." },
      { key: "SFDC_JSINHTMLENCODE", detail: "Escaping helper for JavaScript-in-HTML contexts." },
      { key: "SFDC_URLENCODE", detail: "Escaping helper for URL contexts." }
    ]
  },
  customSettingsMethods: [
    { method: "getAll()", usage: "Returns a map of all custom setting records for list custom settings." },
    { method: "getInstance(...)", usage: "Returns the setting record for a dataset/user/profile identifier depending on setting type." },
    { method: "getValues(...)", usage: "Returns values for the specified dataset name/Id/profile/user key." },
    { method: "getOrgDefaults()", usage: "Returns org-level defaults (Hierarchy Custom Settings)." }
  ],
  cryptoMethods: [
    { method: "encrypt()", purpose: "Encrypts data using a provided algorithm, key, and initialization vector." },
    { method: "encryptWithManagedIV()", purpose: "Encrypts data while Salesforce manages the IV." },
    { method: "decrypt()", purpose: "Decrypts ciphertext using algorithm, key, and IV." },
    { method: "decryptWithManagedIV()", purpose: "Decrypts data encrypted with managed IV." },
    { method: "generateAesKey()", purpose: "Generates an AES key for symmetric encryption." },
    { method: "generateDigest()", purpose: "Computes one-way hash digests (for integrity/fingerprinting)." },
    { method: "generateMac()", purpose: "Computes a message authentication code for tamper detection." },
    { method: "getRandomInteger()", purpose: "Generates a random integer value." },
    { method: "getRandomLong()", purpose: "Generates a random long value." },
    { method: "sign()", purpose: "Creates digital signatures using a private key and algorithm." },
    { method: "signWithCertificate()", purpose: "Creates digital signatures using a named certificate." }
  ]
};
