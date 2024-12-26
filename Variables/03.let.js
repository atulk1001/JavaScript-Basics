// we can not declare let variable with same name in same block scope

let name = "Atul";
let name = "Ravi"; // SyntaxError: Identifier 'name' has already been declared

// below is fine as both are in different block scope

let skill = "JavaScript";
{
  let skill = "React";
  console.log(skill); // React
}
console.log(skill); // JavaScript
