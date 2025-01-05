/* The Array object, as with arrays in other programming languages,
 * enables storing a collection of multiple items under a single variable name,
 * and has members for performing common array operations */

let oddNumbers = [1, 3, 5, 7, 9, 11];

console.log(typeof oddNumbers); // Object
console.log(Object.getPrototypeOf(oddNumbers)); // Object(0) []
console.log(oddNumbers instanceof Array); // true

// length property : array length property mutable

console.log(oddNumbers.length);
oddNumbers.length = 10; // increases length and fill empty items
console.log(oddNumbers); // [ 1, 3, 5, 7, 9, 11, <4 empty items> ]
