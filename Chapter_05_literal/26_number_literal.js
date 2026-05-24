// Lab Ex 26: Number Literals in JavaScript
// This lab demonstrates all number types supported in JavaScript

// ============================================================
// 1. DECIMAL (Base 10) Literals
// ============================================================
let decimal1 = 42;          // Simple integer
let decimal2 = 0;           // Zero
let decimal3 = 9007199254740991;  // Maximum safe integer

console.log("=== DECIMAL ===");
console.log(decimal1);              // Output: 42
console.log(decimal2);              // Output: 0
console.log(decimal3);              // Output: 9007199254740991
console.log(typeof decimal1);       // Output: number

// ============================================================
// 2. FLOATING-POINT Literals
// ============================================================
let float1 = 3.14;          // Standard decimal
let float2 = 0.5;           // Less than 1
let float3 = 255.0;         // Trailing zero
let float4 = .5;            // Leading zero omitted
let float5 = 2.0;           // Whole number as float

console.log("=== FLOATING-POINT ===");
console.log(float1);                // Output: 3.14
console.log(float2);                // Output: 0.5
console.log(float3);                // Output: 255
console.log(float4);                // Output: 0.5
console.log(float5);                // Output: 2
console.log(typeof float1);         // Output: number

// ============================================================
// 3. EXPONENTIAL (Scientific) Notation
// ============================================================
let exp1 = 5e3;             // 5 * 10^3 = 5000
let exp2 = 5e+3;            // Explicit positive exponent
let exp3 = 5e-3;            // 5 * 10^-3 = 0.005
let exp4 = 1.2e10;          // 1.2 * 10^10 = 12000000000
let exp5 = 1.2e-10;         // 1.2 * 10^-10 = 0.00000000012
let exp6 = -3.5e2;          // Negative with exponent

console.log("=== EXPONENTIAL ===");
console.log(exp1);                  // Output: 5000
console.log(exp2);                  // Output: 5000
console.log(exp3);                  // Output: 0.005
console.log(exp4);                  // Output: 12000000000
console.log(exp5);                  // Output: 1.2e-10
console.log(exp6);                  // Output: -350
console.log(typeof exp1);           // Output: number

// ============================================================
// 4. BINARY (Base 2) Literals - starts with 0b or 0B
// ============================================================
let bin1 = 0b0;             // Binary 0
let bin2 = 0b1;             // Binary 1
let bin3 = 0b1010;          // Binary 1010 = Decimal 10
let bin4 = 0B1111;          // Uppercase prefix = Decimal 15
let bin5 = 0b11111111;      // Binary 11111111 = Decimal 255

console.log("=== BINARY ===");
console.log(bin1);                  // Output: 0
console.log(bin2);                  // Output: 1
console.log(bin3);                  // Output: 10
console.log(bin4);                  // Output: 15
console.log(bin5);                  // Output: 255
console.log(typeof bin1);           // Output: number

// ============================================================
// 5. OCTAL (Base 8) Literals - starts with 0o or 0O
// ============================================================
let oct1 = 0o0;             // Octal 0
let oct2 = 0o7;             // Octal 7 = Decimal 7
let oct3 = 0o10;            // Octal 10 = Decimal 8
let oct4 = 0O755;           // Uppercase prefix = Decimal 493
let oct5 = 0o777;           // Octal 777 = Decimal 511

console.log("=== OCTAL ===");
console.log(oct1);                  // Output: 0
console.log(oct2);                  // Output: 7
console.log(oct3);                  // Output: 8
console.log(oct4);                  // Output: 493
console.log(oct5);                  // Output: 511
console.log(typeof oct1);           // Output: number

// ============================================================
// 6. HEXADECIMAL (Base 16) Literals - starts with 0x or 0X
// ============================================================
let hex1 = 0x0;             // Hex 0
let hex2 = 0xA;             // Hex A = Decimal 10
let hex3 = 0xFF;            // Hex FF = Decimal 255
let hex4 = 0Xff;            // Mixed case = Decimal 255
let hex5 = 0xDEADBEEF;      // Large hex

console.log("=== HEXADECIMAL ===");
console.log(hex1);                  // Output: 0
console.log(hex2);                  // Output: 10
console.log(hex3);                  // Output: 255
console.log(hex4);                  // Output: 255
console.log(hex5);                  // Output: 3735928559
console.log(typeof hex1);           // Output: number

// ============================================================
// 7. NUMERIC SEPARATORS (Underscores for readability)
// ============================================================
let sep1 = 1_000;           // One thousand
let sep2 = 1_000_000;       // One million
let sep3 = 1_000_000_000;   // One billion
let sep4 = 1_2_3_4_5;       // Every digit separated
let sep5 = 1_0.5_5;         // In float (valid)
let sep6 = 1e1_0;           // In exponent (valid)
let sep7 = 0xFF_FF;         // In hexadecimal
let sep8 = 0b1111_0000;     // In binary
let sep9 = 0o7_7_7;         // In octal

console.log("=== NUMERIC SEPARATORS ===");
console.log(sep1);                  // Output: 1000
console.log(sep2);                  // Output: 1000000
console.log(sep3);                  // Output: 1000000000
console.log(sep4);                  // Output: 12345
console.log(sep5);                  // Output: 10.55
console.log(sep6);                  // Output: 10000000000
console.log(sep7);                  // Output: 65535
console.log(sep8);                  // Output: 240
console.log(sep9);                  // Output: 511
console.log(typeof sep1);           // Output: number

// ============================================================
// 8. SPECIAL NUMBER VALUES
// ============================================================
let posInfinity = Infinity;
let negInfinity = -Infinity;
let notANumber = NaN;

console.log("=== SPECIAL VALUES ===");
console.log(posInfinity);           // Output: Infinity
console.log(negInfinity);           // Output: -Infinity
console.log(notANumber);            // Output: NaN
console.log(typeof posInfinity);    // Output: number

// ============================================================
// 9. BIGINT (separate type, not number)
// ============================================================
let bigInt1 = 123456789012345678901234567890n;
let bigInt2 = 0b1010n;              // Binary BigInt
let bigInt3 = 0o755n;               // Octal BigInt
let bigInt4 = 0xFFn;                // Hex BigInt

console.log("=== BIGINT ===");
console.log(bigInt1);               // Output: 123456789012345678901234567890n
console.log(bigInt2);               // Output: 10n
console.log(bigInt3);               // Output: 493n
console.log(bigInt4);               // Output: 255n
console.log(typeof bigInt1);        // Output: bigint
