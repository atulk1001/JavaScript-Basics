//The var statement declares function-scoped or globally-scoped variables, which can be redeclared and reassigned.
//The var statement is hoisted to the top of the function or global scope, but the assignment is not.

var name = "John"; // global variable
var name = "Doe"; // redeclared
console.log(name); // Doe
name = "Jane"; //reassigned
console.log(name); // Jane

// var is function-scoped

function printName() {
  var name = "John"; //local variable
  console.log(name); // John
}
printName(); // John
console.log(name); // Jane
