export const apexCheatSheetNote = {
  title: "Apex Code Cheat Sheet",
  parent: "Salesforce Technical Architect",
  createdAt: "2026-03-20T21:55:00+05:30",
  sourceTitle: "SF_apex_code_cheatsheet_FINAL-1",
  sourceHref: "../SF_apex_code_cheatsheet_FINAL-1.pdf",
  intro: "This page converts the PDF cheat sheet into a practical study reference. Use it to understand what each Apex feature is for, when to use it, and what to watch for in trigger and DML-heavy implementations.",
  quickStart: [
    {
      title: "1) Learn in layers",
      text: "Start with keywords and data types, then trigger context, then DML behavior and limits. This mirrors how real Apex code executes in production."
    },
    {
      title: "2) Practice with tiny code",
      text: "For each section, write one minimal snippet in a Developer Edition org. Confirm behavior with Debug Logs and asserts."
    },
    {
      title: "3) Think in architecture terms",
      text: "Always ask: does this run with or without sharing, does it bulkify, and does it stay inside limits?"
    }
  ],
  coreBlocks: {
    keywords: [
      { keyword: "with sharing / without sharing", concept: "Record-level data access", usage: "Use `with sharing` for user-respecting services; use `without sharing` only where system context is explicitly required." },
      { keyword: "public / private / protected / global", concept: "Visibility scope", usage: "Keep scope as small as possible. `global` is mainly for packages/APIs." },
      { keyword: "virtual / override / abstract", concept: "Extensibility and polymorphism", usage: "Use `virtual` and `override` for extension points; use `abstract` for contracts with partial implementation." },
      { keyword: "static / final / this / super", concept: "Class-level state and inheritance", usage: "Prefer immutable constants with `static final`; use `super` in inherited constructors." },
      { keyword: "try / catch / finally / throw", concept: "Error handling", usage: "Catch specific exceptions and add context before rethrowing or handling." },
      { keyword: "for / while / break / continue", concept: "Flow control", usage: "Use loops that remain bulk-safe for trigger record sets and query results." }
    ],
    annotations: [
      { name: "@isTest", why: "Marks test classes/methods so they do not count against Apex code limits." },
      { name: "@isTest(SeeAllData=true)", why: "Allows access to org data; use sparingly because it makes tests less isolated." },
      { name: "@future", why: "Runs logic asynchronously for non-UI-safe or long-running operations." },
      { name: "@readOnly", why: "Permits larger query row handling in suitable read-only contexts." },
      { name: "@remoteAction", why: "Enables Visualforce JavaScript remoting to Apex static methods." },
      { name: "@restResource + @httpGet/@httpPost/...", why: "Exposes Apex classes and methods as REST endpoints." },
      { name: "@deprecated", why: "Flags legacy API pieces that should not be used in future versions." }
    ],
    primitives: [
      "Boolean, Integer, Long, Double, Decimal",
      "String, Id, Date, Datetime, Time, Blob",
      "`Decimal` for financial precision; `Double` for floating math"
    ],
    collections: [
      { name: "List<T>", detail: "Ordered, index-based collection. Allows duplicates." },
      { name: "Set<T>", detail: "Unordered unique values. Good for deduplication and `IN` filtering." },
      { name: "Map<K,V>", detail: "Key/value lookup. Essential for bulk trigger joins by `Id`." }
    ]
  },
  triggerContext: [
    { variable: "Trigger.isExecuting", meaning: "True only in trigger context." },
    { variable: "Trigger.isInsert / isUpdate / isDelete / isUndelete", meaning: "Current DML event type." },
    { variable: "Trigger.isBefore / isAfter", meaning: "Before-save or after-save phase." },
    { variable: "Trigger.new / Trigger.old", meaning: "Lists of new/old records by event support." },
    { variable: "Trigger.newMap / Trigger.oldMap", meaning: "Id-indexed maps for efficient record comparison." },
    { variable: "Trigger.size", meaning: "Batch size in this trigger invocation." }
  ],
  dmlPatterns: [
    {
      operation: "insert",
      when: "Create new records",
      sample: "Lead l = new Lead(Company='ABC', LastName='Smith');\ninsert l;"
    },
    {
      operation: "update",
      when: "Modify existing records",
      sample: "Account a = [SELECT Id, BillingCity FROM Account LIMIT 1];\na.BillingCity = 'San Francisco';\nupdate a;"
    },
    {
      operation: "delete / undelete",
      when: "Soft-delete and restore records",
      sample: "delete doomedAccts;\nundelete savedAccts;"
    },
    {
      operation: "upsert",
      when: "Insert-or-update in one operation",
      sample: "List<Account> accts = new List<Account>{ new Account(Name='Acme') };\nupsert accts;"
    },
    {
      operation: "merge",
      when: "Consolidate duplicates of same sObject type",
      sample: "merge masterAcct mergeAcct;"
    }
  ],
  runtimeUtilities: {
    system: ["assert", "assertEquals", "debug", "runAs", "schedule", "today", "now"],
    math: ["abs", "ceil", "floor", "max", "min", "mod", "pow", "random", "round", "sqrt"],
    describe: [
      "Use `Schema.SObjectType.Account` and `DescribeFieldResult` for dynamic metadata checks.",
      "Check `isAccessible`, `isCreateable`, `isUpdateable` before dynamic operations."
    ],
    limits: [
      "Track consumption with `Limits.getQueries()`, `getDMLRows()`, `getCPUTime()`.",
      "Guardrails come from `Limits.getLimitQueries()`, `getLimitDMLRows()`, etc."
    ],
    userInfo: ["getUserId", "getProfileId", "getLocale", "getOrganizationId", "getSessionId"]
  },
  interfaces: [
    { name: "Database.Batchable", signature: "start(...) / execute(...) / finish(...)" },
    { name: "Schedulable", signature: "execute(SchedulableContext sc)" },
    { name: "Messaging.InboundEmailHandler", signature: "handleInboundEmail(...)" },
    { name: "Comparable", signature: "compareTo(Object other)" }
  ],
  checklist: [
    "I can explain `with sharing` vs `without sharing` with a real scenario.",
    "I can use `Map<Id, SObject>` to compare old/new trigger states in bulk.",
    "I know when to use `upsert` and when `merge` is more appropriate.",
    "I can defend async choices: `@future` vs synchronous execution tradeoff.",
    "I actively monitor governor usage with the `Limits` class while coding.",
    "I can design one end-to-end Apex flow using test-first approach."
  ]
};
