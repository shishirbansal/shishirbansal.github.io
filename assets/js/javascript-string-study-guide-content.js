export const javascriptStringStudyGuideNote = {
  title: "JavaScript String Methods Study Guide",
  parent: "Javascript Study Guides",
  createdAt: "2026-03-17T11:30:00+05:30",
  subtitle: "Detailed reference with syntax, parameters, return values, and worked examples.",
  includes: [
    "String basics and case conversion",
    "Whitespace cleanup methods",
    "Character access and combination methods",
    "Searching and matching methods",
    "Extraction and replacement methods",
    "Formatting and regex methods",
    "Quick comparison table, interview notes, and practice tasks"
  ],
  startHere: [
    "Start with length, case conversion, and trimming.",
    "Then focus on includes, indexOf, startsWith, and endsWith.",
    "Finish with extraction, replacement, formatting, and regex methods."
  ],
  revisionOrder: [
    "length",
    "toUpperCase", "toLowerCase",
    "trim", "trimStart", "trimEnd",
    "charAt", "at",
    "includes", "indexOf", "lastIndexOf",
    "startsWith", "endsWith",
    "slice", "substring",
    "replace", "replaceAll",
    "split",
    "repeat", "padStart", "padEnd",
    "match", "matchAll", "search",
    "localeCompare"
  ],
  sections: [
    {
      title: "String Basics and Case Conversion",
      methods: [
        {
          name: "length",
          purpose: "Returns number of characters in a string.",
          syntax: "string.length",
          parameters: "None",
          returns: "Number",
          mutates: false,
          simpleExample: `const name = "Shishir";
console.log(name.length); // 7`,
          practicalExample: `const password = "Admin@12345";
const isStrongLength = password.length >= 8;`
        },
        {
          name: "toUpperCase()",
          purpose: "Converts all characters to uppercase.",
          syntax: "string.toUpperCase()",
          parameters: "None",
          returns: "New uppercase string",
          mutates: false,
          simpleExample: `const city = "delhi";
console.log(city.toUpperCase()); // "DELHI"`,
          practicalExample: `const productCode = "inv-2026-ab12";
const normalizedCode = productCode.toUpperCase();`
        },
        {
          name: "toLowerCase()",
          purpose: "Converts all characters to lowercase.",
          syntax: "string.toLowerCase()",
          parameters: "None",
          returns: "New lowercase string",
          mutates: false,
          simpleExample: `const email = "USER@GMAIL.COM";
console.log(email.toLowerCase());`,
          practicalExample: `const userInput = "  Admin@Company.COM  ";
const normalizedEmail = userInput.trim().toLowerCase();`
        }
      ]
    },
    {
      title: "Whitespace Cleanup Methods",
      methods: [
        {
          name: "trim()",
          purpose: "Removes whitespace from both ends.",
          syntax: "string.trim()",
          parameters: "None",
          returns: "New trimmed string",
          mutates: false,
          simpleExample: `const msg = "   hello world   ";
console.log(msg.trim()); // "hello world"`,
          practicalExample: `const rawUsername = "   shishir_bansal   ";
const username = rawUsername.trim();`
        },
        {
          name: "trimStart()",
          purpose: "Removes whitespace from the beginning.",
          syntax: "string.trimStart()",
          parameters: "None",
          returns: "New string",
          mutates: false,
          simpleExample: `const str = "   JavaScript";
console.log(str.trimStart());`,
          practicalExample: `const logLine = "      ERROR: Server not reachable";
const cleanedLog = logLine.trimStart();`
        },
        {
          name: "trimEnd()",
          purpose: "Removes whitespace from the end.",
          syntax: "string.trimEnd()",
          parameters: "None",
          returns: "New string",
          mutates: false,
          simpleExample: `const str = "JavaScript     ";
console.log(str.trimEnd());`,
          practicalExample: `const csvValue = "Shishir,Salesforce Architect     ";
const cleanedValue = csvValue.trimEnd();`
        }
      ]
    },
    {
      title: "Character Access and Combination Methods",
      methods: [
        {
          name: "charAt()",
          purpose: "Returns character at specified index.",
          syntax: "string.charAt(index)",
          parameters: "index: character position",
          returns: "Character string or empty string",
          mutates: false,
          simpleExample: `const word = "hello";
console.log(word.charAt(1)); // "e"`,
          practicalExample: `const employeeId = "A9821";
const prefix = employeeId.charAt(0);`
        },
        {
          name: "at()",
          purpose: "Returns character at index, supports negatives.",
          syntax: "string.at(index)",
          parameters: "index: positive or negative position",
          returns: "Character or undefined",
          mutates: false,
          simpleExample: `const word = "hello";
console.log(word.at(-1)); // "o"`,
          practicalExample: `const fileName = "report.pdf";
const extensionLastChar = fileName.at(-1);`
        },
        {
          name: "concat()",
          purpose: "Combines two or more strings.",
          syntax: "string.concat(str1, str2, ..., strN)",
          parameters: "str1...strN: strings to combine",
          returns: "New combined string",
          mutates: false,
          simpleExample: `const first = "Hello";
const second = "World";
console.log(first.concat(" ", second));`,
          practicalExample: `const firstName = "Shishir";
const lastName = "Bansal";
const profile = firstName.concat(" ", lastName, " - ", "Technical Architect");`
        }
      ]
    },
    {
      title: "Searching and Matching Methods",
      methods: [
        {
          name: "includes()",
          purpose: "Checks whether a string contains text.",
          syntax: "string.includes(searchString, position?)",
          parameters: "searchString, optional start position",
          returns: "Boolean",
          mutates: false,
          simpleExample: `const sentence = "I love JavaScript";
console.log(sentence.includes("Java")); // true`,
          practicalExample: `const email = "admin@salesforce.com";
const isCorporateEmail = email.includes("@salesforce.com");`
        },
        {
          name: "indexOf()",
          purpose: "Finds first index of substring.",
          syntax: "string.indexOf(searchValue, fromIndex?)",
          parameters: "searchValue, optional fromIndex",
          returns: "Index or -1",
          mutates: false,
          simpleExample: `const str = "JavaScript";
console.log(str.indexOf("Script")); // 4`,
          practicalExample: `const url = "https://example.com/products/laptop";
const productStart = url.indexOf("products");`
        },
        {
          name: "lastIndexOf()",
          purpose: "Finds last index of substring.",
          syntax: "string.lastIndexOf(searchValue, fromIndex?)",
          parameters: "searchValue, optional fromIndex",
          returns: "Index or -1",
          mutates: false,
          simpleExample: `const str = "hello hello";
console.log(str.lastIndexOf("hello")); // 6`,
          practicalExample: `const filePath = "/users/admin/documents/report.pdf";
const lastSlashIndex = filePath.lastIndexOf("/");`
        },
        {
          name: "startsWith()",
          purpose: "Checks if string starts with given text.",
          syntax: "string.startsWith(searchString, position?)",
          parameters: "searchString, optional position",
          returns: "Boolean",
          mutates: false,
          simpleExample: `const str = "JavaScript";
console.log(str.startsWith("Java"));`,
          practicalExample: `const apiRoute = "/api/users/123";
const isApiCall = apiRoute.startsWith("/api");`
        },
        {
          name: "endsWith()",
          purpose: "Checks if string ends with given text.",
          syntax: "string.endsWith(searchString, length?)",
          parameters: "searchString, optional length",
          returns: "Boolean",
          mutates: false,
          simpleExample: `const file = "notes.pdf";
console.log(file.endsWith(".pdf"));`,
          practicalExample: `const imageName = "profile_photo.png";
const isPng = imageName.endsWith(".png");`
        }
      ]
    },
    {
      title: "Extraction and Replacement Methods",
      methods: [
        {
          name: "slice()",
          purpose: "Extracts part of string as new string.",
          syntax: "string.slice(start, end?)",
          parameters: "start index, optional end index",
          returns: "New string",
          mutates: false,
          simpleExample: `const str = "JavaScript";
console.log(str.slice(0, 4)); // "Java"`,
          practicalExample: `const transactionId = "TXN-2026-000987";
const year = transactionId.slice(4, 8);
const serial = transactionId.slice(-6);`
        },
        {
          name: "substring()",
          purpose: "Extracts part of string between indexes.",
          syntax: "string.substring(start, end?)",
          parameters: "start index, optional end index",
          returns: "New string",
          mutates: false,
          simpleExample: `const str = "JavaScript";
console.log(str.substring(4, 10)); // "Script"`,
          practicalExample: `const maskedCard = "1234567812345678";
const lastFour = maskedCard.substring(maskedCard.length - 4);`
        },
        {
          name: "replace()",
          purpose: "Replaces first occurrence of pattern.",
          syntax: "string.replace(searchValue, replaceValue)",
          parameters: "searchValue, replaceValue",
          returns: "New string",
          mutates: false,
          simpleExample: `const str = "I like Java";
console.log(str.replace("Java", "JavaScript"));`,
          practicalExample: `const template = "Hello {name}, welcome to {platform}";
const result = template
  .replace("{name}", "Shishir")
  .replace("{platform}", "ChatGPT");`
        },
        {
          name: "replaceAll()",
          purpose: "Replaces all occurrences of pattern.",
          syntax: "string.replaceAll(searchValue, replaceValue)",
          parameters: "searchValue, replaceValue",
          returns: "New string",
          mutates: false,
          simpleExample: `const str = "apple, apple, apple";
console.log(str.replaceAll("apple", "mango"));`,
          practicalExample: `const rawText = "2026/03/17";
const normalizedDate = rawText.replaceAll("/", "-");`
        },
        {
          name: "split()",
          purpose: "Splits string into array.",
          syntax: "string.split(separator, limit?)",
          parameters: "separator and optional limit",
          returns: "Array",
          mutates: false,
          simpleExample: `const str = "red,green,blue";
console.log(str.split(","));`,
          practicalExample: `const fullName = "Shishir Bansal Salesforce Architect";
const parts = fullName.split(" ");`
        }
      ]
    },
    {
      title: "Formatting and Regex Methods",
      methods: [
        {
          name: "repeat()",
          purpose: "Repeats string N times.",
          syntax: "string.repeat(count)",
          parameters: "count: repeat count",
          returns: "New repeated string",
          mutates: false,
          simpleExample: `const star = "*";
console.log(star.repeat(5));`,
          practicalExample: `const indent = " ";
const line = indent.repeat(4) + "console.log('Hello')";`
        },
        {
          name: "padStart()",
          purpose: "Pads string from start to target length.",
          syntax: "string.padStart(targetLength, padString?)",
          parameters: "target length and optional pad string",
          returns: "New padded string",
          mutates: false,
          simpleExample: `const num = "5";
console.log(num.padStart(3, "0")); // "005"`,
          practicalExample: `const invoiceId = "27";
const formattedInvoiceId = invoiceId.padStart(6, "0");`
        },
        {
          name: "padEnd()",
          purpose: "Pads string from end to target length.",
          syntax: "string.padEnd(targetLength, padString?)",
          parameters: "target length and optional pad string",
          returns: "New padded string",
          mutates: false,
          simpleExample: `const str = "JS";
console.log(str.padEnd(5, ".")); // "JS..."`,
          practicalExample: `const label = "Name";
const formattedLabel = label.padEnd(15, " ");`
        },
        {
          name: "match()",
          purpose: "Matches string against regex.",
          syntax: "string.match(regex)",
          parameters: "regex pattern",
          returns: "Array or null",
          mutates: false,
          simpleExample: `const str = "Order123";
console.log(str.match(/\\d+/));`,
          practicalExample: `const log = "Errors: E101 E202 E303";
const codes = log.match(/E\\d+/g);`
        },
        {
          name: "matchAll()",
          purpose: "Returns iterator of all regex matches.",
          syntax: "string.matchAll(regex)",
          parameters: "global regex pattern",
          returns: "Iterator (convert with [...])",
          mutates: false,
          simpleExample: `const str = "a1 b2 c3";
const matches = [...str.matchAll(/\\w\\d/g)];`,
          practicalExample: `const text = "User: Amit, Score: 85 | User: Neha, Score: 92";
const result = [...text.matchAll(/User: (\\w+), Score: (\\d+)/g)];`
        },
        {
          name: "search()",
          purpose: "Finds first match index for pattern.",
          syntax: "string.search(pattern)",
          parameters: "string or regex pattern",
          returns: "Index or -1",
          mutates: false,
          simpleExample: `const str = "JavaScript is powerful";
console.log(str.search("Script")); // 4`,
          practicalExample: `const message = "Customer ID: CUST-9087";
const index = message.search(/CUST-\\d+/);`
        },
        {
          name: "localeCompare()",
          purpose: "Compares strings for sort order.",
          syntax: "string.localeCompare(compareString)",
          parameters: "compareString",
          returns: "Negative, positive, or 0",
          mutates: false,
          simpleExample: `console.log("apple".localeCompare("banana"));`,
          practicalExample: `const names = ["Zara", "Amit", "Neha"];
names.sort((a, b) => a.localeCompare(b));`
        }
      ]
    }
  ],
  quickComparison: [
    { method: "length", purpose: "Count characters", returns: "Number", mutates: "No" },
    { method: "toUpperCase()", purpose: "Uppercase conversion", returns: "String", mutates: "No" },
    { method: "toLowerCase()", purpose: "Lowercase conversion", returns: "String", mutates: "No" },
    { method: "trim()", purpose: "Remove spaces both ends", returns: "String", mutates: "No" },
    { method: "trimStart()", purpose: "Remove start spaces", returns: "String", mutates: "No" },
    { method: "trimEnd()", purpose: "Remove end spaces", returns: "String", mutates: "No" },
    { method: "charAt()", purpose: "Character at index", returns: "String", mutates: "No" },
    { method: "at()", purpose: "Character by index incl negative", returns: "String/undefined", mutates: "No" },
    { method: "concat()", purpose: "Join strings", returns: "String", mutates: "No" },
    { method: "includes()", purpose: "Check existence", returns: "Boolean", mutates: "No" },
    { method: "indexOf()", purpose: "First index", returns: "Number", mutates: "No" },
    { method: "lastIndexOf()", purpose: "Last index", returns: "Number", mutates: "No" },
    { method: "startsWith()", purpose: "Check beginning", returns: "Boolean", mutates: "No" },
    { method: "endsWith()", purpose: "Check ending", returns: "Boolean", mutates: "No" },
    { method: "slice()", purpose: "Extract part", returns: "String", mutates: "No" },
    { method: "substring()", purpose: "Extract by indexes", returns: "String", mutates: "No" },
    { method: "replace()", purpose: "Replace first match", returns: "String", mutates: "No" },
    { method: "replaceAll()", purpose: "Replace all matches", returns: "String", mutates: "No" },
    { method: "split()", purpose: "Convert to array", returns: "Array", mutates: "No" },
    { method: "repeat()", purpose: "Repeat text", returns: "String", mutates: "No" },
    { method: "padStart()", purpose: "Pad at start", returns: "String", mutates: "No" },
    { method: "padEnd()", purpose: "Pad at end", returns: "String", mutates: "No" },
    { method: "match()", purpose: "Regex match", returns: "Array/null", mutates: "No" },
    { method: "matchAll()", purpose: "All regex matches", returns: "Iterator", mutates: "No" },
    { method: "search()", purpose: "Regex/string search", returns: "Number", mutates: "No" },
    { method: "localeCompare()", purpose: "Sort comparison", returns: "Number", mutates: "No" }
  ],
  interviewNotes: [
    "Strings are immutable. Methods return new values.",
    "slice() supports negative indexes; substring() does not handle negatives the same way.",
    "replace() changes only first match; replaceAll() changes all matches.",
    "charAt() does not support negative indexes; at() does.",
    "indexOf() returns position; includes() returns boolean."
  ],
  practiceTasks: [
    "Convert '  HELLO WORLD  ' to 'hello world'.",
    "Extract '2026' from 'INV-2026-001'.",
    "Check whether 'report.pdf' ends with '.pdf'.",
    "Replace all '/' with '-' in a date string.",
    "Split 'HTML,CSS,JS' into an array.",
    "Pad '25' into '000025'.",
    "Find the last four digits of a card number.",
    "Check whether an email belongs to a company domain.",
    "Extract all error codes like E101 and E102 from log text.",
    "Sort names alphabetically using localeCompare()."
  ]
};
