// Boolean is a primitive data type in JavaScript.
// It can have only two values: true or false.

let isTrue = true;
let isFalse = false;

let passed = true;

if (passed) {
  console.log("Test Passed");
}

// Boolean value can be created using Boolean() constructor.

Boolean(0); // false
Boolean(1); // true
Boolean(""); // false
Boolean(undefined); // false
Boolean(null); // false
Boolean(NaN); // false

// Boolean value coerced to a number

console.log(true + 1); // 2
console.log(false + 1); // 1
