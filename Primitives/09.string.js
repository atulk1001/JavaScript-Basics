/* slice() method
 * The slice() method extracts a section of a string and
 * returns it as a new string, without modifying the original string.
 */

let str = "The quick brown fox jumps over the lazy dog.";
let res = str.slice(4);
console.log(res);

console.log(str.slice(4, 5)); // q
console.log(str.slice(4, 9)); // quick
console.log(str.slice(-4)); // dog.
console.log(str.slice(-9, -5)); // lazy
