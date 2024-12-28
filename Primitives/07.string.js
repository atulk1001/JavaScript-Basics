// replaceAll(): Replaces all occurrences of a specified value in a string.
// It returns a new string. Original string remains unchanged.

// The replaceAll() method is case-sensitive by default. To perform a case-insensitive replacement, you can use a regular expression with the /i flag.
let greeting =
  "Welcome to JavaScript class. JavaScript is a programming language.JAVASCRIPT IS AWESOME.";
console.log(greeting.replaceAll("JavaScript", "Python"));

// To perform a case-insensitive replacement, you can use a regular expression with the /i flag.
let regEx = new RegExp("JavaScript", "ig");
console.log(greeting.replace(regEx, "Python"));
console.log(greeting);
