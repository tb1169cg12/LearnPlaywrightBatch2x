// Lab Ex 38: Confusing Comparisons in JavaScript
// == (Loose Equality) vs === (Strict Equality)
// ============================================================

//
// RULE OF THUMB: Always use === (strict equality) unless you
// genuinely need type coercion. === checks value AND type.
// == only checks value after forcing types to match.
//


// ============================================================
// 1. THE TRANSITIVE PROPERTY IS BROKEN
// ============================================================

console.log("=== TRANSITIVE BROKEN ===");

console.log("" == 0);      // true  (empty string becomes 0)
console.log(0 == "0");     // true  (string "0" becomes 0)
console.log("" == "0");    // false (both strings, no coercion!)

// Math says: if A==B and B==C, then A==C. JavaScript says: NOPE.


// ============================================================
// 2. null vs undefined
// ============================================================

console.log("\n=== null vs undefined ===");

console.log(null == undefined);    // true  (loose equality says they match)
console.log(null === undefined);   // false (different types)

console.log(null == 0);            // false (surprise! null does NOT equal 0)
console.log(undefined == 0);       // false (undefined does NOT equal 0)

console.log(null == "");         // false (null does NOT equal empty string)
console.log(undefined == "");      // false (undefined does NOT equal empty string)


// ============================================================
// 3. NaN is NOT EQUAL to ANYTHING (not even itself!)
// ============================================================

console.log("\n=== NaN MADNESS ===");

console.log(NaN == NaN);         // false
console.log(NaN === NaN);        // false

let a = NaN;
console.log(a == NaN);           // false

// How to check for NaN correctly:
console.log(Number.isNaN(NaN));           // true
console.log(Number.isNaN("hello"));         // false
console.log(isNaN("hello"));              // true  (isNaN coerces first!)
console.log(Number.isNaN("hello"));       // false (does NOT coerce)


// ============================================================
// 4. The "Falsy Chain" Trap
// ============================================================

console.log("\n=== THE FALSY CHAIN ===");

console.log(false == 0);         // true
console.log(0 == "");            // true
console.log("" == false);        // true  (wait... what?)
console.log(false == "");        // true

// But watch this:
console.log(false == undefined); // false
console.log(false == null);      // false
console.log(null == 0);          // false

// So false==0 and 0=="" but false!=="" directly? Actually false=="" IS true!
// Let's check:
console.log(false === "");       // false (strict saves us)


// ============================================================
// 5. Arrays & Objects == Weirdness
// ============================================================

console.log("\n=== ARRAY/OBJECT WEIRDNESS ===");

console.log([] == 0);            // true  (empty array becomes "", then 0)
console.log([] == "");           // true  (empty array becomes empty string)
console.log([] == false);        // true  (array -> "" -> 0 -> false)
console.log([0] == false);       // true  ([0] -> "0" -> 0 -> false)
console.log([1] == true);        // true  ([1] -> "1" -> 1 -> true)

// But:
console.log([2] == true);        // false ([2] -> "2" -> 2, and 2 != true)
console.log([1,2] == "1,2");   // true  (array joins with comma)


// ============================================================
// 6. Objects to Primitives
// ============================================================

console.log("\n=== OBJECT COERCION ===");

let obj1 = { a: 1 };
let obj2 = { a: 1 };

console.log(obj1 == obj2);       // false (different memory references)
console.log(obj1 === obj2);      // false (different memory references)

let obj3 = obj1;
console.log(obj1 == obj3);       // true  (same reference)
console.log(obj1 === obj3);      // true  (same reference)

// valueOf and toString can be overridden:
let tricky = {
    valueOf() { return 42; }
};
console.log(tricky == 42);       // true  (valueOf returns 42)
console.log(tricky === 42);      // false (still an object)


// ============================================================
// 7. Boolean Coercion Surprises
// ============================================================

console.log("\n=== BOOLEAN SURPRISES ===");

console.log(true == 1);         // true
console.log(true == "1");       // true  ("1" -> 1 -> true)
console.log(true == 2);         // false (2 is not 1!)
console.log(true == "2");       // false ("2" -> 2, and 2 != 1)

console.log(false == 0);        // true
console.log(false == "0");      // true  ("0" -> 0 -> false)
console.log(false == "hello");  // false ("hello" -> NaN -> false, but NaN != 0)


// ============================================================
// 8. String Number Mix-ups
// ============================================================

console.log("\n=== STRING vs NUMBER ===");

console.log("5" == 5);          // true  (string coerced to number)
console.log("5" === 5);         // false (different types)

console.log("  " == 0);         // true  (whitespace string becomes 0)
console.log("  " === 0);        // false (strict)

console.log("\t\n" == 0);       // true  (tabs/newlines also become 0!)
console.log("\t\n" === 0);      // false (strict)

console.log("0x10" == 16);      // true  (hexadecimal string parsed!)
console.log("0x10" === 16);     // false (strict)


// ============================================================
// 9. The typeof null Bug (Famous JavaScript Quirk)
// ============================================================

console.log("\n=== typeof null BUG ===");

console.log(typeof null);         // "object" (BUG! should be "null")
console.log(typeof undefined);    // "undefined"
console.log(null === null);       // true
console.log(null == null);        // true
console.log(null === undefined);   // false (strict equality says they don't match)
console.log(null === "object");    // ReferenceError: object is not defined (strict equality doesn't match anything)
// Check for null correctly:
let x = null;
console.log(x === null);          // true

// NEVER check for null like this:
if (typeof x === "object") {
    // This catches null too! Dangerous!
}


// ============================================================
// 10. Summary: The Safe Approach
// ============================================================

console.log("\n=== SUMMARY: ALWAYS USE === ===");

// == (Loose Equality)  -> Allows type coercion. UNPREDICTABLE.
// === (Strict Equality) -> No coercion. SAFE. PREDICTABLE.

// When to use == ?
// - When you WANT type coercion (rare)
// - Checking null OR undefined:  if (x == null)  // catches both

// Otherwise, ALWAYS use ===

// Examples of safe patterns:
let val = "5";
if (val === 5) { /* won't run - types differ */ }
if (Number(val) === 5) { /* safe conversion, then compare */ }

// Check for null or undefined safely:
if (x === null || x === undefined) { /* safe */ }
if (x == null) { /* also safe, catches both */ }

// Final thought:
// console.log("" == 0);     // true  (confusing)
// console.log("" === 0);    // false (clear!)

// Choose clarity over cleverness. Use ===.
