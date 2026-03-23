export const javascriptImportantConceptsStudyGuideNote = {
  title: "JavaScript Important Concepts Study Guide",
  parent: "Javascript Study Guides",
  createdAt: "2026-03-23T22:50:00+05:30",
  subtitle: "A concept-focused guide covering scope, closures, async flows, this, prototypes, and classes with practical examples.",
  includes: [
    "Variable declarations and scope behavior",
    "Hoisting, closures, and callback patterns",
    "Promises and async/await for asynchronous programming",
    "Execution context with this",
    "Prototype-based inheritance and class syntax",
    "Quick comparison table, interview notes, and practice tasks"
  ],
  startHere: [
    "Start with var, let, const, then scope and hoisting.",
    "Move to callbacks, promises, and async/await as one async track.",
    "Finish with this, prototypes, and classes to lock object model fundamentals."
  ],
  revisionOrder: [
    "var", "let", "const", "Scope", "Hoisting",
    "Callbacks", "Promises", "async/await",
    "Closures", "this", "Prototypes", "Classes"
  ],
  sections: [
    {
      title: "Language Foundations",
      methods: [
        {
          name: "let",
          kind: "Keyword",
          purpose: "Declares a block-scoped variable that can be reassigned.",
          syntax: "let variableName; | let variableName = value;",
          parameters: "variableName, optional initial value",
          returns: "Variable declaration (no direct return value)",
          mutates: "Value can be reassigned",
          simpleExample: `let score = 10;
score = 15;
console.log(score); // 15`,
          practicalExample: `function processOrders() {
  let total = 0;

  for (let i = 0; i < 3; i++) {
    const orderValue = (i + 1) * 100;
    total += orderValue;
  }

  console.log(total); // 600
}`
        },
        {
          name: "const",
          kind: "Keyword",
          purpose: "Declares a block-scoped binding that cannot be reassigned.",
          syntax: "const variableName = value;",
          parameters: "variableName and required initial value",
          returns: "Variable declaration (no direct return value)",
          mutates: "Binding cannot be reassigned; object contents can still change",
          simpleExample: `const country = "India";
console.log(country);`,
          practicalExample: `const user = {
  name: "Shishir",
  role: "Architect"
};

user.role = "Technical Architect";
console.log(user);`
        },
        {
          name: "var",
          kind: "Keyword",
          purpose: "Legacy variable declaration with function scope and hoisting to undefined.",
          syntax: "var variableName; | var variableName = value;",
          parameters: "variableName, optional initial value",
          returns: "Variable declaration (no direct return value)",
          mutates: "Value can be reassigned and variable can be redeclared",
          simpleExample: `var city = "Delhi";
city = "Noida";
console.log(city); // "Noida"`,
          practicalExample: `function demoVar() {
  if (true) {
    var message = "Inside block";
  }

  console.log(message); // accessible due to function scope
}`
        },
        {
          name: "Scope",
          kind: "Concept",
          purpose: "Defines where variables are visible and accessible.",
          syntax: "Global scope, function scope, and block scope are created by declaration location.",
          parameters: "Not a method",
          returns: "Runtime visibility behavior",
          mutates: "Not applicable",
          simpleExample: `let globalVar = "I am global";

function test() {
  let localVar = "I am local";
  console.log(globalVar);
  console.log(localVar);
}`,
          practicalExample: `const appName = "Task Manager";

function createSession(userName) {
  const sessionId = "S123";

  if (userName) {
    let welcomeMessage = "Welcome " + userName + " to " + appName;
    console.log(welcomeMessage);
  }

  console.log(sessionId);
}`
        },
        {
          name: "Hoisting",
          kind: "Runtime Behavior",
          purpose: "Declaration processing before execution begins in a scope.",
          syntax: "var is initialized as undefined; let/const stay in Temporal Dead Zone until initialization.",
          parameters: "Not a method",
          returns: "Execution-time behavior",
          mutates: "Not applicable",
          simpleExample: `console.log(a); // undefined
var a = 10;`,
          practicalExample: `function hoistingDemo() {
  console.log(task); // undefined
  var task = "Deploy code";

  // console.log(status); // ReferenceError (TDZ)
  let status = "In Progress";
  console.log(status);
}

hoistingDemo();`
        },
        {
          name: "Closures",
          kind: "Concept",
          purpose: "Allows inner functions to retain access to outer variables after outer execution finishes.",
          syntax: "No special syntax; happens naturally with nested functions.",
          parameters: "Not a method",
          returns: "Depends on enclosing function return",
          mutates: "Can preserve and update enclosed state",
          simpleExample: `function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2`,
          practicalExample: `function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) return "Insufficient funds";
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}`
        }
      ]
    },
    {
      title: "Asynchronous JavaScript",
      methods: [
        {
          name: "Callbacks",
          kind: "Pattern",
          purpose: "Passes a function as an argument to run later or after another task.",
          syntax: "mainFunction(callbackFn)",
          parameters: "callbackFn",
          returns: "Depends on implementation",
          mutates: "Not applicable",
          simpleExample: `function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye");
}

greet("Shishir", sayBye);`,
          practicalExample: `function fetchUserData(userId, callback) {
  setTimeout(() => {
    callback({ id: userId, name: "Shishir", role: "Architect" });
  }, 1000);
}

fetchUserData(101, (user) => {
  console.log("User received:", user);
});`
        },
        {
          name: "Promises",
          kind: "Async Feature",
          purpose: "Represents async completion or failure with pending/fulfilled/rejected states.",
          syntax: "new Promise((resolve, reject) => { ... })",
          parameters: "resolve and reject executor callbacks",
          returns: "Promise object",
          mutates: "Promise state changes once from pending to fulfilled/rejected",
          simpleExample: `const myPromise = new Promise((resolve) => {
  resolve("Task completed");
});

myPromise.then((result) => console.log(result));`,
          practicalExample: `function checkPaymentStatus(isPaid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isPaid) {
        resolve({ status: "success", message: "Payment received" });
      } else {
        reject({ status: "failed", message: "Payment pending" });
      }
    }, 1000);
  });
}

checkPaymentStatus(true)
  .then((response) => console.log("Resolved:", response))
  .catch((error) => console.log("Rejected:", error))
  .finally(() => console.log("Payment check completed"));`
        },
        {
          name: "async/await",
          kind: "Async Syntax",
          purpose: "Provides readable promise handling using sequential-looking syntax.",
          syntax: "async function fn() { const value = await promise; }",
          parameters: "await expects a promise-like value",
          returns: "Async functions always return a Promise",
          mutates: "Not applicable",
          simpleExample: `function getMessage() {
  return Promise.resolve("Hello from Promise");
}

async function printMessage() {
  const message = await getMessage();
  console.log(message);
}

printMessage();`,
          practicalExample: `function fetchOrders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, amount: 500 }, { id: 2, amount: 800 }]);
    }, 1000);
  });
}

async function processOrders() {
  try {
    const orders = await fetchOrders();
    const total = orders.reduce((sum, order) => sum + order.amount, 0);
    console.log("Total amount:", total);
  } catch (error) {
    console.log("Error:", error);
  }
}`
        }
      ]
    },
    {
      title: "Execution Context and Object Model",
      methods: [
        {
          name: "this",
          kind: "Keyword / Context",
          purpose: "References the current execution context based on how a function is called.",
          syntax: "this.propertyName",
          parameters: "Not a method",
          returns: "Context reference",
          mutates: "Not applicable",
          simpleExample: `const user = {
  name: "Shishir",
  greet() {
    console.log("Hello, " + this.name);
  }
};

user.greet();`,
          practicalExample: `const counter = {
  count: 0,
  increment() {
    setTimeout(() => {
      this.count++;
      console.log(this.count);
    }, 500);
  }
};

counter.increment();`
        },
        {
          name: "Prototypes",
          kind: "Object Model",
          purpose: "Enable inheritance by linking objects through the prototype chain.",
          syntax: "ConstructorFn.prototype.methodName = function() { ... }",
          parameters: "Attached to constructor functions or object prototypes",
          returns: "Depends on method implementation",
          mutates: "Prototype object can be extended",
          simpleExample: `function Car(brand) {
  this.brand = brand;
}

Car.prototype.getBrand = function() {
  return this.brand;
};

const car1 = new Car("Toyota");
console.log(car1.getBrand());`,
          practicalExample: `function Employee(name, department) {
  this.name = name;
  this.department = department;
}

Employee.prototype.getDetails = function() {
  return this.name + " works in " + this.department;
};

Employee.prototype.isITEmployee = function() {
  return this.department === "IT";
};`
        },
        {
          name: "Classes",
          kind: "Syntax",
          purpose: "Provide cleaner syntax over prototype-based object creation and inheritance.",
          syntax: "class ClassName { constructor(...) {} methodName() {} }",
          parameters: "Constructor and methods accept custom parameters",
          returns: "new ClassName(...) returns an instance object",
          mutates: "Instance state can be updated by methods",
          simpleExample: `class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello, " + this.name);
  }
}

const user1 = new User("Shishir");
user1.greet();`,
          practicalExample: `class BankAccount {
  constructor(accountHolder, initialBalance) {
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
  }

  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {
    if (amount > this.balance) return "Insufficient funds";
    this.balance -= amount;
    return this.balance;
  }
}`
        }
      ]
    }
  ],
  quickComparison: [
    { method: "let", purpose: "Declare block-scoped variable", returns: "Variable declaration", mutates: "Reassignable" },
    { method: "const", purpose: "Declare block-scoped constant binding", returns: "Variable declaration", mutates: "Binding fixed" },
    { method: "var", purpose: "Declare function-scoped variable", returns: "Variable declaration", mutates: "Reassignable + redeclarable" },
    { method: "Scope", purpose: "Control variable visibility", returns: "N/A", mutates: "N/A" },
    { method: "Hoisting", purpose: "Pre-execution declaration behavior", returns: "N/A", mutates: "N/A" },
    { method: "Closures", purpose: "Persist outer lexical variables", returns: "Depends", mutates: "Can mutate enclosed state" },
    { method: "Callbacks", purpose: "Execute function later", returns: "Depends", mutates: "N/A" },
    { method: "Promises", purpose: "Manage async result/failure", returns: "Promise", mutates: "Internal state transitions" },
    { method: "async/await", purpose: "Readable async flow", returns: "Promise", mutates: "N/A" },
    { method: "this", purpose: "Reference invocation context", returns: "Context reference", mutates: "N/A" },
    { method: "Prototypes", purpose: "Shared inheritance behavior", returns: "Depends", mutates: "Prototype can be extended" },
    { method: "Classes", purpose: "Object creation and inheritance syntax", returns: "Instance", mutates: "Instance state can change" }
  ],
  interviewNotes: [
    "Prefer const by default, use let when reassignment is needed, and avoid var in modern code unless maintaining legacy behavior.",
    "Hoisting exists for var/let/const, but only var is initialized to undefined before line execution; let/const stay in TDZ.",
    "Closure questions often test whether state persists across calls; function factories are a common interview pattern.",
    "Callbacks can create deeply nested code; Promises and async/await improve flow control and error handling.",
    "Always explain this through invocation style: method call, plain function call, constructor call, or explicit bind/call/apply.",
    "Classes are syntax sugar; inheritance still uses the prototype chain underneath."
  ],
  practiceTasks: [
    "Write examples showing block scope differences between let, const, and var.",
    "Demonstrate var hoisting and let Temporal Dead Zone behavior.",
    "Build a closure-based counter and a closure-based private state object.",
    "Convert a callback-based async function into Promise style.",
    "Rewrite Promise chaining into async/await with try/catch.",
    "Create an object where this breaks, then fix it using bind or arrow function behavior.",
    "Create a constructor function and add shared methods on its prototype.",
    "Rebuild the same model using class syntax and compare readability.",
    "Write a mini service that uses class + async/await + array operations together.",
    "Summarize when each concept is most useful in production code."
  ]
};
