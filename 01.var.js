// var can be redeclaired and reassigned

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
