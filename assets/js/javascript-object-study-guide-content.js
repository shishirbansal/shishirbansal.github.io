export const javascriptObjectStudyGuideNote = {
  title: "JavaScript Object Methods Study Guide",
  parent: "Javascript Study Guides",
  createdAt: "2026-03-20T16:50:00+05:30",
  subtitle: "Detailed syntax, parameters, return values, mutation behavior, and simple + complex examples.",
  includes: [
    "Core object methods and object operations",
    "Inspection, extraction, cloning, and merge patterns",
    "Mutability control with freeze and seal",
    "Transformation using entries and fromEntries",
    "Quick comparison table, interview notes, and practice tasks"
  ],
  startHere: [
    "Begin with Object.keys(), Object.values(), and Object.entries().",
    "Then practice hasOwnProperty(), destructuring, and spread.",
    "Finish with Object.assign(), Object.freeze(), Object.seal(), and Object.fromEntries()."
  ],
  revisionOrder: [
    "Object.keys", "Object.values", "Object.entries",
    "hasOwnProperty", "Destructuring", "Spread Operator",
    "Object.assign", "Object.freeze", "Object.seal", "Object.fromEntries"
  ],
  sections: [
    {
      title: "Core Inspection Methods",
      methods: [
        {
          name: "Object.keys()",
          purpose: "Returns an array of an object's own enumerable property names.",
          syntax: "Object.keys(object)",
          parameters: "object: object whose keys are needed",
          returns: "Array of strings",
          mutates: false,
          simpleExample: `const user = { name: "Shishir", age: 34, city: "Meerut" };
console.log(Object.keys(user)); // ["name", "age", "city"]`,
          practicalExample: `const permissions = { read: true, write: false, delete: false, export: true };
const enabled = Object.keys(permissions).filter((key) => permissions[key]);
// ["read", "export"]`
        },
        {
          name: "Object.values()",
          purpose: "Returns an array of an object's own enumerable property values.",
          syntax: "Object.values(object)",
          parameters: "object: object whose values are needed",
          returns: "Array",
          mutates: false,
          simpleExample: `const product = { name: "Laptop", price: 50000, inStock: true };
console.log(Object.values(product));`,
          practicalExample: `const monthlySales = { january: 20000, february: 30000, march: 25000, april: 40000 };
const totalSales = Object.values(monthlySales).reduce((sum, value) => sum + value, 0);`
        },
        {
          name: "Object.entries()",
          purpose: "Returns key-value pairs from an object.",
          syntax: "Object.entries(object)",
          parameters: "object: object whose entries are needed",
          returns: "Array of [key, value] pairs",
          mutates: false,
          simpleExample: `const user = { name: "Shishir", role: "Technical Architect" };
console.log(Object.entries(user));`,
          practicalExample: `const marks = { math: 90, science: 85, english: 92 };
const formatted = Object.entries(marks).map(([subject, score]) => \`\${subject.toUpperCase()}: \${score}\`);`
        }
      ]
    },
    {
      title: "Copy, Merge, and Property Checks",
      methods: [
        {
          name: "Object.assign()",
          purpose: "Copies source properties into a target object.",
          syntax: "Object.assign(target, source1, source2, ...)",
          parameters: "target object and one or more source objects",
          returns: "Target object",
          mutates: true,
          simpleExample: `const target = { a: 1 };
const source = { b: 2 };
const result = Object.assign(target, source);`,
          practicalExample: `const defaultSettings = { theme: "light", notifications: true, fontSize: 14 };
const userSettings = { theme: "dark", fontSize: 16 };
const finalSettings = Object.assign({}, defaultSettings, userSettings);`
        },
        {
          name: "hasOwnProperty()",
          purpose: "Checks if a property exists directly on an object.",
          syntax: "object.hasOwnProperty(propertyName)",
          parameters: "propertyName: property to check",
          returns: "Boolean",
          mutates: false,
          simpleExample: `const user = { name: "Shishir", role: "Architect" };
console.log(user.hasOwnProperty("name")); // true`,
          practicalExample: `function printIfOwnProperty(obj, key) {
  if (obj.hasOwnProperty(key)) {
    console.log(\`Value of \${key}:\`, obj[key]);
  } else {
    console.log(\`\${key} is not present in object\`);
  }
}`
        },
        {
          name: "Object Destructuring",
          purpose: "Extracts properties into variables.",
          syntax: "const { key1, key2 } = object",
          parameters: "Language syntax (not a method)",
          returns: "Creates variables",
          mutates: false,
          simpleExample: `const user = { name: "Shishir", age: 34 };
const { name, age } = user;`,
          practicalExample: `const employee = {
  id: 201,
  personalInfo: { firstName: "Neha", lastName: "Sharma" },
  role: "Developer"
};
const { id, role, personalInfo: { firstName, lastName } } = employee;`
        },
        {
          name: "Spread Operator (Objects)",
          purpose: "Clones, merges, and immutably updates objects.",
          syntax: "{ ...obj } | { ...obj1, ...obj2 }",
          parameters: "Language syntax (not a method)",
          returns: "New object",
          mutates: false,
          simpleExample: `const user = { name: "Shishir", role: "Architect" };
const copiedUser = { ...user };`,
          practicalExample: `const profile = { name: "Shishir", city: "Meerut", role: "Developer" };
const updatedProfile = { ...profile, role: "Technical Architect" };`
        }
      ]
    },
    {
      title: "Object Mutability Controls and Transformations",
      methods: [
        {
          name: "Object.freeze()",
          purpose: "Prevents add/delete/update on object properties.",
          syntax: "Object.freeze(object)",
          parameters: "object to freeze",
          returns: "Same object",
          mutates: true,
          simpleExample: `const config = { appName: "Study App" };
Object.freeze(config);
config.appName = "New App"; // ignored`,
          practicalExample: `const constants = { API_URL: "https://api.example.com", APP_NAME: "Dashboard", VERSION: "1.0.0" };
Object.freeze(constants);
constants.VERSION = "2.0.0"; // ignored`
        },
        {
          name: "Object.seal()",
          purpose: "Blocks add/delete but allows updates on existing keys.",
          syntax: "Object.seal(object)",
          parameters: "object to seal",
          returns: "Same object",
          mutates: true,
          simpleExample: `const user = { name: "Shishir" };
Object.seal(user);
user.name = "Amit"; // allowed`,
          practicalExample: `const account = { username: "admin", status: "active" };
Object.seal(account);
account.status = "inactive"; // allowed
delete account.username; // blocked`
        },
        {
          name: "Object.fromEntries()",
          purpose: "Converts key-value pairs back into an object.",
          syntax: "Object.fromEntries(iterable)",
          parameters: "iterable of [key, value] pairs",
          returns: "New object",
          mutates: false,
          simpleExample: `const entries = [["name", "Shishir"], ["city", "Meerut"]];
const obj = Object.fromEntries(entries);`,
          practicalExample: `const user = { name: "Shishir", age: 34, role: "Architect" };
const filtered = Object.fromEntries(
  Object.entries(user).filter(([, value]) => typeof value === "string")
);`
        }
      ]
    }
  ],
  quickComparison: [
    { method: "Object.keys()", purpose: "Get all keys", returns: "Array", mutates: "No" },
    { method: "Object.values()", purpose: "Get all values", returns: "Array", mutates: "No" },
    { method: "Object.entries()", purpose: "Get key-value pairs", returns: "Array of arrays", mutates: "No" },
    { method: "Object.assign()", purpose: "Copy or merge objects", returns: "Target object", mutates: "Yes (target)" },
    { method: "hasOwnProperty()", purpose: "Check own property", returns: "Boolean", mutates: "No" },
    { method: "Destructuring", purpose: "Extract values into variables", returns: "Variables created", mutates: "No" },
    { method: "Spread Operator", purpose: "Copy/merge/update objects", returns: "New object", mutates: "No" },
    { method: "Object.freeze()", purpose: "Prevent all structural and value changes", returns: "Same object", mutates: "Yes" },
    { method: "Object.seal()", purpose: "Prevent add/delete, allow update", returns: "Same object", mutates: "Yes" },
    { method: "Object.fromEntries()", purpose: "Convert entries array to object", returns: "New object", mutates: "No" }
  ],
  interviewNotes: [
    "Object.keys() returns keys, Object.values() returns values, Object.entries() returns [key, value] pairs.",
    "Object.assign() mutates target; spread usually reads cleaner and returns a new object.",
    "hasOwnProperty() checks only own properties, not prototype properties.",
    "freeze() blocks add/delete/update, seal() blocks add/delete but allows update.",
    "Destructuring and spread are syntax features, not object methods."
  ],
  practiceTasks: [
    "Use Object.keys() to list all keys from a user object.",
    "Use Object.values() to calculate total marks.",
    "Use Object.entries() to format object data into strings.",
    "Merge two config objects using Object.assign().",
    "Merge the same objects using spread syntax.",
    "Use destructuring to extract name and email.",
    "Rename a destructured property into a custom variable name.",
    "Use hasOwnProperty() to check if salary exists.",
    "Freeze an object and verify it does not change.",
    "Seal an object and test update/add/delete behavior.",
    "Convert entries back to object with Object.fromEntries().",
    "Filter object keys using Object.entries() + Object.fromEntries()."
  ]
};
