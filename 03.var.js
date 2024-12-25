var age;
console.log(age); // undefined

// The variable declaration is hoisted to the top of the scope, but the assignment is not.
y = 40;
var y;
console.log(y); // 40

// The block {} is unnecessary since var declarations are function-scoped, not block-scoped.
// Consider removing the block to improve readability.
{
  var name = "Atul";
}
name = "Ravi";
console.log(name); // Ravi

//global scope
var result = 0; // global variable
function printNumSquare(num) {
  result = num * num;
  return result;
}

console.log(printNumSquare(5)); // 25
result = 50; // unintended side effect
console.log(result); // 50

// Function scope
function printNumCube(num) {
  var res = num * num * num; // local variable
  return res;
}
console.log(printNumCube(5)); // 125
//console.log(res); // res is not defined
