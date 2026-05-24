// Lab Ex 29: Single Quotes vs Double Quotes vs Backticks in JavaScript
// All three create strings, but backticks have extra superpowers

// --- SINGLE QUOTES ---
// Use when you need double quotes inside the string
let single = 'Pramod said "Hello"';
console.log(single);             // Output: Pramod said "Hello"

// --- DOUBLE QUOTES ---
// Use when you need single quotes inside the string
let double = "Pramod's car";
console.log(double);             // Output: Pramod's car

// --- BACKTICKS (Template Literals) ---
// Extra features: multi-line strings and variable interpolation
let name = "Pramod";
let backtick = `Hello, ${name}!`;
console.log(backtick);           // Output: Hello, Pramod!

// Multi-line with backticks
let multi = `Line 1
Line 2`;
console.log(multi);              // Output: Line 1 (newline) Line 2

// Simple rule: single and double quotes are the same for basic strings
// Use backticks when you need to inject variables or write multi-line text
// Playwright 
const rowIndex =3;
const columnName ="email";
await page.locator(`[data-row="${rowIndex}"] [data-column="${columnName}"]`).click();

//logs 
const testName = 'Login Test';
const status = 'failed ';
const duration = 1200;
console.log(`Test: ${testName}, Status: ${status}, Duration: ${duration}ms`);
// Output: Test: Login Test, Status: failed, Duration: 1200ms

const testCase = 'checkout_flow';
const timestamp  = date.now();
await page.screenshot({ path: `screenshots/${testCase}_${timestamp}.png` });
