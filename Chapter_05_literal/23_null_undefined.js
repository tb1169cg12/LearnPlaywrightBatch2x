// ============================================================
// null vs undefined in JavaScript
// ============================================================

/*
SIMPLE DIFFERENCE:

undefined = "I exist, but I have no value yet" (JS gives this automatically)
null      = "I exist, but I intentionally have no value" (programmer sets this)

Think of it like a box:
- undefined = empty box that nobody has touched yet
- null      = empty box that someone intentionally emptied
*/


// --- UNDEFINED ---
// Automatically assigned by JavaScript

let a;                      // declared but not assigned
console.log(a);             // undefined
console.log(typeof a);      // "undefined"

function doNothing() {}     // function with no return
console.log(doNothing());   // undefined

let obj = {};
console.log(obj.age);       // undefined (property doesn't exist)

let arr = [1, 2, 3];
console.log(arr[10]);       // undefined (index doesn't exist)


// --- NULL ---
// Intentionally set by programmer to mean "no value"

let b = null;               // programmer explicitly says "no value"
console.log(b);             // null
console.log(typeof b);      // "object" (this is a known JS bug, should be "null")

let user = null;            // user not logged in yet
console.log(user);          // null

let person = { name: "John" };
person = null;              // intentionally clearing the object
console.log(person);        // null


// --- KEY DIFFERENCES ---

// 1. Type difference
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (bug in JS, but stays forever)

// 2. Equality check
console.log(undefined == null);   // true  (loose equality)
console.log(undefined === null);  // false (strict equality - different types)

// 3. Default behavior
// undefined = JS default when something is missing
// null      = programmer default when they want to clear something


// --- PRACTICAL EXAMPLE ---

let score;                  // undefined - game hasn't started
console.log("Score:", score);   // undefined

score = 100;                // player scored
console.log("Score:", score);   // 100

score = null;               // game reset intentionally
console.log("Score:", score);   // null


// --- REAL WORLD COMPARISON ---

// undefined = "What's your phone number?" -> "I don't know yet" (never set)
// null      = "What's your phone number?" -> "I don't have one" (intentionally none)


// --- CHECKING FOR EMPTY VALUES ---

let x;
let y = null;

// Check for undefined
if (x === undefined) {
    console.log("x is undefined");
}

// Check for null
if (y === null) {
    console.log("y is null");
}

// Check for either (both mean "empty")
if (x == null) {            // catches both null and undefined
    console.log("x is null or undefined");
}

if (y == null) {
    console.log("y is null or undefined");
}


// --- JSON NOTE ---
// JSON can have null, but undefined gets removed

let data = {
    name: "John",
    age: null,          // stays in JSON
    city: undefined     // removed from JSON
};

console.log(JSON.stringify(data));  // {"name":"John","age":null}


// ============================================================
// QUICK SUMMARY
// ============================================================
// undefined:
//   - JS gives this automatically
//   - Variable declared but not assigned
//   - Function returns nothing
//   - Object property doesn't exist
//
// null:
//   - Programmer sets this intentionally
//   - Means "no value" on purpose
//   - Used to clear objects/variables
//
// Remember: undefined means "not set", null means "set to nothing"
// ============================================================
