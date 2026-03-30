export const apexCheatSheetNote = {
  title: "Apex Code Details",
  parent: "Salesforce Technical Architect",
  createdAt: "2026-03-20T21:55:00+05:30",
  intro: "This expanded note turns the Apex cheat-sheet pages into a structured learning path. Use it to understand not only syntax, but how Apex behaves in real transactions with sharing, triggers, DML, and governor limits.",
  quickStart: [
    {
      title: "1) Learn Language First",
      text: "Start with reserved words, visibility, inheritance, and exception handling. These control the shape and safety of every Apex class."
    },
    {
      title: "2) Then Learn Runtime",
      text: "Move to trigger context, DML operations, and governor-aware standard classes. This is where production behavior and performance are decided."
    },
    {
      title: "3) Practice in Small Labs",
      text: "Build tiny exercises per section. Test in bulk (200 records) and inspect logs to verify lock behavior, query count, and DML row usage."
    }
  ],
  coreBlocks: {
    keywords: [
      { keyword: "abstract", concept: "Partial contract class", usage: "Define shared behavior while forcing child classes to implement required methods." },
      { keyword: "break / continue", concept: "Loop control", usage: "Exit or skip iteration inside loops; useful in parser and filter logic." },
      { keyword: "class / interface / enum", concept: "Type declarations", usage: "Create concrete classes, contracts, and constrained constants." },
      { keyword: "extends / implements", concept: "Inheritance + interface contract", usage: "Use inheritance for reuse and interfaces for behavior guarantees." },
      { keyword: "final / virtual / override / abstract", concept: "Extensibility controls", usage: "Mark what can and cannot be overridden in frameworks and services." },
      { keyword: "global / public / protected / private", concept: "Visibility scope", usage: "Keep scope minimal; use `global` mainly for package-exposed APIs." },
      { keyword: "new / this / super", concept: "Object lifecycle and chaining", usage: "Create objects and access current/superclass context." },
      { keyword: "return / void", concept: "Method contract", usage: "Explicitly define whether a method produces a value." },
      { keyword: "static / transient", concept: "Class-level state and serialization", usage: "Use static for utility/shared constants, transient to skip view-state serialization." },
      { keyword: "if / else / switch / for / while / do", concept: "Control flow", usage: "Build branching and iteration while staying bulk-safe." },
      { keyword: "try / catch / finally / throw", concept: "Exception handling", usage: "Handle expected faults and ensure cleanup/logging in `finally`." },
      { keyword: "with sharing / without sharing", concept: "Record visibility mode", usage: "Prefer `with sharing` by default; use `without sharing` only with explicit justification." }
    ],
    annotations: [
      { name: "@future", why: "Executes static methods asynchronously; useful for non-blocking follow-up work." },
      { name: "@isTest", why: "Marks classes/methods as test-only and supports isolated test execution." },
      { name: "@isTest(SeeAllData=true)", why: "Allows org data access in tests; use sparingly because tests become less deterministic." },
      { name: "@deprecated", why: "Marks classes/methods/variables as legacy to discourage new usage." },
      { name: "@readOnly", why: "Used in Visualforce controller contexts to permit larger read-only query handling." },
      { name: "@remoteAction", why: "Exposes static Apex methods to Visualforce JavaScript remoting." },
      { name: "@RestResource", why: "Defines Apex REST endpoint root for custom integrations." },
      { name: "@HttpGet/@HttpPost/@HttpPut/@HttpPatch/@HttpDelete", why: "Maps REST methods to Apex handlers." }
    ],
    primitives: [
      { type: "Blob", detail: "Binary data", example: "Blob body = Blob.valueOf('hello');" },
      { type: "Boolean", detail: "True/false", example: "Boolean isActive = true;" },
      { type: "Date", detail: "Date without time", example: "Date today = Date.today();" },
      { type: "Datetime", detail: "Date with time and timezone", example: "Datetime now = Datetime.now();" },
      { type: "Decimal", detail: "High precision numeric", example: "Decimal amount = 49.95;" },
      { type: "Double", detail: "Floating-point numeric", example: "Double ratio = 0.42;" },
      { type: "Id", detail: "18-char Salesforce Id value", example: "Id accountId = '001000000000001AAA';" },
      { type: "Integer", detail: "32-bit integer", example: "Integer retries = 3;" },
      { type: "Long", detail: "64-bit integer", example: "Long rows = 500000L;" },
      { type: "String", detail: "Unicode text", example: "String label = 'Apex';" },
      { type: "Time", detail: "Time of day", example: "Time t = Time.newInstance(9, 30, 0, 0);" }
    ],
    collections: [
      { name: "List<T>", detail: "Ordered collection with duplicates allowed.", example: "List<Account> accts = new List<Account>();" },
      { name: "Map<K,V>", detail: "Key/value lookup for fast joins and indexing.", example: "Map<Id, Account> acctById = new Map<Id, Account>(accts);" },
      { name: "Set<T>", detail: "Unique unordered values for dedupe and SOQL IN clauses.", example: "Set<Id> accountIds = new Set<Id>();" }
    ]
  },
  triggerContext: [
    { variable: "Trigger.isExecuting", meaning: "True when running inside a trigger invocation." },
    { variable: "Trigger.isBefore / Trigger.isAfter", meaning: "Indicates whether logic runs pre-commit or post-commit stage." },
    { variable: "Trigger.isInsert / isUpdate / isDelete / isUndelete", meaning: "Current DML event type." },
    { variable: "Trigger.new", meaning: "New versions of sObject records (insert/update/undelete)." },
    { variable: "Trigger.old", meaning: "Prior versions of sObject records (update/delete)." },
    { variable: "Trigger.newMap", meaning: "Map<Id, sObject> of new versions (after insert/update/undelete)." },
    { variable: "Trigger.oldMap", meaning: "Map<Id, sObject> of old versions (update/delete)." },
    { variable: "Trigger.size", meaning: "Number of records in the trigger batch context." }
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
      operation: "delete",
      when: "Soft-delete records to Recycle Bin",
      sample: "delete doomedAccts;"
    },
    {
      operation: "undelete",
      when: "Soft-delete and restore records",
      sample: "undelete savedAccts;"
    },
    {
      operation: "upsert",
      when: "Insert new or update existing based on Id/external Id",
      sample: "upsert contacts External_Id__c;"
    },
    {
      operation: "merge",
      when: "Consolidate duplicates of same sObject type",
      sample: "merge masterAcct mergeAcct;"
    }
  ],
  runtimeUtilities: {
    standardClasses: [
      { name: "System", methods: ["debug()", "assert()", "assertEquals()", "runAs()", "schedule()"] },
      { name: "Math", methods: ["abs()", "ceil()", "floor()", "max()", "min()", "mod()", "pow()", "round()", "sqrt()"] },
      { name: "Date", methods: ["today()", "addDays()", "addMonths()", "toStartOfMonth()"] },
      { name: "Datetime", methods: ["now()", "addHours()", "addMinutes()", "date()", "time()"] },
      { name: "String", methods: ["isBlank()", "contains()", "split()", "substring()", "toLowerCase()", "trim()"] }
    ],
    describeApis: [
      { api: "Schema.DescribeSObjectResult", use: "Check object permissions using isCreateable/isUpdateable/isDeletable/isAccessible." },
      { api: "Schema.DescribeFieldResult", use: "Validate field-level security and metadata before dynamic read/write." },
      { api: "Schema.DisplayType", use: "Understand field datatype when building dynamic mapping or serialization logic." }
    ],
    limits: [
      "Monitor `Limits.getQueries()`, `getDmlRows()`, `getCpuTime()` during heavy loops.",
      "Compare against `getLimitQueries()`, `getLimitDmlRows()`, `getLimitCpuTime()` to stay safe under volume."
    ],
    userInfo: ["getUserId()", "getUserType()", "getProfileId()", "getOrganizationId()", "getSessionId()"]
  },
  interfaces: [
    { name: "Database.Batchable<T>", signature: "start() / execute() / finish()", guidance: "Process large datasets safely in chunks with async governor limits." },
    { name: "Schedulable", signature: "execute(SchedulableContext sc)", guidance: "Run periodic jobs for nightly processing and maintenance." },
    { name: "Messaging.InboundEmailHandler", signature: "handleInboundEmail(email, envelope)", guidance: "Process inbound email payloads and create records safely." },
    { name: "Comparable", signature: "compareTo(Object other)", guidance: "Enable custom sorting for wrapper/domain objects." }
  ],
  checklist: [
    "I can explain when to use `with sharing`, `without sharing`, and inherited behavior.",
    "I can map trigger events to exactly which context variables are available.",
    "I can choose correctly between `insert`, `upsert`, `merge`, and `undelete` in a migration scenario.",
    "I can apply CRUD/FLS checks with Describe APIs before DML in dynamic code.",
    "I can identify and reduce governor risk points in loops and chained method calls.",
    "I can design a bulk-safe service + trigger-handler pattern and test it with 200 records."
  ]
};
