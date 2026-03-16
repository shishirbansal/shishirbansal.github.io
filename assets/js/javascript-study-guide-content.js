export const javascriptStudyGuideNote = {
  title: "JavaScript Array Methods Study Guide",
  parent: "Javascript Study Guides",
  createdAt: "2026-03-16T11:10:00+05:30",
  subtitle: "Detailed reference with syntax, parameters, return value, mutation behavior, and worked examples.",
  includes: [
    "Core insert and removal methods",
    "Copying, merging, and searching methods",
    "Transformation and logical methods",
    "Ordering and flattening methods",
    "Quick comparison table, interview notes, and practice tasks"
  ],
  startHere: [
    "Start with push, pop, shift, and unshift.",
    "Study slice versus splice carefully.",
    "Practice map, filter, reduce, find, some, and every daily."
  ],
  revisionOrder: [
    "push", "pop", "shift", "unshift",
    "slice", "splice",
    "indexOf", "includes", "find", "findIndex",
    "map", "filter", "reduce", "forEach",
    "some", "every",
    "sort", "reverse",
    "flat", "flatMap"
  ],
  sections: [
    {
      title: "Core Insert and Removal Methods",
      methods: [
        {
          name: "push()",
          purpose: "Adds one or more elements to the end of an array.",
          syntax: "array.push(item1, item2, ..., itemN)",
          parameters: "item1...itemN: elements to add",
          returns: "New length of the array",
          mutates: true,
          simpleExample: `const fruits = ["apple", "banana"];
const newLength = fruits.push("mango");
// fruits: ["apple", "banana", "mango"]
// newLength: 3`,
          practicalExample: `const cart = [{ name: "Laptop", qty: 1, price: 50000 }];
cart.push(
  { name: "Mouse", qty: 2, price: 800 },
  { name: "Keyboard", qty: 1, price: 1500 }
);`
        },
        {
          name: "pop()",
          purpose: "Removes the last element from an array.",
          syntax: "array.pop()",
          parameters: "None",
          returns: "Removed element, or undefined if empty",
          mutates: true,
          simpleExample: `const nums = [10, 20, 30];
const removed = nums.pop();
// nums: [10, 20]
// removed: 30`,
          practicalExample: `const undoStack = [
  { action: "type", value: "H" },
  { action: "type", value: "e" },
  { action: "delete", value: "x" }
];
const lastAction = undoStack.pop();`
        },
        {
          name: "shift()",
          purpose: "Removes the first element from an array.",
          syntax: "array.shift()",
          parameters: "None",
          returns: "Removed element, or undefined if empty",
          mutates: true,
          simpleExample: `const colors = ["red", "blue", "green"];
const removed = colors.shift();
// colors: ["blue", "green"]
// removed: "red"`,
          practicalExample: `const ticketQueue = [
  { id: 101, user: "Amit" },
  { id: 102, user: "Neha" },
  { id: 103, user: "Rahul" }
];
const nextTicket = ticketQueue.shift();`
        },
        {
          name: "unshift()",
          purpose: "Adds one or more elements to the beginning of an array.",
          syntax: "array.unshift(item1, item2, ..., itemN)",
          parameters: "item1...itemN: elements to add",
          returns: "New length of the array",
          mutates: true,
          simpleExample: `const nums = [2, 3];
const newLength = nums.unshift(1);
// nums: [1, 2, 3]
// newLength: 3`,
          practicalExample: `const notifications = [
  { msg: "Order shipped" },
  { msg: "Payment received" }
];
notifications.unshift(
  { msg: "Critical server alert" },
  { msg: "New admin login" }
);`
        }
      ]
    },
    {
      title: "Copying, Merging, and Searching Methods",
      methods: [
        {
          name: "slice()",
          purpose: "Returns a shallow copy of part of an array.",
          syntax: "array.slice(start) | array.slice(start, end)",
          parameters: "start: start index, end: stop index (excluded)",
          returns: "New array",
          mutates: false,
          simpleExample: `const nums = [10, 20, 30, 40, 50];
const result = nums.slice(1, 4);
// result: [20, 30, 40]
// nums unchanged`,
          practicalExample: `const leaderboard = [
  { name: "A", score: 99 },
  { name: "B", score: 95 },
  { name: "C", score: 90 },
  { name: "D", score: 88 }
];
const topThree = leaderboard.slice(0, 3);`
        },
        {
          name: "splice()",
          purpose: "Removes, replaces, or inserts elements anywhere.",
          syntax: "array.splice(start, deleteCount, ...items)",
          parameters: "start index, deleteCount, optional items",
          returns: "Array of removed elements",
          mutates: true,
          simpleExample: `const nums = [1, 2, 3, 4];
const removed = nums.splice(1, 2);
// nums: [1, 4]
// removed: [2, 3]`,
          practicalExample: `const employees = ["Amit", "Neha", "Ravi", "Pooja"];
const removed = employees.splice(1, 2, "Karan", "Sana");
// employees: ["Amit", "Karan", "Sana", "Pooja"]`
        },
        {
          name: "concat()",
          purpose: "Merges arrays or values into a new array.",
          syntax: "array.concat(value1, value2, ..., valueN)",
          parameters: "Arrays or values to merge",
          returns: "New array",
          mutates: false,
          simpleExample: `const a = [1, 2];
const b = [3, 4];
const result = a.concat(b);
// result: [1, 2, 3, 4]`,
          practicalExample: `const frontend = ["HTML", "CSS"];
const backend = ["Node.js", "MongoDB"];
const fullStack = frontend.concat(backend, "Git");`
        },
        {
          name: "indexOf()",
          purpose: "Returns the first index of a value.",
          syntax: "array.indexOf(searchElement, fromIndex?)",
          parameters: "searchElement, optional fromIndex",
          returns: "Index or -1",
          mutates: false,
          simpleExample: `const fruits = ["apple", "banana", "mango"];
fruits.indexOf("banana"); // 1
fruits.indexOf("grapes"); // -1`,
          practicalExample: `const roles = ["user", "editor", "admin", "editor"];
const firstEditorIndex = roles.indexOf("editor", 1);`
        },
        {
          name: "includes()",
          purpose: "Checks whether an array contains a value.",
          syntax: "array.includes(searchElement, fromIndex?)",
          parameters: "searchElement, optional fromIndex",
          returns: "true or false",
          mutates: false,
          simpleExample: `const nums = [10, 20, 30];
nums.includes(20); // true
nums.includes(50); // false`,
          practicalExample: `const allowedStatuses = ["pending", "approved", "rejected"];
const isValidStatus = (status) => allowedStatuses.includes(status);`
        },
        {
          name: "find()",
          purpose: "Returns the first element matching a condition.",
          syntax: "array.find(callbackFn, thisArg?)",
          parameters: "callbackFn, optional thisArg",
          returns: "Element or undefined",
          mutates: false,
          simpleExample: `const nums = [5, 12, 8, 130];
const result = nums.find((num) => num > 10);
// result: 12`,
          practicalExample: `const users = [
  { id: 1, name: "Amit", active: false },
  { id: 2, name: "Neha", active: true }
];
const firstActiveUser = users.find((user) => user.active);`
        },
        {
          name: "findIndex()",
          purpose: "Returns index of first element matching a condition.",
          syntax: "array.findIndex(callbackFn, thisArg?)",
          parameters: "callbackFn, optional thisArg",
          returns: "Index or -1",
          mutates: false,
          simpleExample: `const nums = [4, 6, 8, 11];
const index = nums.findIndex((num) => num % 2 !== 0);
// index: 3`,
          practicalExample: `const tasks = [
  { id: 101, status: "done" },
  { id: 102, status: "pending" }
];
const pendingIndex = tasks.findIndex((task) => task.status === "pending");`
        }
      ]
    },
    {
      title: "Transformation and Logical Methods",
      methods: [
        {
          name: "map()",
          purpose: "Creates a new array by transforming every element.",
          syntax: "array.map(callbackFn, thisArg?)",
          parameters: "callbackFn, optional thisArg",
          returns: "New array",
          mutates: false,
          simpleExample: `const nums = [1, 2, 3];
const squares = nums.map((num) => num * num);
// [1, 4, 9]`,
          practicalExample: `const products = [
  { name: "Laptop", price: 50000, discount: 10 },
  { name: "Mouse", price: 1000, discount: 5 }
];
const finalPrices = products.map((product) => ({
  name: product.name,
  finalPrice: product.price - (product.price * product.discount) / 100
}));`
        },
        {
          name: "filter()",
          purpose: "Keeps only elements that satisfy a condition.",
          syntax: "array.filter(callbackFn, thisArg?)",
          parameters: "callbackFn, optional thisArg",
          returns: "New array",
          mutates: false,
          simpleExample: `const nums = [1, 2, 3, 4, 5, 6];
const evenNums = nums.filter((num) => num % 2 === 0);
// [2, 4, 6]`,
          practicalExample: `const orders = [
  { id: 1, amount: 500, status: "completed" },
  { id: 2, amount: 700, status: "completed" },
  { id: 3, amount: 100, status: "cancelled" }
];
const highValueCompleted = orders.filter(
  (order) => order.status === "completed" && order.amount >= 600
);`
        },
        {
          name: "reduce()",
          purpose: "Reduces array values into one accumulated result.",
          syntax: "array.reduce(callbackFn, initialValue?)",
          parameters: "callbackFn and optional initialValue",
          returns: "Final accumulated value",
          mutates: false,
          simpleExample: `const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
// 10`,
          practicalExample: `const employees = [
  { name: "Amit", dept: "IT", salary: 50000 },
  { name: "Neha", dept: "HR", salary: 40000 },
  { name: "Ravi", dept: "IT", salary: 60000 }
];
const salaryByDept = employees.reduce((acc, emp) => {
  if (!acc[emp.dept]) acc[emp.dept] = 0;
  acc[emp.dept] += emp.salary;
  return acc;
}, {});`
        },
        {
          name: "forEach()",
          purpose: "Runs a function once for each element.",
          syntax: "array.forEach(callbackFn, thisArg?)",
          parameters: "callbackFn, optional thisArg",
          returns: "undefined",
          mutates: false,
          simpleExample: `const fruits = ["apple", "banana", "mango"];
fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});`,
          practicalExample: `const invoices = [
  { id: 1, amount: 1000 },
  { id: 2, amount: 2500 },
  { id: 3, amount: 700 }
];
let total = 0;
invoices.forEach((invoice) => {
  total += invoice.amount;
});`
        },
        {
          name: "some()",
          purpose: "Checks whether at least one element matches.",
          syntax: "array.some(callbackFn, thisArg?)",
          parameters: "callbackFn, optional thisArg",
          returns: "true or false",
          mutates: false,
          simpleExample: `const nums = [1, 3, 5, 8];
const hasEven = nums.some((num) => num % 2 === 0);
// true`,
          practicalExample: `const users = [
  { name: "Amit", isAdmin: false },
  { name: "Neha", isAdmin: false },
  { name: "Ravi", isAdmin: true }
];
const hasAdmin = users.some((user) => user.isAdmin);`
        },
        {
          name: "every()",
          purpose: "Checks whether all elements match.",
          syntax: "array.every(callbackFn, thisArg?)",
          parameters: "callbackFn, optional thisArg",
          returns: "true or false",
          mutates: false,
          simpleExample: `const nums = [2, 4, 6, 8];
const allEven = nums.every((num) => num % 2 === 0);
// true`,
          practicalExample: `const students = [
  { name: "A", marks: 70 },
  { name: "B", marks: 82 },
  { name: "C", marks: 65 }
];
const allPassed = students.every((student) => student.marks >= 35);`
        }
      ]
    },
    {
      title: "Ordering and Flattening Methods",
      methods: [
        {
          name: "sort()",
          purpose: "Sorts the elements of an array in place.",
          syntax: "array.sort(compareFn?)",
          parameters: "Optional compareFn for custom order",
          returns: "Same array reference, sorted",
          mutates: true,
          simpleExample: `const nums = [40, 5, 100, 12];
nums.sort((a, b) => a - b);
// [5, 12, 40, 100]`,
          practicalExample: `const employees = [
  { name: "Amit", salary: 50000 },
  { name: "Neha", salary: 75000 },
  { name: "Ravi", salary: 60000 }
];
employees.sort((a, b) => b.salary - a.salary);`
        },
        {
          name: "reverse()",
          purpose: "Reverses the order of elements in place.",
          syntax: "array.reverse()",
          parameters: "None",
          returns: "Same array reference, reversed",
          mutates: true,
          simpleExample: `const nums = [1, 2, 3, 4];
nums.reverse();
// [4, 3, 2, 1]`,
          practicalExample: `const timeline = [
  { step: "Applied" },
  { step: "Interviewed" },
  { step: "Selected" }
];
timeline.reverse();`
        },
        {
          name: "flat()",
          purpose: "Flattens nested arrays to a specified depth.",
          syntax: "array.flat(depth?)",
          parameters: "Optional depth (default is 1)",
          returns: "New flattened array",
          mutates: false,
          simpleExample: `const arr = [1, 2, [3, 4]];
const result = arr.flat();
// [1, 2, 3, 4]`,
          practicalExample: `const categories = [
  "Electronics",
  ["Laptop", "Mobile"],
  [["Gaming Laptop", "Ultrabook"], "Tablet"]
];
const flattened = categories.flat(2);`
        },
        {
          name: "flatMap()",
          purpose: "Maps each element and flattens one level.",
          syntax: "array.flatMap(callbackFn, thisArg?)",
          parameters: "callbackFn, optional thisArg",
          returns: "New array",
          mutates: false,
          simpleExample: `const words = ["hello", "world"];
const chars = words.flatMap((word) => word.split(""));
// ["h","e","l","l","o","w","o","r","l","d"]`,
          practicalExample: `const orders = [
  { id: 1, items: ["Laptop", "Mouse"] },
  { id: 2, items: ["Keyboard"] }
];
const orderItems = orders.flatMap((order) =>
  order.items.map((item) => ({ orderId: order.id, item }))
);`
        }
      ]
    }
  ],
  quickComparison: [
    { method: "push()", purpose: "Add at end", returns: "New length", mutates: "Yes" },
    { method: "pop()", purpose: "Remove last", returns: "Removed element", mutates: "Yes" },
    { method: "shift()", purpose: "Remove first", returns: "Removed element", mutates: "Yes" },
    { method: "unshift()", purpose: "Add at beginning", returns: "New length", mutates: "Yes" },
    { method: "slice()", purpose: "Copy part of array", returns: "New array", mutates: "No" },
    { method: "splice()", purpose: "Insert/remove/replace", returns: "Removed elements array", mutates: "Yes" },
    { method: "concat()", purpose: "Merge arrays/values", returns: "New array", mutates: "No" },
    { method: "indexOf()", purpose: "Find index of value", returns: "Index or -1", mutates: "No" },
    { method: "includes()", purpose: "Check presence", returns: "Boolean", mutates: "No" },
    { method: "find()", purpose: "First matching element", returns: "Element or undefined", mutates: "No" },
    { method: "findIndex()", purpose: "Index of first match", returns: "Index or -1", mutates: "No" },
    { method: "map()", purpose: "Transform every element", returns: "New array", mutates: "No" },
    { method: "filter()", purpose: "Keep matching elements", returns: "New array", mutates: "No" },
    { method: "reduce()", purpose: "Convert to one value", returns: "Final accumulated value", mutates: "No" },
    { method: "forEach()", purpose: "Run function for each element", returns: "undefined", mutates: "No*" },
    { method: "some()", purpose: "At least one match", returns: "Boolean", mutates: "No" },
    { method: "every()", purpose: "All match", returns: "Boolean", mutates: "No" },
    { method: "sort()", purpose: "Sort array", returns: "Same sorted array", mutates: "Yes" },
    { method: "reverse()", purpose: "Reverse array", returns: "Same reversed array", mutates: "Yes" },
    { method: "flat()", purpose: "Flatten nested arrays", returns: "New array", mutates: "No" },
    { method: "flatMap()", purpose: "Map and flatten one level", returns: "New array", mutates: "No" }
  ],
  interviewNotes: [
    "map() returns a new array, forEach() does not.",
    "find() returns first match, filter() returns all matches.",
    "slice() does not mutate, splice() mutates.",
    "some() means one or more pass, every() means all pass."
  ],
  practiceTasks: [
    "Use map() to convert Celsius to Fahrenheit.",
    "Use filter() for employees with salary above 50,000.",
    "Use reduce() to compute total cart value.",
    "Use find() to locate the first inactive user.",
    "Use some() to check whether any student failed.",
    "Use every() to verify all products are in stock.",
    "Use flatMap() to extract all skills from employee objects.",
    "Use splice() to replace one item in the middle of an array."
  ]
};
