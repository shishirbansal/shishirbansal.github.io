export const javascriptStudyGuideNote = {
  title: "JavaScript Complete Methods Study Guide",
  parent: "Javascript Study Guides",
  createdAt: "2026-03-16T10:50:00+05:30",
  summary: "Arrays, Strings, and Objects with simple and complex examples for daily practice.",
  keyStats: [
    { key: "Coverage", value: "30+ methods" },
    { key: "Examples", value: "60+ code examples" },
    { key: "Format", value: "Simple + complex + real-world patterns" }
  ],
  arrayMethods: [
    { name: "push / pop", syntax: "arr.push(item1, item2) // arr.pop()", summary: "Add/remove from array end; common for stack/history patterns." },
    { name: "shift / unshift", syntax: "arr.shift() // arr.unshift(item1)", summary: "Add/remove from array start; useful for queue/FIFO flows." },
    { name: "slice", syntax: "arr.slice(start, end)", summary: "Return shallow copy without mutating original; useful for pagination." },
    { name: "splice", syntax: "arr.splice(start, deleteCount, ...items)", summary: "Mutates array for remove/replace/insert at any index." },
    { name: "concat", syntax: "arr.concat(arr2, arr3)", summary: "Merge arrays into new array; keeps originals unchanged." },
    { name: "indexOf / includes", syntax: "arr.indexOf(value) // arr.includes(value)", summary: "Find value index or membership quickly." },
    { name: "find / findIndex", syntax: "arr.find(fn) // arr.findIndex(fn)", summary: "Locate first matching element/index by condition." },
    { name: "map", syntax: "arr.map(fn)", summary: "One-to-one transformation into a new array." },
    { name: "filter", syntax: "arr.filter(fn)", summary: "Keep only elements that pass a condition." },
    { name: "reduce", syntax: "arr.reduce((acc, cur) => ..., init)", summary: "Accumulate to one result (sum, grouping, object maps)." },
    { name: "forEach", syntax: "arr.forEach(fn)", summary: "Run side effects on each item; returns undefined." },
    { name: "some / every", syntax: "arr.some(fn) // arr.every(fn)", summary: "Boolean checks for any/all items, with short-circuiting." },
    { name: "sort / reverse", syntax: "arr.sort(compareFn) // arr.reverse()", summary: "Sort/reverse in place; mutates original array." },
    { name: "flat / flatMap", syntax: "arr.flat(depth) // arr.flatMap(fn)", summary: "Flatten nested arrays; flatMap maps then flattens one level." }
  ],
  stringMethods: [
    { name: "length", syntax: "str.length", summary: "Character count property, including spaces." },
    { name: "toUpperCase / toLowerCase", syntax: "str.toUpperCase() // str.toLowerCase()", summary: "Case normalization for comparisons/search." },
    { name: "trim / trimStart / trimEnd", syntax: "str.trim()", summary: "Clean whitespace around input strings." },
    { name: "slice (String)", syntax: "str.slice(start, end)", summary: "Extract substring; supports negative indexes." },
    { name: "substring", syntax: "str.substring(start, end)", summary: "Similar to slice but no negative indexes." },
    { name: "replace / replaceAll", syntax: "str.replace(a, b) // str.replaceAll(a, b)", summary: "Replace first or all matches; supports regex." },
    { name: "split", syntax: "str.split(separator, limit)", summary: "Split string into array pieces." },
    { name: "includes", syntax: "str.includes(text, start)", summary: "Case-sensitive substring check." },
    { name: "startsWith / endsWith", syntax: "str.startsWith(x) // str.endsWith(x)", summary: "Prefix/suffix checks for route/file logic." },
    { name: "charAt", syntax: "str.charAt(index)", summary: "Read character at index; returns empty string if out of range." }
  ],
  objectMethods: [
    { name: "Object.keys", syntax: "Object.keys(obj)", summary: "Get own enumerable keys as array." },
    { name: "Object.values", syntax: "Object.values(obj)", summary: "Get own enumerable values as array." },
    { name: "Object.entries", syntax: "Object.entries(obj)", summary: "Get [key, value] pairs for transforms and loops." },
    { name: "Object.assign", syntax: "Object.assign(target, ...sources)", summary: "Shallow merge into target object (mutates target)." },
    { name: "hasOwnProperty", syntax: "obj.hasOwnProperty(key)", summary: "Check if key exists directly on object." },
    { name: "Destructuring", syntax: "const { a } = obj // const [x] = arr", summary: "Unpack object/array values into variables." },
    { name: "Spread Operator", syntax: "{ ...obj } // [ ...arr ]", summary: "Clone/merge data structures and build immutable updates." }
  ],
  examples: [
    {
      title: "Array reduce for grouping",
      code: `const grouped = items.reduce((acc, item) => {
  if (!acc[item.cat]) acc[item.cat] = [];
  acc[item.cat].push(item.name);
  return acc;
}, {});`
    },
    {
      title: "String cleanup pipeline",
      code: `function toSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replaceAll(" ", "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-");
}`
    },
    {
      title: "Immutable object update with spread",
      code: `const newState = {
  ...state,
  user: { ...state.user, age: 29 },
  cart: [...state.cart, { id: 2, qty: 1 }]
};`
    }
  ],
  cheatSheet: [
    { method: "push / pop", returns: "New length / removed element", mutates: "Yes" },
    { method: "slice", returns: "New array", mutates: "No" },
    { method: "splice", returns: "Array of removed elements", mutates: "Yes" },
    { method: "map / filter", returns: "New array", mutates: "No" },
    { method: "reduce", returns: "Single accumulated value", mutates: "No" },
    { method: "sort / reverse", returns: "Sorted/reversed same array", mutates: "Yes" },
    { method: "str.slice / replace / split", returns: "New value", mutates: "No" },
    { method: "Object.keys / values / entries", returns: "Arrays", mutates: "No" },
    { method: "Object.assign", returns: "Target object", mutates: "Yes (target)" }
  ],
  studyPlan: [
    "Day 1-2: Arrays basics (push/pop, shift/unshift, slice/splice).",
    "Day 3-4: Search + transforms (find, map, filter, reduce).",
    "Day 5: String cleanup and parsing patterns.",
    "Day 6: Object transformations (keys/values/entries/assign).",
    "Day 7: Build one mini project using at least 10 methods."
  ]
};
