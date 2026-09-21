
// 1. VARIABLES IN JAVASCRIPT

let a = 554254;
console.log("Value of a:", a);

let b = "Navinkumar";
console.log("Value of b:", b);

let c = 87425685268545n;
console.log("Value of c:", c);

console.log("Type of a:", typeof a);
console.log("Type of b:", typeof b);
console.log("Type of c:", typeof c);


// 2. DATA TYPES IN JAVASCRIPT

// String
let name = "Navinkumar Arerao Gadade";
console.log("String:", typeof name);

// Number
let age = 20;
console.log("Number:", typeof age);

// BigInt
let bigNumber = 41254126842641298n;
console.log("BigInt:", typeof bigNumber);

// Boolean
let fine = true;
console.log("Boolean:", typeof fine);

// Undefined
let x;
console.log("Undefined:", typeof x);

// Null
let n = null;
console.log("Null:", typeof n);

// Symbol
let sym1 = Symbol("identifier");
console.log("Symbol:", typeof sym1);


// 3. NUMBER DATA TYPE IN JAVASCRIPT

let num1 = 5416854565;
console.log("Positive Integer:", typeof num1);

let num2 = 54.16854565;
console.log("Positive Decimal:", typeof num2);

let num3 = -5416854565;
console.log("Negative Integer:", typeof num3);

let num4 = -54.16854565;
console.log("Negative Decimal:", typeof num4);


// 4. ARITHMETIC OPERATORS

let num5 = 10;
let num6 = 20;

let addition = num5 + num6;
let subtraction = num5 - num6;
let multiplication = num5 * num6;
let division = num5 / num6;
let modulus = num5 % num6;

console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Modulus:", modulus);


// 5. NaN (NOT A NUMBER)

let num7 = 0;
let num8 = 0;

let result = num7 / num8;

console.log("Result:", result);
console.log("Type of Result:", typeof result);


// 6. OPERATOR PRECEDENCE (BODMAS)

console.log(10 * 20 + 30 - 300);

console.log(10 ** 20 + 20 - (40 / 60) * 50);

console.log(10 + 20 - (30 / 30) * 30);
