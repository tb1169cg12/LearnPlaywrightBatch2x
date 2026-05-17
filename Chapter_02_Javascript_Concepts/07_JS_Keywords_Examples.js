// ============================================================
// JavaScript Keywords - Examples
// ============================================================

// --- Variable Declaration ---
let name = "Alice";          // let: block-scoped variable
const PI = 3.14;             // const: block-scoped constant
var age = 25;                // var: function-scoped variable


// --- Conditionals & Flow ---
if (age >= 18) {             // if: conditional statement
    console.log("Adult");
} else {                     // else: alternative branch
    console.log("Minor");
}

switch (name) {              // switch: multi-way branch
    case "Alice":            // case: label for switch
        console.log("Hello Alice");
        break;               // break: exit loop/switch
    default:                 // default: fallback case
        console.log("Unknown");
}


// --- Loops ---
for (let i = 0; i < 3; i++) {  // for: loop with init, condition, increment
    if (i === 1) continue;     // continue: skip to next iteration
    console.log(i);
}

let j = 0;
while (j < 3) {              // while: loop while condition is true
    console.log(j);
    j++;
    if (j === 2) break;      // break: exit loop
}

do {                         // do...while: execute at least once
    console.log("Runs once");
} while (false);


// --- Functions ---
function greet(user) {       // function: declare a function
    return "Hi " + user;     // return: send back a value
}

const arrow = () => {        // arrow function (not keyword, but common)
    console.log("Arrow");
};


// --- Object-Oriented ---
class Animal {               // class: define a class
    constructor(type) {
        this.type = type;
    }
    speak() {
        console.log("Sound");
    }
}

class Dog extends Animal {   // extends: inherit from another class
    constructor() {
        super("Dog");        // super: call parent constructor/methods
    }
    speak() {
        console.log("Bark");
    }
}

let pet = new Dog();         // new: create instance
pet.speak();                 // "Bark"


// --- this keyword ---
const obj = {
    value: 42,
    show() {
        console.log(this.value); // this: refers to current object
    }
};
obj.show();


// --- Exception Handling ---
try {                        // try: attempt code that may throw
    throw new Error("Oops"); // throw: raise an exception
} catch (err) {              // catch: handle exception
    console.log("Caught:", err.message);
} finally {                  // finally: always executes
    console.log("Cleanup");
}


// --- Type Checking ---
console.log(typeof name);    // typeof: returns type string (e.g., "string")
console.log(typeof PI);      // "number"
console.log(typeof obj);     // "object"
console.log(typeof greet);   // "function"


// --- Instance Checking ---
console.log(pet instanceof Dog);   // instanceof: check if object is instance of class
console.log(pet instanceof Animal);


// --- Property Operations ---
let car = { brand: "Toyota" };
console.log("brand" in car);       // in: check if property exists in object

delete car.brand;              // delete: remove property from object
console.log(car.brand);        // undefined


// --- Void ---
void 0;                        // void: evaluate expression, return undefined
console.log(void (2 + 2));     // undefined


// --- Debugger ---
// debugger;                   // debugger: triggers breakpoint in dev tools


// --- With (Discouraged) ---
// with (obj) {               // with: extend scope chain (DO NOT USE in modern JS)
//     console.log(value);
// }


// --- Yield (Generators) ---
function* generator() {        // function*: generator function
    yield 1;                   // yield: pause and return value
    yield 2;
    yield 3;
}
let gen = generator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2


// --- Async / Await ---
async function fetchData() {   // async: declares async function (returns Promise)
    return "Data";
}

async function main() {
    let result = await fetchData(); // await: wait for Promise to resolve
    console.log(result);
}
main();


// --- Import / Export (Modules) ---
// In a module file (e.g., math.js):
// export const add = (a, b) => a + b;        // export: expose bindings
// export default function() { ... }          // export default: default export

// In another file:
// import { add } from "./math.js";            // import: import named exports
// import myFunc from "./math.js";             // import default
// import * as math from "./math.js";          // import everything as namespace


// --- Get / Set (Object Accessors) ---
let user = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {           // get: define getter
        return this.firstName + " " + this.lastName;
    },
    set fullName(value) {      // set: define setter
        [this.firstName, this.lastName] = value.split(" ");
    }
};
console.log(user.fullName);    // "John Doe"
user.fullName = "Jane Smith";
console.log(user.firstName);   // "Jane"


// --- Static (Class Static Methods/Properties) ---
class MathUtil {
    static square(x) {         // static: method/property on class, not instances
        return x * x;
    }
}
console.log(MathUtil.square(5)); // 25


// --- True / False / Null / Literals ---
let active = true;             // true: boolean literal
let disabled = false;          // false: boolean literal
let empty = null;              // null: intentional absence of value


// --- Strict Mode Only (Reserved words - cannot be used as identifiers in strict mode) ---
// implements, interface, package, private, protected, public
// Example (valid only outside strict mode):
// let private = 1; // Error in strict mode!

"use strict";
// let public = 1; // SyntaxError in strict mode


// --- Enum (Future Reserved) ---
// enum is reserved for future use; not implemented yet.
// enum Color { Red, Green, Blue } // Would be invalid/syntax error currently


// --- For...Of Loop ---
let arr = [10, 20, 30];
for (let num of arr) {         // of: iterate over values of iterable
    console.log(num);
}

// --- For...In Loop ---
for (let key in obj) {         // in: iterate over enumerable property keys
    console.log(key);
}


// ============================================================
// SUMMARY TABLE (for quick reference)
// ============================================================
// break      - exit loop/switch
// case       - label in switch
// catch      - handle exceptions
// class      - declare class
// const      - constant declaration
// continue   - skip iteration
// debugger   - set breakpoint
// default    - fallback in switch/import
// delete     - remove property
// do         - do...while loop
// else       - else branch
// export     - export module bindings
// extends    - class inheritance
// false      - boolean false
// finally    - always executes after try/catch
// for        - for loop
// function   - declare function
// if         - conditional
// import     - import module bindings
// in         - property existence check
// instanceof - instance check
// new        - create instance
// null       - null value
// return     - return from function
// super      - parent class reference
// switch     - multi-way branch
// this       - current object context
// throw      - throw exception
// true       - boolean true
// try        - try block for exceptions
// typeof     - return type string
// var        - variable declaration
// void       - undefined return
// while      - while loop
// with       - extend scope (deprecated)
// yield      - generator pause
// let        - block variable
// static     - static member
// implements - reserved (strict)
// interface  - reserved (strict)
// package    - reserved (strict)
// private    - reserved (strict)
// protected  - reserved (strict)
// public     - reserved (strict)
// async      - async function/contextual
// await      - wait for Promise/contextual
// enum       - future reserved
// from       - import module specifier
// as         - alias in import/export
// get        - getter
// set        - setter
// of         - for-of loop
// target     - new.target meta-property
// ============================================================
