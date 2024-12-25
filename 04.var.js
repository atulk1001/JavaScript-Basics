//Var does not have block scope
for (var i = 0; i < 5; i++) {
  console.log(i);
}
// in Above for block var i is declared and assigned to 0 and value is incremented by 1 in each iteration
// Scope of var is not limited to block, so i is accessible outside the block
// we can see latest value of i is 5
console.log(i); // 5
matchScore = 100;
console.log(matchScore);

var 1number = 1; //SyntaxError: Invalid or unexpected token
var !number = 1; //SyntaxError: Invalid or unexpected token
var #number = 1; //SyntaxError: Invalid or unexpected token
var in = 1; //SyntaxError: Unexpected token 'in'