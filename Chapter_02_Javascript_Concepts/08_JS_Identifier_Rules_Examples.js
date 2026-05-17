// ============================================================
// JavaScript Identifiers - Rules & Examples
// ============================================================

// --- VALID IDENTIFIERS ---
let name = "Alice";
let _private = "secret";
let $price = 99.99;
let userName = "valid";
let user_name = "valid";
let user123 = "valid";
let Name = "different";
let NAME = "different";
let имя = "Unicode valid";     // Unicode letters are valid
let 用户名 = "Chinese";         // Non-ASCII letters are valid
let _ = "underscore only";    // Single underscore is valid
let $ = "dollar only";        // Single dollar is valid


// --- CASE SENSITIVITY ---
let fruit = "apple";
let Fruit = "banana";
let FRUIT = "cherry";
console.log(fruit);   // apple
console.log(Fruit);   // banana
console.log(FRUIT);   // cherry


// --- MUST START WITH letter, _, or $ (NOT digit) ---
// Valid starts:
let valid1 = 1;
let _valid = 2;
let $valid = 3;

// Invalid starts (these will throw SyntaxError if uncommented):
// let 1invalid = 4;        // Cannot start with digit
// let @name = "test";       // Cannot start with special character
// let #hash = "test";       // Cannot use # (except private class fields)
// let +plus = 1;            // Cannot use operator symbols


// --- CAN CONTAIN letters, digits, _, $ ---
let test1 = "ok";
let test_2 = "ok";
let test$3 = "ok";
let test1_2$3 = "ok";

// Cannot contain special characters or spaces:
// let my-name = 1;          // Hyphen not allowed (looks like subtraction)
// let my name = 1;          // Space not allowed
// let my@name = 1;          // @ not allowed
// let my#name = 1;          // # not allowed
// let my!name = 1;          // ! not allowed
// let my%name = 1;          // % not allowed
// let my&name = 1;          // & not allowed


// --- RESERVED KEYWORDS (CANNOT USE AS IDENTIFIERS) ---
// Uncomment any line below to see SyntaxError:
// let var = 1;
// let const = 1;
// let let = 1;
// let function = 1;
// let class = 1;
// let if = 1;
// let else = 1;
// let for = 1;
// let while = 1;
// let return = 1;
// let true = 1;
// let false = 1;
// let null = 1;
// let this = 1;
// let new = 1;
// let typeof = 1;
// let instanceof = 1;
// let void = 1;
// let delete = 1;
// let switch = 1;
// let case = 1;
// let break = 1;
// let continue = 1;
// let default = 1;
// let throw = 1;
// let try = 1;
// let catch = 1;
// let finally = 1;
// let debugger = 1;
// let with = 1;
// let export = 1;
// let import = 1;
// let extends = 1;
// let super = 1;
// let yield = 1;
// let static = 1;
// let public = 1;     // strict mode only
// let private = 1;    // strict mode only
// let protected = 1;  // strict mode only
// let package = 1;    // strict mode only
// let interface = 1;  // strict mode only
// let implements = 1; // strict mode only


// --- CONTEXTUAL KEYWORDS (Can be used as identifiers in most cases) ---
// These have special meaning in specific contexts but are valid identifiers:
let async = "async word";      // Valid, but avoid confusion
let await = "await word";        // Invalid inside modules/async functions
let get = "get word";            // Valid
let set = "set word";            // Valid
let of = "of word";              // Valid
let from = "from word";          // Valid
let as = "as word";              // Valid
let target = "target word";        // Valid
//let enum = "enum word";          // Valid (but reserved for future, avoid)

console.log(async);   // "async word"
console.log(get);     // "get word"


// --- NO LENGTH LIMIT ---
let thisIsAVeryLongIdentifierNameThatIsStillCompletelyValidInJavaScript = "works";
console.log(thisIsAVeryLongIdentifierNameThatIsStillCompletelyValidInJavaScript);


// --- BEST PRACTICES (conventions, not rules) ---
// camelCase for variables and functions:
let userProfile = {};
function getUserData() {}

// PascalCase for classes:
class UserAccount {}

// UPPER_SNAKE_CASE for constants:
const MAX_SIZE = 100;
const API_KEY = "abc123";

// Start with _ for private/internal (convention):
let _internalValue = 42;

// Start with $ for DOM elements or jQuery-like (convention):
let $button = null;


// ============================================================
// QUICK REFERENCE: IDENTIFIER RULES
// ============================================================
// 1. Start with: letter, underscore (_), or dollar sign ($)
// 2. After first char: letters, digits, _, $ allowed
// 3. NO digits at start
// 4. NO spaces, hyphens, or special symbols (@, #, %, etc.)
// 5. Case-sensitive: foo !== Foo !== FOO
// 6. Unicode letters allowed
// 7. Cannot use reserved keywords
// 8. No length limit
// ============================================================
